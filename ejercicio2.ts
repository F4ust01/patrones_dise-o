class Equipo {
  constructor(public nombre: string, public tipo: string) {}
  detalles() {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}`;
  }
}

class Notebook extends Equipo {
  constructor(nombre: string, public ram: string, public procesador: string) {
    super(nombre, "Notebook");
  }

  detalles() {
    return `${super.detalles()}, RAM: ${this.ram}, Procesador: ${
      this.procesador
    }`;
  }
}

class Desktop extends Equipo {
  constructor(nombre: string, public ram: string, public procesador: string) {
    super(nombre, "Desktop");
  }

  detalles() {
    return `${super.detalles()}, RAM: ${this.ram}, Procesador: ${
      this.procesador
    }`;
  }
}

class Servidor extends Equipo {
  constructor(nombre: string, public ram: string, public procesador: string) {
    super(nombre, "Servidor");
  }

  detalles() {
    return `${super.detalles()}, RAM: ${this.ram}, Procesador: ${
      this.procesador
    }`;
  }
}

class EquipoFactory {
  crearEquipo(
    tipo: string,
    nombre: string,
    ram: string,
    procesador: string
  ): Equipo {
    switch (tipo) {
      case "Notebook":
        return new Notebook(nombre, ram, procesador);
      case "Desktop":
        return new Desktop(nombre, ram, procesador);
      case "Servidor":
        return new Servidor(nombre, ram, procesador);
      default:
        throw new Error("Tipo de equipo no soportado.");
    }
  }
}
