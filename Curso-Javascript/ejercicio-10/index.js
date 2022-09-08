import * as controller from './modulos/controller.js'
import chalk from 'chalk'

const sum = controller.suma(1,2)
const sum2 = controller.suma(4,5)
console.log(sum)
console.log(sum2)

const producto = controller.multiplica(sum, sum2)

console.log(chalk.green(producto))
