import { appState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"





function _drawHouses() {
    let template = ''
    appState.houses.forEach(house => template += house.HouseCard)
    setHTML('listings', template)
}




export class HousesController{
    constructor(){
        console.log('hello from the housesController dawg, yous ah real great guy.')
        appState.on('houses', _drawHouses)
    }

async getHouses(){
    try {
        await housesService.getHouses()
    } catch (error) {
        Pop.error(error.message)
        console.error(error)
    }
    // removeHouse(this.id)
}



}