class Casa {
  constructor(temParedes, temPiso, temTelhado, temPortas, temJanelas) {
    this.temParedes = temParedes || false;
    this.temPiso = temPiso || false;
    this.temTelhado = temTelhado || false;
    this.temPortas = temPortas || false;
    this.temJanelas = temJanelas || false;
  }

  adicionarParedes() {
    this.temParedes = true;
    return this;
  }

  adicionarPiso() {
    this.temPiso = true;
    return this;
  }

  adicionarTelhado() {
    this.temTelhado = true;
    return this;
  }

  adicionarPortas() {
    this.temPortas = true;
    return this;
  }

  adicionarJanelas() {
    this.temJanelas = true;
    return this;
  }
}

const casinha = new Casa();
casinha.adicionarPiso().adicionarParedes();
console.log(casinha);
