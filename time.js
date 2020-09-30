let robarPlanos = (serie, despegar) => {

    let mensaje;
    if (serie < 11) {
        mensaje = `Se ha robado exitosamente el plano ${serie}`;
        despegar(null, mensaje);
    } else {
        console.log("entre");
        mensaje = "Sigue buscando el plano robado es falso";
        despegar(mensaje, null);
    }
}

robarPlanos(12, (error, mensaje) => {
    if (error) {
        console.log("entre2");
        console.log(error);
    } else {
        console.log(mensaje);
        console.log("Leia vamos en camino, la nave esta arrancando");
    }
});