class Spacecraft {
    constructor(public propulsor: string) { }

    jumpIntoHyperSpace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

interface ContainerShip {
    //opcional ? 
   // cargoContainers?: number
    cargoContainers: number
}

export{Spacecraft,ContainerShip}