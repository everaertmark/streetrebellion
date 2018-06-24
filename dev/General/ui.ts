class UI {
    private scorefield:HTMLElement
    private healthfield:HTMLElement

    constructor() {
        this.scorefield = document.createElement("scorefield")
        this.healthfield = document.createElement("healthfield")
        let foreground = document.getElementsByTagName("foreground")[0]

        foreground.appendChild(this.scorefield)
        foreground.appendChild(this.healthfield)
    }

    public updateVehiclesDestroyed(){
        this.scorefield.innerHTML = "Vehicles destroyed: " + SingletonScore.Instance().getScore()
    }

    public updateHealthField(health:number) {
        this.healthfield.innerHTML = "Health obtained: " + health
    }
}