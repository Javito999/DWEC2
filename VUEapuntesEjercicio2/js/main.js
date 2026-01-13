const { createApp, ref, reactive } = Vue;

const app = createApp({
    setup(){
       
        const tipo = ref("texto");
        

         return{
        
        tipo

    };
    }

});


const lista = createApp({
    setup(){

    const personas = reactive([
        {dni:12234422, nombre:'Paco', apellidos:'Márquez Gómez'},
        {dni:14563344, nombre:'Silvia', apellidos:'Sánchez Gómez'},
        {dni:23454422, nombre:'Fernando', apellidos:'Estévez Rodriguez'},
    ]);

    return{
        personas
    };


    }
});