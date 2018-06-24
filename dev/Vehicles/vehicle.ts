class Vehicle {

    protected element:HTMLElement
    protected speed:number
    protected x:number
    protected y:number

    constructor(background:number) {
        this.speed = 3 + Math.random() * 4
        this.x = Math.floor(Math.random() * 1024 + (window.innerWidth - 1024) / 2.05)
        this.y = -400 - (Math.random() * 450)
        this.element = document.createElement("vehicle")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element);
    } 

    public reset() {
        this.x = Math.floor(Math.random() * 1024 + (window.innerWidth - 1024) / 2.05)
        this.y = -400 - (Math.random() * 450) 
    }

    public update():void {
        this.y += this.speed
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public getRectangle():ClientRect {
        return this.element.getBoundingClientRect()
    }

    get X():number {
        return this.x;
    }
    set X(x:number) {
        this.x = x;
    }
    get Y(): number {
        return this.y;
    }
    set Y(y:number) {
        this.y = y;
    }
    get Speed(): number {
        return this.speed;
    }
    get Element(): HTMLElement {
        return this.element
    }

    public stop() {
        this.speed = 0
    }

    public getType(v: Civilian | Police) : string {
        if (v instanceof Civilian) {
            return "Civilian"
        } else {
            return "Police"
        }
    }
}