import{Spacecraft, ContainerShip} from './base-ships'
//herança
export class MilleniumFalcon extends Spacecraft implements ContainerShip{

    cargoContainers: number
    constructor() {
        super('hyperdrive')
        this.cargoContainers =4
    }
    //polimorfismo
    jumpIntoHyperSpace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperSpace()
        } else { console.log('Failed to jump into hyperspace') }
    }
}