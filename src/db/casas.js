class Casas {
    constructor(objeto){
        this.id = objeto.id;
        this.miniatura = objeto.miniatura;
        this.titulo = objeto.titulo;
        this.metros = objeto.metros;
        this.ubicacion = objeto.ubicacion;
        this.constructora = objeto.constructora;
        this.calculista = objeto.calculista;
        this.precio = objeto.precio;
        this.enCarrito = objeto.enCarrito;
    }
}

let casas = [];

casas.push(new Casas({
    id: 0,
    miniatura: "https://lh3.googleusercontent.com/d/1TSwZ_oEHwDhaJOdHeQKf5pMdjVyPA02W",
    titulo: "Casa Larrain",
    metros: 350,
    ubicacion: "Concon",
    constructora: "Santiago Vergara",
    calculista: "Mauricio Ahumada",
    precio: 300000,
    enCarrito: 0
}));

casas.push(new Casas({
    id: 1,
    miniatura: "https://lh3.googleusercontent.com/d/1BGOw-f9584oJmcDq3XnP0L_PMf9zhmL7",
    titulo: "Casa Moncada",
    metros: 350,
    ubicacion: "Cantagua",
    constructora: "Constructora LS",
    calculista: "Mauricio Ahumada",
    precio: 400000,
    enCarrito: 0
  }));
  
  casas.push(new Casas({
    id: 2,
    miniatura: "https://lh3.googleusercontent.com/d/1zjBqoxphabssAnB9K3Q3rAEHzv_Z9aGr",
    titulo: "Casa Sennerman",
    metros: 350,
    ubicacion: "Cantagua",
    constructora: "Carlos Torres",
    calculista: "Mauricio Ahumada",
    precio: 1100000,
    enCarrito: 0
  }));
  
  casas.push(new Casas({
    id: 3,
    miniatura: "https://lh3.googleusercontent.com/d/12GCIqNXFInY5_wIiC7aYv6CvaHzTHYeE",
    titulo: "Casa Espinoza",
    metros: 350,
    ubicacion: "Brisas Santo Domingo",
    constructora: "Constructora RE",
    calculista: "David Valenzuela",
    precio: 1000000,
    enCarrito: 0 
  }));
  
  casas.push(new Casas({
    id: 4,
    //miniatura: "/coder_54040_react/img/planimetria_casa_fierro.jpg",
    miniatura: "https://lh3.googleusercontent.com/d/1AosM4bfi7JNKlkza6zB46H7eBCaO7TQH",
    titulo: "Casa Fierro",
    metros: 300,
    ubicacion: "Brisas de Santo Domingo",
    constructora: "Constructora GF",
    calculista: "David Valenzuela",
    precio: 600000,
    enCarrito: 0
  }));
  
  casas.push(new Casas({
    id: 5,
    miniatura: "https://lh3.googleusercontent.com/d/1yeIKlggtUbh7v-hZ_RynrBrpEcJtfuvc",
    titulo: "Casa Guevara",
    metros: 400,
    ubicacion: "Chicureo",
    constructora: "Carlos Torres",
    calculista: "Mauricio Ahumada",
    precio: 200000,
    enCarrito: 0
  }));
  
  casas.push(new Casas({
    id: 6,
    miniatura: "https://lh3.googleusercontent.com/d/1v35HXgkLwXOhUAttZr6h4pB5yJ1NQsn3",
    titulo: "Casa Campino",
    metros: 300,
    ubicacion: "Brisas de Santo Domingo",
    constructora: "Constructora JC",
    calculista: "Mauricio Ahumada",
    precio: 1200000,
    enCarrito: 0
  }));
  
  casas.push(new Casas({
    id: 7,
    miniatura: "https://lh3.googleusercontent.com/d/1gxLl9BMC05Gqd5ULpHwmE60Thg8wxkCw",
    titulo: "Casa Caorsi",
    metros: 350,
    ubicacion: "Rancagua",
    constructora: "Constructora Nieny",
    calculista: "Hector Burgos",
    precio: 300000,
    enCarrito: 0
  }));
  
  casas.push(new Casas({
    id: 8,
    miniatura: "https://lh3.googleusercontent.com/d/1kBDnpdAqutgM08WwuxZPziiNYbjgO2-3",
    titulo: "Casa Mallorca",
    metros: 400,
    ubicacion: "Cachagua",
    constructora: "Juan Castagnola",
    calculista: "Mauricio Ahumada",
    precio: 1300000,
    enCarrito: 0
  }));
  
  casas.push(new Casas({
    id: 9,
    miniatura: "https://lh3.googleusercontent.com/d/1Jv60anqrf89Cd7XIO_mjU26yTAxWYYYV",
    titulo: "Casa Nallar",
    metros: 400,
    ubicacion: "Chicureo",
    constructora: "Carlos Torres",
    calculista: "Mauricio Ahumada",
    precio: 900000,
    enCarrito: 0 
  }));
  
  casas.push(new Casas({
    id: 10,
    miniatura: "https://lh3.googleusercontent.com/d/17Sa11oeFNpiPTN-3mQL4Kcz6wg8Sp7nn",
    titulo: "Casa Reyes",
    metros: 500,
    ubicacion: "Lo Barnechea",
    constructora: "Santiago Vergara",
    calculista: "Mauricio Ahumada",
    precio: 500000,
    enCarrito: 0
  }));
  
  casas.push(new Casas({
    id: 11,
    miniatura: "https://lh3.googleusercontent.com/d/14K3DTrmQPLVFRrWI-PNt9rEFhH1Cv2iK",
    titulo: "Casa Tapia",
    metros: 400,
    ubicacion: "Concon",
    constructora: "Juan Castagnola",
    calculista: "Héctor Burgos",
    precio: 700000,
    enCarrito: 0
  }));

export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(casas);
      }, 1500);
    });
  };

//export {casas};