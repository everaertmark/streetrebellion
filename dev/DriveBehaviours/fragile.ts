/// <reference path="../Interfaces/IDriveBehaviour" />
/// <reference path="../Vehicles/police" />

class Fragile implements IDriveBehaviour
{
    private police: Police;
    
    constructor (p:Police)
    {
        this.police = p;
        let scope:Fragile = this

        setTimeout(function(){
            scope.police.changeDriveBehaviour(new Normal(scope.police))
        },4000);
    }

    public onSignal(): void
    {
        // Do nothing. The timeout will cause the behaviour to change.
    } 

    public drive() : void
    {   
        this.police.Y += (this.police.Speed * 0.5)
        this.police.Element.style.transform = `translate(${this.police.X}px, ${this.police.Y}px)`
    }
}