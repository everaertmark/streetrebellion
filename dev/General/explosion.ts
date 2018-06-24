class Explosion {

    private element: HTMLElement
    private x: number
    private y: number

    constructor() {
        this.element = document.createElement("explosion")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element);
        this.x = 0
        this.y = 0
        this.element.style.transform = `translate(-100px, -100px)`
    }

    public update(): void {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public setExplosion(xValue : number, yValue : number) {
        this.element.style.transform = `translate(${xValue}px, ${yValue}px)`
    }

    public getRectangle() {
        return this.element.getBoundingClientRect()
    }
}