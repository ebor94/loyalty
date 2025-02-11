import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Cupon } from '../service/cupon';


interface Giftcard {
    clave                   :  string, 
    codTarjeta              :  string | null, 
    codigo                  :  string, 
    empresa                 :  string, 
    fechaExpiracionTicket   : string,
    hashPdf                 :  string, 
    idGiftcard              : string, 
    nombreEmpresa           : string, 
    status                  : string, 
    url                     : string, 
    userCode                : string, 
    valor                   : number

}

export const useStoreGiftcard = defineStore('giftcard',{
    state: (): Giftcard => ({
        clave                :'',
        codTarjeta           :'',
        codigo               :'',
        empresa              :'',
        fechaExpiracionTicket:'',
        hashPdf              :'',
        idGiftcard           :'',
        nombreEmpresa        :'',
        status               :'',
        url                  :'',
        userCode             :'',
        valor                :0
      }),
    actions:{
        async saveGiftcard(clave : string, codigo:string, empresa: string, fechaExpiracionTicket: string, hashPdf : string, idGiftcard: string, nombreEmpresa : string, status: string, url : string, userCode: string, valor: number){
            this.clave                = clave                ;
            this.codigo               = codigo               ;
            this.empresa              = empresa              ;
            this.fechaExpiracionTicket= fechaExpiracionTicket;
            this.hashPdf              = hashPdf              ;
            this.idGiftcard           = idGiftcard           ;
            this.nombreEmpresa        = nombreEmpresa        ;
            this.status               = status               ;
            this.url                  = url                  ;
            this.userCode             = userCode             ;
            this.valor                = valor                ;

            const data = await Cupon.saveGiftCardBought(this.clave , this.codigo, this.empresa,this.fechaExpiracionTicket,this.hashPdf,this.idGiftcard,this.nombreEmpresa,this.status,this.url,this.userCode,this.valor)
            console.log(data)
        },
        clearGiftCard(){
            this.clave                 = '';
            this.codigo                = '';
            this.empresa               = '';
            this.fechaExpiracionTicket = '';
            this.hashPdf               = '';
            this.idGiftcard            = '';
            this.nombreEmpresa         = '';
            this.status                = '';
            this.url                   = '';
            this.userCode              = '';
            this.valor                 = 0;

        }
    }
    



})