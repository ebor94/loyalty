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
    typeUser : ''
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
    saveUserItalparner(userName: string, userCode: string, email: string) {
      this.userName = userName;
      this.email = email;
      this.typeUser = 'italpartner';
      this.userCode = userCode;
      console.log("invocó getDataUserItalparner");   
     this.getDataUserItalparner(this.userCode, "2");
      
    },
    async getDataUser(usercode: string, bpCode: string){
      const data = await cliente.getDataloyalty(usercode,'','14',usercode,0)
      const balance = await Cupon.getGiftcardBought(usercode);
      this.Acumulaciones =  data.filter((item:any) => item.aprobcte === '1')      
      this.Redenciones = balance.data;
      this.PuntosRedimidos =  this.Redenciones.reduce((sum, item) => sum + item.valor, 0);
      this.puntosAcumulados = data.reduce((sum : number, item : any) =>  item.aprobcte === '1' ? sum + item.margenaliado : sum, 0);
      this.puntosDisponibles = this.puntosAcumulados - this.PuntosRedimidos
      this.puntosDisponibles = this.puntosDisponibles < 0 ? 0 : this.puntosDisponibles
         

    },
    updateDataUser(usercode: string, bpCode: string, puntosRedimidos: number) {
      this.puntosDisponibles = this.puntosDisponibles - puntosRedimidos
    }
    ,
    async getDataUserItalparner(cc: string, Bandera:string){
     // console.log("va a consultar synergy", cc , Bandera);      
      const dataItalparner = await italparner.getBalance(cc,Bandera) as dataItalparner; 
      const AcumulacionesItalparner = await italparner.getBalance(cc,"4") as ItalparnerAcumulado;   
       //console.log(AcumulacionesItalparner.data.data)  
       this.PuntosRedimidos =  Number(dataItalparner.data.data[0].PRedimidos? dataItalparner.data.data[0].PRedimidos : 0);
       this.puntosAcumulados = Number(dataItalparner.data.data[0].PObtenidos? dataItalparner.data.data[0].PObtenidos : 0);
       this.puntosDisponibles = Number(dataItalparner.data.data[0].PPendientes? dataItalparner.data.data[0].PPendientes : 0);
       let acumuItalparner = AcumulacionesItalparner.data.data as Array<any>;
       this.Acumulaciones = acumuItalparner //acumuItalparner.filter((item:any) => item.Estado === 'Aprobado')
      // const balance = await Cupon.getGiftcardBought(usercode);
      // this.Acumulaciones =  data.filter((item:any) => item.aprobcte === '1')      
      // this.Redenciones = balance.data;
      // this.PuntosRedimidos =  this.Redenciones.reduce((sum, item) => sum + item.valor, 0);
      // this.puntosAcumulados = data.reduce((sum : number, item : any) =>  item.aprobcte === '1' ? sum + item.margenaliado : sum, 0);
      // this.puntosDisponibles = this.puntosAcumulados - this.PuntosRedimidos
      // this.puntosDisponibles = this.puntosDisponibles < 0 ? 0 : this.puntosDisponibles
         

    },
    updateDataUserItalparner(cc: string, puntosRedimidos: number) {
      this.puntosDisponibles = this.puntosDisponibles - puntosRedimidos
    }
  },
});