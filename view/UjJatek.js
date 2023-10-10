class UjJatek{

    constructor(szuloElem){
        this.szuloElem = szuloElem;
        this.szuloElem.append(`<button type="button" class="btn btn-success">Újra</button>`);   
      
        this.gomb = $(".btn").on("click", ()=>{
            this.Esemenyem("UjJatek");
        });
    }
    Esemenyem(nev){
        
        let esemeny = new CustomEvent(nev);
        window.dispatchEvent(esemeny);
    }
}
export default UjJatek;