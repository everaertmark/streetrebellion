class Health {
    private ui: UI
    private healthNumber : number

    constructor(ui:UI) {
        this.ui = ui
        this.healthNumber = 1
        this.ui.updateHealthField(this.healthNumber) 
    }

    public checkHealth (score: number) {
        if (score > 20 && score < 30) {
            this.healthNumber = 2
        } else if (score  > 30 && score < 40) {
            this.healthNumber = 3
        } else if (score > 40) {
            this.healthNumber = 4
        }
        this.ui.updateHealthField(this.healthNumber)
    }

    public setCurrentHealth(health: number) : void {
        this.healthNumber = health
    }

    public getCurrentHealth() : number {
        return this.healthNumber
    }
}