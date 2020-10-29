import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Parametros vehiculo')
    console.log('2.- Start/Stop')
    console.log('3.- Repostar')
    console.log('4.- Acelerar/Frenar')
    console.log('5.- Consumo')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}
export const menuStart = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Start')
    console.log('2.- Stop')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}
export const menuVel = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Acelerar')
    console.log('2.- Frenar')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}