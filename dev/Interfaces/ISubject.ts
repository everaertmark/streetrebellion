interface Subject {
    registerObserver(o: IObserver) : void
    removeObserver(o : IObserver) : void
    notifyObservers() : void
}

