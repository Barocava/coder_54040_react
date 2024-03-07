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
    miniatura: "/coder_54040_react/img/planimetria_casa_Larrain.jpg",
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
    miniatura: "/coder_54040_react/img/planimetria_casa_Moncada.jpg",
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
    miniatura: "/coder_54040_react/img/planimetria_casa_sennerman.jpg",
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
    miniatura: "/coder_54040_react/img/planimetria_casa_espinoza.jpg",
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
    miniatura: "/coder_54040_react/img/planimetria_casa_fierro.jpg",
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
    miniatura: "/coder_54040_react/img/planimetria_casa_guevera.jpg",
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
    miniatura: "/coder_54040_react/img/casa_campino/DSC043712.jpg",
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
    miniatura: "/coder_54040_react/img/casa_caorsi/exterior-8-copia3.jpg",
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
    miniatura: "/coder_54040_react/img/casa_mallorca/Mallorca-32.jpg",
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
    miniatura: "/coder_54040_react/img/casa_nallar/Nallar-82.jpg",
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
    miniatura: "/coder_54040_react/img/casa_reyes/Reyes-51.jpg",
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
    miniatura: "/coder_54040_react/img/casa_tapia/Tapia-72.jpg",
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