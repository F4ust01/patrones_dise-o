class InventarioViejo {
  private items: { nombre: string; tipo: string; estado: string }[] = [];

  public agregarItem(nombre: string, tipo: string, estado: string): void {
    this.items.push({ nombre, tipo, estado });
  }

  public obtenerItems(): { nombre: string; tipo: string; estado: string }[] {
    return this.items;
  }
}

class AdaptadorInventario {
  constructor(private inventarioViejo: InventarioViejo) {}

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.inventarioViejo.agregarItem(nombre, tipo, estado);
  }

  public listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
    return this.inventarioViejo.obtenerItems();
  }
}
