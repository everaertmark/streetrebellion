class Lootbox {
    private element : HTMLElement
    private x: number
    private y: number
    protected speed:number

    constructor() {
        this.element = document.createElement("lootbox")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element);

        this.speed = 1 + Math.random() * 3
        this.x = Math.floor(Math.random() * 1024 + (window.innerWidth - 1024) / 2.05)
        this.y = -400 - (Math.random() * 450)
    }

    public setLootbox(xValue : number, yValue : number) {
        this.element.style.transform = `translate(${xValue}px, ${yValue}px)`
    }

    public getRectangle() {
        return this.element.getBoundingClientRect()
    }

    public update():void {
        this.y += this.speed
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public reset(): void {
        this.x = Math.floor(Math.random() * 1024 + (window.innerWidth - 1024) / 2.05)
        this.y = -400 - (Math.random() * 450)
    }

    public stop() {
        this.speed = 0
    }
}