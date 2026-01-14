const { createApp, ref } = Vue;

const app = Vue.createApp({
  setup() {
    let nombre = ref("Luke");
    let apellidos = ref("Skywalker");
    let edad = ref(20);
    let numeroAleatorio = Math.random();
    let imagen = ref(
      "https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/04/18/156382.jpg"
    );
    let textoImagen = ref("Foto de Luke Skywalker");
    let estilos = ref(false);
    let enlaces = ref([
      "https://www.starwars.com/",
      "https://starwars.fandom.com/es/wiki/Databank_(sitio_web)",
      "https://www.lafosadelrancor.com/",

    
    ]);

    return {
      nombre,
      apellidos,
      edad,
      imagen,
      textoImagen,
      estilos,
      enlaces,
      numeroAleatorio
    };
  },
});
