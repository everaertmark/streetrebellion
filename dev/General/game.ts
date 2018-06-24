/// <reference path="./../Vehicles/vehicle" />
/// <reference path="./../Vehicles/civilian" />
/// <reference path="./../Vehicles/police" />

class Game { 
    
    private ui:UI
    private environmentcars:Vehicle[] = []
    private criminal:Criminal
    private health:Health
    private lootbox:Lootbox
    private explosion:Explosion
    private gameOver:GameOver
    
    constructor() {
        this.ui = new UI()
        this.criminal = new Criminal()
        this.environmentcars = [new Civilian(1), new Civilian(2), new Civilian(3), new Civilian(4), new Police(1), new Police(2)]

        this.lootbox = new Lootbox()
        SingletonScore.Instance().setScore(0)
        this.explosion = new Explosion()
        this.health = new Health(this.ui)
        this.gameOver = new GameOver()
        this.gameLoop()
    }
    
    private gameLoop():void{
        this.criminal.update()
        this.lootbox.update()
        this.ui.updateVehiclesDestroyed()

        if (Util.checkCollision(this.criminal.getRectangle(), this.lootbox.getRectangle())) {
            SingletonScore.Instance().notifyObservers()
            this.lootbox.reset()
        }

        if (this.lootbox.getRectangle().bottom - this.lootbox.getRectangle().height > window.innerHeight) {
            this.lootbox.reset()
        }
        
        // police, civillian and criminal get polymorphed as a vehicle.
        for (let p of this.environmentcars) {
            p.update()

            if (p.getRectangle().bottom - p.getRectangle().height > window.innerHeight) {
                p.reset()
            }

            if (p instanceof Civilian) {    
                if (Util.checkCollision(this.criminal.getRectangle(), p.getRectangle())) {
                    SingletonScore.Instance().addPoints(1)
                    this.health.checkHealth(SingletonScore.Instance().getScore())
                    this.explosion.setExplosion(p.getRectangle().left, (p.getRectangle().top + 130))
                    p.reset()
                }
            }

            if (p instanceof Police) {
                if (Util.checkCollision(this.criminal.getRectangle(), p.getRectangle()) && this.health.getCurrentHealth() == 1) {
                    this.gameOverPrompt()
                    cancelAnimationFrame
                } else if (Util.checkCollision(this.criminal.getRectangle(), p.getRectangle())) {
                    this.health.setCurrentHealth(this.health.getCurrentHealth() -1)
                    SingletonScore.Instance().removePoints(15)
                    this.health.checkHealth(this.health.getCurrentHealth())
                    p.reset()
                }
            }
        }

        requestAnimationFrame(() => this.gameLoop())
    }

    private gameOverPrompt() {
        for (let c of this.environmentcars){
            c.stop()
        }
        this.lootbox.stop()
        SingletonScore.Instance().setScore(0)
        this.gameOver.update()
    }
} 

window.addEventListener("load", () => new Game())