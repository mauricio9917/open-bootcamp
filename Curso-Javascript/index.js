const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const numero = "3"

try {
    console.log("Está ejecutando de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
} catch(e) {
    console.error(`El valor de e es ${e}`)
    console.error("ERROR.")
} finally {
    console.log("Se está ejecutando")
}