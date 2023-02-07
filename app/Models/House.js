export class House {
    constructor(data) {
        this.id = data.id
       this.bedrooms = data.bedrooms
       this.bathrooms = data.bathrooms
       this.levels = data.levels
       this.imgUrl = data.imgUrl
       this.year = data.year
       this.price = data.price
       this.description = data.description 
    }


    get HouseCard(){
        return `
         <div class="col-5">
          <div class="card card-body border">
                  <div class="card card-body border">
            <img src="${this.imgUrl}" alt="">
            <div class="card">
              <div>
                <h3>${this.year}${this.price}${this.bedrooms}</h3>
              </div>
              <div>
                <h3>${this.bedrooms}${this.bathrooms}${this.levels}${this.year}</h3>
              </div>
              <div><h4>${this.description}</h4></div>
              <div>
                <button class="btn ms-1 btn-outline-danger" type="button" onclick="app.carsController.removeHouse('${this.id}')">Delete
                  House!</button>
              </div>
            </div>
          </div>
        `
    }


}