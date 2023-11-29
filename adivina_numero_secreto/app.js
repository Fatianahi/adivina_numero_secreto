const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    return parseInt(readlineSync.question('Ingresa un número: '), 10);
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el número del 1 al 100.\n');

    do {
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    } while (numeroAdivinado !== numeroSecreto);

    console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
};

juegoAdivinanza();


