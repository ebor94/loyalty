import axios from "axios";
const domain = "https://lilix.ceramicaitalia.com:3001";

export const Cupon = {
  async getGifCard(id: string): Promise<any> {
    try {
      let data = JSON.stringify({
        id: id,
      });

      const response = await axios({
        method: "post",
        maxBodyLength: Infinity,
        url: `${domain}/clientes/italpuntos/getGiftCard/`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });

      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async getImg(id: number, category: string): Promise<any> {
    try {
      let  response = await axios({
        method: "get",
        maxBodyLength: Infinity,
        url: `https://web.ceramicaitalia.com/temporada/italpuntos/${category}/${id}.jpg`,
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.status;
    } catch (error) {
      return 500;
    }

    
  },
};
