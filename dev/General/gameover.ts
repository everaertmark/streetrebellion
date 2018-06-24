class GameOver {
    private gameoverfield: HTMLElement

    constructor() {
        this.gameoverfield = document.createElement("gameoverfield")
        let foreground = document.getElementsByTagName("foreground")[0]

        foreground.appendChild(this.gameoverfield)
    }
    public update() {
        this.gameoverfield.innerHTML = "Game over:("
    }
}