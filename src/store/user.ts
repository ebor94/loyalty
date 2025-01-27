import { defineStore } from 'pinia';

interface UserState {
  token: string | null;
  TokenSession: string | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: null,
    TokenSession: null,
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    clearToken() {
      this.token = null;
      this.TokenSession = null;
    }
  }
});