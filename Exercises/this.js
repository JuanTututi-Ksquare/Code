const person1 = {
    name: "Juan Pablo",
    lastName: "Tututi",
    sayName(){
        console.log(`Hello, my name is ${this.name} ${this.lastName}`)
    }
}

const person2 = {
    name: "Luis Enrique",
    lastName: "Jimenez"
}

const person3 = {
    name: "Jose Francisco",
    lastName: "Gonzales"
}

// Bind creates a new function with given context
// functionToBeBinded.bind(object)
const bindedSayName = person1.sayName.bind(person2);
bindedSayName()

// sayName.call(person1)