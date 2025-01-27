import axios from "axios";
const domain = "https://lilix.ceramicaitalia.com:3001";

export const Message = {
  async sendNotificationGoogle(
    info: object,
    listaBlanca: boolean = false
  ): Promise<any> {
    try {
     let  data = JSON.stringify(info)
      let message: string = "";
      if (listaBlanca) {
        message = `Un nuevo registro de italpuntos acaba de aceptar los terminos y condiciones, ya se encuentra registrado en nuestra lista blanca para el envio sms, valida su informacion en sap o comunicale a la sala de ventas, ${data}`;
      } else {
        message = `el usuario  , ${data}  acepto los terminos y condiciones de italpuntos, pero no se encuentra en la lista blanca`;
      }
      const raw = JSON.stringify({
        param1: "AAAAFW9lyNA",
        message: message,
        key: "AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI",
        token: "8lYWXr3MX_f2hk46s05pWG9TFYmtT2p1dBNRCJEMgwA",
      });

      const response = await axios({
        method: "post",
        maxBodyLength: Infinity,
        url: `${domain}/mensajeria/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: raw,
      });

      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async SendSms(numberPhone : string, message : string): Promise<any> {
    try {
      const raw = {
        phoneNumber : numberPhone,
        message : message
      }
      const response = await axios({
        method: "post",
        maxBodyLength: Infinity,
        url: `${domain}/mensajeria/sms`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(raw),
      });

      return response.data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
    
  }
};
