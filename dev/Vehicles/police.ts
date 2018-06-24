/// <reference path="./vehicle" />
/// <reference path="./../Interfaces/IDriveBehaviour" />
/// <reference path="./../DriveBehaviours/normal" />

class Police extends Vehicle implements EnvironmentCars, IObserver {
    private driveBehaviour: IDriveBehaviour   

    constructor(background:number) { 
        super(background)
        this.element.className = 'police'
        this.element.style.backgroundImage = "url('images/police.png')"
        this.driveBehaviour = new Normal(this)
        SingletonScore.Instance().registerObserver(this)
    }

    public reset(){
        this.x = Math.floor(Math.random() * 1024 + (window.innerWidth - 1024) / 2.05)
        this.y = -400 - (Math.random() * 450) 
    }

    public update() {
        this.driveBehaviour.drive()
    }

    public changeDriveBehaviour(b:IDriveBehaviour) {
        this.driveBehaviour = b
    }

    public stop() {
        this.speed = 0
    }

    public notify() {
        this.driveBehaviour.onSignal()
    }
}