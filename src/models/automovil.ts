export class Automovil {
    private "_cambio": number
    constructor (
        private _estadoMotor: string,
        private _velocidad: number,
        private _consumo100: number,
        private _deposito: number
    ) {
        this._estadoMotor = _estadoMotor
        this._velocidad = _velocidad
        this._consumo100 = _consumo100
        this._deposito = _deposito
    }
    acel() {
        if (this._deposito == undefined) {
            throw "El vehiculo no ha sido definido, vaya a la opcion 1."
        }
        if (this._estadoMotor == "Apagado") {
            throw "El vehiculo esta apagado, no puede acelerar."
        }
        return this._velocidad + this._cambio
    }
    decel() {
        if (this._deposito == undefined) {
            throw "El vehiculo no ha sido definido, vaya a la opcion 1."
        }
        if (this._estadoMotor == "Apagado") {
            throw "El vehiculo esta apagado, no puede frenar."
        }
        return this._velocidad - this._cambio
    }
    Consumo() {
        if (this._deposito == undefined) {
            throw "El vehiculo no ha sido definido, vaya a la opcion 1."
        }
        return this._velocidad * this._consumo100 / 100
    }
    set Cambio(_cambio: number) {
        this._cambio = _cambio
    }
    set Deposito(_deposito: number) {
        if (this._estadoMotor == "Encendido") {
            throw "El vehiculo esta arrancado, no puede repostar."
        }
        this._deposito = _deposito
    }
    set Consumo100(_consumo100: number) {
        this._consumo100 = _consumo100
    }
    set Velocidad(_velocidad: number) {
        this._velocidad = _velocidad
    }
    set Estado(_estadoMotor: string) {
        this._estadoMotor = _estadoMotor
    }
    set Start(_estadoMotor: string) {
        this._estadoMotor = "Encendido"
    }
    set Stop(_estadoMotor: string) {
        if (this._velocidad != 0) {
            throw "El vehiculo esta en movimiento, no puede apagar el motor."
        }
        this._estadoMotor = "Apagado"
    }
}