import axios from "axios";
const domain = "https://lilix.ceramicaitalia.com:3001";

export const cliente = {
  async getCliente(cc: string): Promise<any> {
    try {
      const response = await axios({
        method: "post",
        maxBodyLength: Infinity,
        url: `${domain}/clientes/getcliente/`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic Ym9ydGVnYVpCb3J0ZWdhKzExM==",
        },
        data: JSON.stringify({ cc }),
      });

      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async getTokenSession(
    userCode: string | null,
    bpCode: string | null
  ): Promise<any> {
    try {
      const response = await axios({
        method: "post",
        maxBodyLength: Infinity,
        url: `${domain}/auth/login/italpuntos/`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ userCode, bpCode }),
      });

      return response.data;
    } catch (error) {
      return 500;
    }
  },

  async getDataloyalty(
    cc: string,
    pedido: string,
    BANDERA: string,
    FILTRO: string,
    MARGENALIADO: number
  ): Promise<any> {
    let data: object = {
      BANDERA: BANDERA,
      OFERTA: pedido,
      MARGENALIADO: MARGENALIADO,
      MARGENINTERNO: "",
      TOKEN: "",
      RESPUESTAWP: "",
      USUARIOAPROB: "",
      FILTRO: FILTRO,
      CODBP: cc,
    };
    try {
      const response = await axios({
        method: "post",
        maxBodyLength: Infinity,
        url: `${domain}/clientes/quote/`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      });

      return response.data;
    } catch (error) {
      return JSON.stringify(error);
    }
  },
  async registraAprobacion(
    consecutivo: string,
    pedido: string,
    codBp: string
  ): Promise<any> {
    try {
      let data: object = {
        consecutivo: consecutivo,
        pedido: pedido,
        codBp: codBp,
      };

      const response = await axios({
        method: "post",
        maxBodyLength: Infinity,
        url: `${domain}/clientes/italpuntos/registrar`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
};
