import { defineStore } from 'pinia';

interface UserState {
  token: string | null;
  TokenSession: string | null;
  userCode: string | null;
  bpCode: string | null;
  userName: string | null;
  puntosAcumulados: number;
  puntosDisponibles: number;
  PuntosRedimidos : number;
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
    },
    getDataUser(usercode: string, bpCode: string){

    },
    updateDataUser(usercode: string, bpCode: string, puntosRedimidos: number) {

    }
  },
});