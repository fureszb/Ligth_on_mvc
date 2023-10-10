class LampaElem{
    #id;
    constructor(szuloElem, id){

        this.#id = id;
        this.szuloElem = szuloElem;
        this.EgyLampa();
        this.elem = $(`#${this.#id}`);
       this.elem.on("click", ()=>{
            this.sajatEsemeny("kapcsol");
        });
    }
    EgyLampa(){
        let txt = `<div id="${this.#id}"></div>`;
        this.szuloElem.append(txt);
    }
    sajatEsemeny(nev){
        const esemeny = new CustomEvent(nev, {detail : this.#id})
        window.dispatchEvent(esemeny);
    }

}
export default LampaElem;