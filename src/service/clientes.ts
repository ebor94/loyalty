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
        data: JSON.stringify({ cc })
      });
      
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};
