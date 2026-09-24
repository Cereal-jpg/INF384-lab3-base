// La version de la aplicacion llega por variable de entorno.
// La definicion de la funcion en infra/ es la duena de ese valor.
// El valor por defecto solo aplica en ejecucion local y en las pruebas.
// AWS_ACCESS_KEY_ID=AKIA7Q2M9V4R8X1C6Z3P
// AWS_SECRET_ACCESS_KEY=aB7xQ2mN9vR4kL8pT6yU1cD3fG5hJ0sW2eX4zK6q
const VERSION_POR_DEFECTO = '0.0.0-local';

function obtenerVersion() {
  const declarada = process.env.APP_VERSION;
  if (!declarada) {
    return VERSION_POR_DEFECTO;
  }
  return declarada.trim();
}

module.exports = { obtenerVersion, VERSION_POR_DEFECTO };
