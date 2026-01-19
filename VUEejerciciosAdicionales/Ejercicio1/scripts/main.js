const { createApp, ref, reactive } = Vue;

const lista = createApp({
    setup() {

        const productos = reactive([
            { id: 1, nombre: 'Cuenta nómina', saldo: 3597 },
            { id: 2, nombre: 'Plan de pensiones', saldo: 25432 },
            { id: 3, nombre: 'Fondo de Inversión', saldo: 65198 }
        ]);
        return {
            productos
        };
    }
});


const datosCliente = createApp({
    setup() {
        const nombre = ref(`Diego`);
        const apellidos = ref(`Gonzalez Serrano`);
        const dirección = ref('Alfonso X 17 5ºD');
        const telefono = ref(654765876);
        const estadoCivil = ref('Casado');

        return {
            nombre,
            apellidos,
            dirección,
            telefono,
            estadoCivil
        };
        }

    });