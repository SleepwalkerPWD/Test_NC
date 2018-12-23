//Простая фабрика

'use strict';

class User {
    constructor(typeOfUser) {
        this._canEditEveryghing = false;
        if (typeOfUser === "administrator"){
            this._canEditEveryghing = true;
        }
    }
    get canEditEveryghing() {
        return this._canEditEveryghing;
    }

}

let user1 = new User('normalGuy');
let user2 = new User('administrator');

console.log(user1);
console.log(user2);

console.log(user2.canEditEveryghing);