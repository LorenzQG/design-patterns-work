class Casa {
  constructor(temParedes, temPiso, temTelhado, temPortas, temJanelas) {
    this.temParedes = temParedes || false;
    this.temPiso = temPiso || false;
    this.temTelhado = temTelhado || false;
    this.temPortas = temPortas || false;
    this.temJanelas = temJanelas || false;
  }
}

class CasaBuilder {
  constructor() {
    this.casa = new Casa();
  }

  adicionarParedes() {
    this.casa.temParedes = true;
    return this;
  }

  adicionarPiso() {
    this.casa.temPiso = true;
    return this;
  }

  adicionarTelhado() {
    this.casa.temTelhado = true;
    return this;
  }

  adicionarPortas() {
    this.casa.temPortas = true;
    return this;
  }

  adicionarJanelas() {
    this.casa.temJanelas = true;
    return this;
  }
}

const casinha = CasaBuilder();
casinha.adicionarPiso().adicionarParedes();

console.log(casinha);
