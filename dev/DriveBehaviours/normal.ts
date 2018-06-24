/// <reference path="../Interfaces/IDriveBehaviour" />
/// <reference path="../DriveBehaviours/fragile" />
/// <reference path="./../Vehicles/police" />

class Normal implements IDriveBehaviour
{
    private police: Police
    constructor (p:Police)
    {
        this.police = p
    }

    public onSignal(): void
    {
        this.police.changeDriveBehaviour(new Fragile(this.police))
    }

    public drive() : void
    {   
        this.police.Y += this.police.Speed
        this.police.Element.style.transform = `translate(${this.police.X}px, ${this.police.Y}px)`
    }
}