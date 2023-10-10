import Model from "../model/model.js";
import LampaElem from "../view/LampaElem.js";
import UjJatek from "../view/UjJatek.js";

class Controller {
  constructor() {
    this.MODEL = new Model();
    let gombElem = $(".gombok");
    this.UJATEK = new UjJatek(gombElem);
    let szuloElem = $(".jatekTer");
    for (let index = 0; index < this.MODEL.getMeret(); index++) {
      this.Lampa = new LampaElem(szuloElem, index);
    }
  

    $(window).on("kapcsol", (event) => {
        
        let lista = this.MODEL.getList();


        if(lista[event.detail] == false){
            this.MODEL.felKapcsol(event.detail);
        }
        else{
            this.MODEL.leKapcsol(event.detail);
        }
      
      this.MODEL.setSzomszed(event.detail);

      for (let index = 0; index < lista.length; index++) {
        if (lista[index] == true) {
          this.MODEL.setSzin(index, "yellow");
        } else {
          this.MODEL.setSzin(index, "white");
        }
      }
      console.log(lista);
    });
  }
}
export default Controller;