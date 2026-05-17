class Car{
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false
  
  constructor(carDetails){
    this.#brand = carDetails.brand
    this.#model = carDetails.model
  }

  displayInfo(){
    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, trunk Info : ${this.isTrunkOpen}`)
  }

  go(){
    if(this.speed<200&&this.isTrunkOpen===false){
      this.speed+=5
    }

  }

  brake(){
    if(this.speed>0){
      this.speed-=5
    }
  }

  openTrunk(){
    if(this.speed===0){
      this.isTrunkOpen = true
    }
  }

  closeTrunk(){
    this.isTrunkOpen = false
  }
}

class RaceCar extends Car{
  acceleration=0 ;
  isTrunkOpen = "Race Cars Do Not Have Trunks"
  
  constructor(carDetails){
    super(carDetails)
    this.acceleration = carDetails.acceleration
  }
  
  go(){
    this.speed+=this.acceleration
    if(this.speed>300){
      this.speed = 300
    }
  }
  openTrunk(){
    this.isTrunkOpen = "No trunk"
  }
  closeTrunk(){
    this.isTrunkOpen = "No Trunk"
  }
}

const car1 = new Car({
  brand:"toyota",
  model:"corolla"
})
const car2 = new Car({
  brand:"tesla",
  model:"model 3"
})

car1.openTrunk();
car1.displayInfo();

car2.displayInfo();
car2.go();
car2.displayInfo()
car2.brake();
car2.brake();
car2.displayInfo();

// Trunk should open since the car is not moving.
car2.openTrunk();
// Car should not go since the trunk is open.
car2.go();
car2.displayInfo();

const raceCar1 = new RaceCar({
  brand:"McLaren",
  model:"F1",
  acceleration:200
})

raceCar1.go()
raceCar1.displayInfo()


