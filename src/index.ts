import { menuPral } from './view/menu'
import { menuVel } from './view/menu'
import { menuStart } from './view/menu'
import { leerTeclado } from './view/entradaTeclado'
import { Automovil } from './models/automovil'
const main = async () => {
    let n: number
    let nv2: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                console.log("Parametros vehiculo")
                let _velocidad: number, _consumo100: number, _deposito: number
                _velocidad = parseInt( await leerTeclado('Introduce la velocidad: '))
                _consumo100 = parseInt( await leerTeclado('Introduce el consumo a los 100KM/H: '))
                _deposito = parseInt( await leerTeclado('Litros del deposito: '))
                let vehiculo1: Automovil = new Automovil("Apagado", _velocidad, _consumo100, _deposito)
                break
            case 2:
                console.log(`El motor esta: ${vehiculo1.Estado}`)
                do {
                    nv2 = await menuStart()
                    switch(nv2){
                        case 1:
                            console.log("Start")
                            try {
                                vehiculo1.Start
                            }catch(error){
                                console.log(error)
                                break
                            }
                            break
                        case 2:
                            console.log("Stop")
                            try {
                                vehiculo1.Stop
                            }catch(error){
                                console.log(error)
                                break
                            }
                            break
                        case 0:
                            console.log('\n--ADIÓS--')
                            break
                        default:
                            console.log("Opción incorrecta")
                            break
                    }
                }while (nv2 != 0)
                break
            case 3:
                console.log("Repostar")
                try {
                    console.log(`El deposito tiene: ${vehiculo1.Deposito} L`)
                }catch(error){
                    console.log(error)
                    break
                }
                break
            case 4:
                do {
                    nv2 = await menuVel()
                    switch(nv2){
                        case 1:
                            console.log("Acelerar")
                            vehiculo1.Cambio = parseInt( await leerTeclado('Velocidad que acelera: '))
                            try {
                                console.log(`Velocidad actual: ${vehiculo1.acel()}`)
                            }catch(error){
                                console.log(error)
                                break
                            }
                            break
                        case 2:
                            console.log("Frenar")
                            vehiculo1.Cambio = parseInt( await leerTeclado('Velocidad que frena: '))
                            try {
                                console.log(`Velocidad actual: ${vehiculo1.decel()}`)
                            }catch(error){
                                console.log(error)
                                break
                            }
                            break
                        case 0:
                            console.log('\n--ADIÓS--')
                            break
                        default:
                            console.log("Opción incorrecta")
                            break
                    }
                }while (nv2 != 0)
                break
            case 5:
                console.log("Consumo")
                try {
                    console.log(`El consumo en una hora es de: ${vehiculo1.Consumo} L`)
                }catch(error){
                    console.log(error)
                    break
                }
                break
                break
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
main()