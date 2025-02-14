import { defineStore } from 'pinia';
import { cliente } from '../service/clientes';
import { Cupon } from '../service/cupon';

interface UserState {
  token: string | null;
  TokenSession: string | null;
  userCode: string | null;
  bpCode: string | null;
  userName: string | null;
  puntosAcumulados: number;
  puntosDisponibles: number;
  PuntosRedimidos : number;
  Acumulaciones : Array<any>;
  Redenciones : Array<any>;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: null,
    TokenSession: null,
    userCode: null,
    bpCode: null,
    userName: null,
    puntosAcumulados : 0,
    puntosDisponibles : 0,
    PuntosRedimidos : 0,
    Acumulaciones : [],
    Redenciones: [],	
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
    saveUser(userName: string, userCode: string, bpCode: string) {
      this.userName = userName;
      this.bpCode = bpCode;
      this.userCode = userCode;
     this.getDataUser(this.userCode, this.bpCode);
      
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
  },
});