console.log("--------------------");
console.log("Objeto Usuario");
const usuario = {
    nombre: 'Diego',
    apellido: 'Salazar',
    edad: 21,
    direccion: {
      calle: 'Villa los corales',
      numero: 123,
      ciudad: 'Concepción',
      pais: 'Chile'
    },
    contactos: {
      telefono: '123456789',
      email: 'diegosalazar@example.com',
      redesSociales: {
        instagram: '@diego',
      }
    },
    intereses: ['Programación', 'Música', 'Ajedrez']
  }; //No quise rellenar con mis datos jajaja

// Desestructuracion para extraer nombre, apellido, ciudad
const { nombre, apellido, direccion: { ciudad } } = usuario;

//Primer interés
const [primerInteres] = usuario.intereses;

//Email e instagram
const { contactos: { email, redesSociales: { instagram } } } = usuario;

//Extraer y renombrar calle y numero
const { direccion: { calle: calleUsuario, numero: numeroUsuario } } = usuario;

// Imprimir todas las variables extraidas
console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Ciudad:", ciudad);
console.log("Primer interés:", primerInteres);
console.log("Email:", email);
console.log("Instagram:", instagram);
console.log("Calle Usuario:", calleUsuario);
console.log("Número Usuario:", numeroUsuario);
