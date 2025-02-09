import { defineStore } from 'pinia';

interface UserState {
  token: string | null;
  TokenSession: string | null;
  userCode: string | null;
  bpCode: string | null;
  userName: string | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: null,
    TokenSession: null,
    userCode: null,
    bpCode: null,
    userName: null,
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
  },
});