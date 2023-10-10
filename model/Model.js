class Model {
  #lista = [];
  #meret = 9;
  constructor() {

    for (let index = 0; index < this.#meret; index++) {
      this.#lista.push(false);
    }
    console.log(this.#lista);
  }
  felKapcsol(id) {
    this.#lista[id] = true;
  }
  setSzin(id, szin) {
    $(`#${id}`).css("background-color", szin);
  }
  setSzomszed(id) {
    if (id === 0 || id === 3 || id === 6) {
      this.#lista[id + 1] = true;
      this.#lista[id - 3] = true;
      this.#lista[id + 3] = true;
    } else {
      if (id === 2 || id === 5 || id === 8) {
        this.#lista[id - 1] = true;
        this.#lista[id - 3] = true;
        this.#lista[id + 3] = true;
      } else {
        if (id == 4) {
          this.#lista[id + 3] = true;
          this.#lista[id - 3] = true;
          this.#lista[id + 1] = true;
          this.#lista[id - 1] = true;
        } else {
          if (id == 1) {
            this.#lista[id + 3] = true;
            this.#lista[id + 1] = true;
            this.#lista[id - 1] = true;
          } else {
            if (id == 7) {
              this.#lista[id - 3] = true;
              this.#lista[id + 1] = true;
              this.#lista[id - 1] = true;
            } else {
              this.#lista[id + 1] = true;
              this.#lista[id - 1] = true;
            }
          }
        }
      }
    }
  }
  getList() {
    return this.#lista;
  }
  leKapcsol(id) {
    this.#lista[id] = false;
  }
  getMeret(){
    return this.#meret;
  }
}
export default Model;
