class Persona {
  constructor(
    public cedulaIdentidad: string,
    public nombre: string,
    public primerApellido: string,
    public fechaNacimiento: Date
  ) {}

  saludar(): void {
    console.log(`Soy ${this.nombre} y mi CI es ${this.cedulaIdentidad}`);
  }
}

class Estudiante extends Persona {
  public carnetUniversitario: string;
  constructor(cedulaIdentidad: string, 
    nombre: string, 
    primerApellido: string, 
    fechaNacimiento: Date, 
    carnetUniversitario: string
  ) {
    super(cedulaIdentidad, nombre, primerApellido, fechaNacimiento);
    this.carnetUniversitario = carnetUniversitario;
  }

  saludar():void {
    console.log(`Soy ${this.nombre} y mi CU es ${this.carnetUniversitario}`);
  }
}