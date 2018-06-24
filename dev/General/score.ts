class SingletonScore implements Subject {

    private static _instance:SingletonScore
    private observers: IObserver[] = []

    private _score:number = 0;

    private constructor() {
        
    }

    public static Instance() : SingletonScore
    {
        if (this._instance === undefined) 
            SingletonScore._instance = new SingletonScore();
  
        return SingletonScore._instance;
    }

    public setScore(value:number):void
    { 
        SingletonScore.Instance()._score = value;
    }

    public getScore() : number
    {
        return SingletonScore.Instance()._score;
    }

    public addPoints(value:number) : void
    {
        SingletonScore.Instance()._score += value;
    }

    public removePoints(value:number) : void
    {
        SingletonScore.Instance()._score -= value;
    }

    public registerObserver(o: IObserver) {
        this.observers.push(o)
    }
    public removeObserver(o : IObserver)  {
        let index = this.observers.indexOf(o)
        this.observers.slice(index, 1);
    }
    public notifyObservers() {
        this.observers.forEach((observer) => {
            observer.notify();
        });
    }
}