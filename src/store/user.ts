import { defineStore } from 'pinia';
import { cliente, italparner } from '../service/clientes';
import { Cupon } from '../service/cupon';

interface UserState {
  token: string | null;
  TokenSession: string | null;
  userCode: string | null;
  bpCode: string | null;
  email: string | null;
  userName: string | null;
  puntosAcumulados: number;
  puntosDisponibles: number;
  PuntosRedimidos : number;
  Acumulaciones : Array<any>;
  Redenciones : Array<any>;
  typeUser : string | null;
  ciudad: string | null; // Opcional, si se necesita
  telefono: string | null; // Opcional, si se necesita
}
interface dataItalparner {
  data: {
    data: Array<{
      PRedimidos?: number;
      PObtenidos?: number;
      PPendientes?: number;
    }>;
  };
}
interface ItalparnerAcumulado {
  success: boolean;
  data: {
    success: boolean;
    data: Array<{
      "Fecha Flujo": string; // Fecha en formato ISO (string)
      "Cedula": string; // Número de cédula como string
      "Nombre": string; // Nombre completo
      "Numero Flujo": number; // Número de flujo como número
      "Puntos Obtenidos": number; // Puntos obtenidos como número
      "Estado": string; // Estado como string
    }>;
    message: string; // Mensaje de la operación
  };
}

// Función para formatear números con máximo 3 decimales
const formatearNumero = (valor: any): number => {
  // Si ya es un número, formatearlo directamente
  if (typeof valor === 'number') {
    return Math.round(valor * 1000) / 1000;
  }
  
  // Si es string, limpiar el formato
  let valorLimpio = valor?.toString() || '0';
  
  // Remover comas (separadores de miles)
  valorLimpio = valorLimpio.replace(/,/g, '');
  
  // Convertir a número
  const numero = Number(valorLimpio);
  
  //console.log("valor original:", valor, "valor limpio:", valorLimpio, "numero final:", numero);
  
  // Si no es un número válido, retornar 0
  if (isNaN(numero)) {
    return 0;
  }
  
  // Formatear con máximo 3 decimales
  return Math.round(numero * 1000) / 1000;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: null,
    TokenSession: null,
    userCode: null,
    bpCode: null,
    userName: null,
    email: null,
    puntosAcumulados : 0,
    puntosDisponibles : 0,
    PuntosRedimidos : 0,
    Acumulaciones : [],
    Redenciones: [],	
    typeUser : '',
    ciudad: '', // Opcional, si se necesita
    telefono: null, // Opcional, si se necesita
  }),
  

  getters: {
    isAuthenticated(state): boolean {
      return !!state.TokenSession; // Verifica si hay un TokenSession
    },
  },

  actions: {
    setToken(token: string, TokenSession: string) {
      this.token = token;
      this.TokenSession = TokenSession;
    },
    clearToken() {
      this.token = null;
      this.TokenSession = null;
    },
    saveUser(userName: string, userCode: string, bpCode: string, email: string) {
      this.userName = userName;
      this.bpCode = bpCode;
      this.userCode = userCode;
      this.typeUser = 'other';
      this.email = email;
     this.getDataUser(this.userCode, this.bpCode);
      
    },
    saveUserItalparner(userName: string, userCode: string, email: string, telefono : string, ciudad: string) {
      this.userName = userName;
      this.email = email;
      this.typeUser = 'italpartner';
      this.userCode = userCode;
      this.telefono = telefono;
      this.ciudad = ciudad; // Asignar un valor por defecto o desde una fuente externa
      //console.log("invocó getDataUserItalparner");   
     this.getDataUserItalparner(this.userCode, "2");
      
    },
    async getDataUser(usercode: string, bpCode: string){
      const data = await cliente.getDataloyalty(usercode,'','14',usercode,0)
      const balance = await Cupon.getGiftcardBought(usercode);
      this.Acumulaciones =  data.filter((item:any) => item.aprobcte === '1')      
      this.Redenciones = balance.data;
      this.PuntosRedimidos =  this.Redenciones.reduce((sum, item) => sum + item.valor, 0);
      this.puntosAcumulados = data.reduce((sum : number, item : any) =>   sum + item.margeninterno , 0);
      this.puntosDisponibles = this.puntosAcumulados - this.PuntosRedimidos
      this.puntosDisponibles = this.puntosDisponibles < 0 ? 0 : this.puntosDisponibles
         

    },
    updateDataUser(usercode: string, bpCode: string, puntosRedimidos: number) {
      this.puntosDisponibles = this.puntosDisponibles - puntosRedimidos
    }
    ,
    async getDataUserItalparner(cc: string, Bandera:string){
      const dataItalparner = await italparner.getBalance(cc,Bandera) as dataItalparner; 
      const AcumulacionesItalparner = await italparner.getBalance(cc,"4") as ItalparnerAcumulado;   
      
      //console.log("AcumulacionesItalparner",AcumulacionesItalparner.data.data)
      //console.log("dataItalparner",dataItalparner.data)  
     // console.log("PObtenidos",dataItalparner.data.data[0].PPendientes)   
      
      // Aplicar formateo a los números
      this.PuntosRedimidos = dataItalparner.data.data[0].PRedimidos as number;
      this.PuntosRedimidos = formatearNumero(this.PuntosRedimidos);
      this.puntosAcumulados = dataItalparner.data.data[0].PObtenidos  as number;
      this.puntosAcumulados = formatearNumero(this.puntosAcumulados);
      this.puntosDisponibles = this.puntosAcumulados - this.PuntosRedimidos
      this.puntosDisponibles = this.puntosDisponibles < 0 ? 0 : this.puntosDisponibles
      
      let acumuItalparner = AcumulacionesItalparner.data.data as Array<any>;
      this.Acumulaciones = acumuItalparner
    },
    
    updateDataUserItalparner(cc: string, puntosRedimidos: number) {
      this.puntosDisponibles = this.puntosDisponibles - puntosRedimidos
    }
  },
});

