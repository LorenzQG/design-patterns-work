class Casa {
  constructor({ temParedes, temPiso, temTelhado, temPortas, temJanelas }) {
    this.temParedes = temParedes;
    this.temPiso = temPiso;
    this.temTelhado = temTelhado;
    this.temPortas = temPortas;
    this.temJanelas = temJanelas;
  }
}

const casinha = new Casa(true, true, false, false, false);
