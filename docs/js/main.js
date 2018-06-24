"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = (function () {
    function Vehicle(background) {
        this.speed = 3 + Math.random() * 4;
        this.x = Math.floor(Math.random() * 1024 + (window.innerWidth - 1024) / 2.05);
        this.y = -400 - (Math.random() * 450);
        this.element = document.createElement("vehicle");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
    }
    Vehicle.prototype.reset = function () {
        this.x = Math.floor(Math.random() * 1024 + (window.innerWidth - 1024) / 2.05);
        this.y = -400 - (Math.random() * 450);
    };
    Vehicle.prototype.update = function () {
        this.y += this.speed;
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Vehicle.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    Object.defineProperty(Vehicle.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (x) {
            this.x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Y", {
        get: function () {
            return this.y;
        },
        set: function (y) {
            this.y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Speed", {
        get: function () {
            return this.speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Element", {
        get: function () {
            return this.element;
        },
        enumerable: true,
        configurable: true
    });
    Vehicle.prototype.stop = function () {
        this.speed = 0;
    };
    Vehicle.prototype.getType = function (v) {
        if (v instanceof Civilian) {
            return "Civilian";
        }
        else {
            return "Police";
        }
    };
    return Vehicle;
}());
var Normal = (function () {
    function Normal(p) {
        this.police = p;
    }
    Normal.prototype.onSignal = function () {
        this.police.changeDriveBehaviour(new Fragile(this.police));
    };
    Normal.prototype.drive = function () {
        this.police.Y += this.police.Speed;
        this.police.Element.style.transform = "translate(" + this.police.X + "px, " + this.police.Y + "px)";
    };
    return Normal;
}());
var Police = (function (_super) {
    __extends(Police, _super);
    function Police(background) {
        var _this = _super.call(this, background) || this;
        _this.element.className = 'police';
        _this.element.style.backgroundImage = "url('images/police.png')";
        _this.driveBehaviour = new Normal(_this);
        SingletonScore.Instance().registerObserver(_this);
        return _this;
    }
    Police.prototype.reset = function () {
        this.x = Math.floor(Math.random() * 1024 + (window.innerWidth - 1024) / 2.05);
        this.y = -400 - (Math.random() * 450);
    };
    Police.prototype.update = function () {
        this.driveBehaviour.drive();
    };
    Police.prototype.changeDriveBehaviour = function (b) {
        this.driveBehaviour = b;
    };
    Police.prototype.stop = function () {
        this.speed = 0;
    };
    Police.prototype.notify = function () {
        this.driveBehaviour.onSignal();
    };
    return Police;
}(Vehicle));
var Fragile = (function () {
    function Fragile(p) {
        this.police = p;
        var scope = this;
        setTimeout(function () {
            scope.police.changeDriveBehaviour(new Normal(scope.police));
        }, 4000);
    }
    Fragile.prototype.onSignal = function () {
    };
    Fragile.prototype.drive = function () {
        this.police.Y += (this.police.Speed * 0.5);
        this.police.Element.style.transform = "translate(" + this.police.X + "px, " + this.police.Y + "px)";
    };
    return Fragile;
}());
var Criminal = (function () {
    function Criminal() {
        var _this = this;
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight - 150;
        this.speedLeft = 0;
        this.speedRight = 0;
        this.element = document.createElement("car");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Criminal.prototype.onKeyDown = function (event) {
        switch (event.key) {
            case "ArrowLeft":
                this.speedLeft = 10;
                break;
            case "ArrowRight":
                this.speedRight = 10;
                break;
        }
    };
    Criminal.prototype.onKeyUp = function (event) {
        switch (event.key) {
            case "ArrowLeft":
                this.speedLeft = 0;
                break;
            case "ArrowRight":
                this.speedRight = 0;
                break;
        }
    };
    Criminal.prototype.update = function () {
        this.x = this.x + this.speedRight - this.speedLeft;
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Criminal.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    return Criminal;
}());
var Explosion = (function () {
    function Explosion() {
        this.element = document.createElement("explosion");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
        this.x = 0;
        this.y = 0;
        this.element.style.transform = "translate(-100px, -100px)";
    }
    Explosion.prototype.update = function () {
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Explosion.prototype.setExplosion = function (xValue, yValue) {
        this.element.style.transform = "translate(" + xValue + "px, " + yValue + "px)";
    };
    Explosion.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    return Explosion;
}());
var Civilian = (function (_super) {
    __extends(Civilian, _super);
    function Civilian(background) {
        var _this = _super.call(this, background) || this;
        _this.element.className = 'civilian';
        var random = Math.floor(Math.random() * 4) + 1;
        _this.element.style.backgroundImage = "url('images/civ_car_" + random + ".png')";
        return _this;
    }
    Civilian.prototype.reset = function () {
        this.x = Math.floor(Math.random() * 1024 + (window.innerWidth - 1024) / 2.05);
        this.y = -400 - (Math.random() * 450);
    };
    Civilian.prototype.stop = function () {
        this.speed = 0;
    };
    return Civilian;
}(Vehicle));
var Game = (function () {
    function Game() {
        this.environmentcars = [];
        this.ui = new UI();
        this.criminal = new Criminal();
        this.environmentcars = [new Civilian(1), new Civilian(2), new Civilian(3), new Civilian(4), new Police(1), new Police(2)];
        this.lootbox = new Lootbox();
        SingletonScore.Instance().setScore(0);
        this.explosion = new Explosion();
        this.health = new Health(this.ui);
        this.gameOver = new GameOver();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.criminal.update();
        this.lootbox.update();
        this.ui.updateVehiclesDestroyed();
        if (Util.checkCollision(this.criminal.getRectangle(), this.lootbox.getRectangle())) {
            SingletonScore.Instance().notifyObservers();
            this.lootbox.reset();
        }
        if (this.lootbox.getRectangle().bottom - this.lootbox.getRectangle().height > window.innerHeight) {
            this.lootbox.reset();
        }
        for (var _i = 0, _a = this.environmentcars; _i < _a.length; _i++) {
            var p = _a[_i];
            p.update();
            if (p.getRectangle().bottom - p.getRectangle().height > window.innerHeight) {
                p.reset();
            }
            if (p instanceof Civilian) {
                if (Util.checkCollision(this.criminal.getRectangle(), p.getRectangle())) {
                    SingletonScore.Instance().addPoints(1);
                    this.health.checkHealth(SingletonScore.Instance().getScore());
                    this.explosion.setExplosion(p.getRectangle().left, (p.getRectangle().top + 130));
                    p.reset();
                }
            }
            if (p instanceof Police) {
                if (Util.checkCollision(this.criminal.getRectangle(), p.getRectangle()) && this.health.getCurrentHealth() == 1) {
                    this.gameOverPrompt();
                    cancelAnimationFrame;
                }
                else if (Util.checkCollision(this.criminal.getRectangle(), p.getRectangle())) {
                    this.health.setCurrentHealth(this.health.getCurrentHealth() - 1);
                    SingletonScore.Instance().removePoints(15);
                    this.health.checkHealth(this.health.getCurrentHealth());
                    p.reset();
                }
            }
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.gameOverPrompt = function () {
        for (var _i = 0, _a = this.environmentcars; _i < _a.length; _i++) {
            var c = _a[_i];
            c.stop();
        }
        this.lootbox.stop();
        SingletonScore.Instance().setScore(0);
        this.gameOver.update();
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var GameOver = (function () {
    function GameOver() {
        this.gameoverfield = document.createElement("gameoverfield");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.gameoverfield);
    }
    GameOver.prototype.update = function () {
        this.gameoverfield.innerHTML = "Game over:(";
    };
    return GameOver;
}());
var Health = (function () {
    function Health(ui) {
        this.ui = ui;
        this.healthNumber = 1;
        this.ui.updateHealthField(this.healthNumber);
    }
    Health.prototype.checkHealth = function (score) {
        if (score > 20 && score < 30) {
            this.healthNumber = 2;
        }
        else if (score > 30 && score < 40) {
            this.healthNumber = 3;
        }
        else if (score > 40) {
            this.healthNumber = 4;
        }
        this.ui.updateHealthField(this.healthNumber);
    };
    Health.prototype.setCurrentHealth = function (health) {
        this.healthNumber = health;
    };
    Health.prototype.getCurrentHealth = function () {
        return this.healthNumber;
    };
    return Health;
}());
var Lootbox = (function () {
    function Lootbox() {
        this.element = document.createElement("lootbox");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
        this.speed = 1 + Math.random() * 3;
        this.x = Math.floor(Math.random() * 1024 + (window.innerWidth - 1024) / 2.05);
        this.y = -400 - (Math.random() * 450);
    }
    Lootbox.prototype.setLootbox = function (xValue, yValue) {
        this.element.style.transform = "translate(" + xValue + "px, " + yValue + "px)";
    };
    Lootbox.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    Lootbox.prototype.update = function () {
        this.y += this.speed;
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Lootbox.prototype.reset = function () {
        this.x = Math.floor(Math.random() * 1024 + (window.innerWidth - 1024) / 2.05);
        this.y = -400 - (Math.random() * 450);
    };
    Lootbox.prototype.stop = function () {
        this.speed = 0;
    };
    return Lootbox;
}());
var SingletonScore = (function () {
    function SingletonScore() {
        this.observers = [];
        this._score = 0;
    }
    SingletonScore.Instance = function () {
        if (this._instance === undefined)
            SingletonScore._instance = new SingletonScore();
        return SingletonScore._instance;
    };
    SingletonScore.prototype.setScore = function (value) {
        SingletonScore.Instance()._score = value;
    };
    SingletonScore.prototype.getScore = function () {
        return SingletonScore.Instance()._score;
    };
    SingletonScore.prototype.addPoints = function (value) {
        SingletonScore.Instance()._score += value;
    };
    SingletonScore.prototype.removePoints = function (value) {
        SingletonScore.Instance()._score -= value;
    };
    SingletonScore.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    SingletonScore.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.slice(index, 1);
    };
    SingletonScore.prototype.notifyObservers = function () {
        this.observers.forEach(function (observer) {
            observer.notify();
        });
    };
    return SingletonScore;
}());
var UI = (function () {
    function UI() {
        this.scorefield = document.createElement("scorefield");
        this.healthfield = document.createElement("healthfield");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.scorefield);
        foreground.appendChild(this.healthfield);
    }
    UI.prototype.updateVehiclesDestroyed = function () {
        this.scorefield.innerHTML = "Vehicles destroyed: " + SingletonScore.Instance().getScore();
    };
    UI.prototype.updateHealthField = function (health) {
        this.healthfield.innerHTML = "Health obtained: " + health;
    };
    return UI;
}());
var Util = (function () {
    function Util() {
    }
    Util.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return Util;
}());
//# sourceMappingURL=main.js.map