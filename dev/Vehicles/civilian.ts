/// <reference path="./vehicle" />

class Civilian extends Vehicle implements EnvironmentCars {

    constructor(background:number) {
        super(background)
        this.element.className = 'civilian'
        let random = Math.floor(Math.random() * 4) + 1
        this.element.style.backgroundImage = "url('images/civ_car_" + random + ".png')"
    }

    public reset(){
        this.x = Math.floor(Math.random() * 1024 + (window.innerWidth - 1024) / 2.05)
        this.y = -400 - (Math.random() * 450) 
    }

    public stop() {
        this.speed = 0
    }
}