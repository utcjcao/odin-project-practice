// objects: basically just dictionary in python
let object = {
  greeting: "hello",
  name: "bob",
};
// when referencing, heres what we got:
object.greeting; // easier, but if ur var name is "loren ipsum", the space makes it impossible
object["greeting"]; // if you have a custom variable, like
let key = "greeting"; //
object[key]; // this works better too
// so basically just pythonn

// if you want to make multiple of one object, heres what you have to do
function Pizza() {
  this.toppings = "pepperoni";
  this.sauce = "tomato";
  this.eat = function () {
    console.log("eat pizza"); // and you can add functions too
  };
}
let pizza = new Pizza();
// ok but personally i would prefer using class bc its already know how it works
class PizzaClass {
  constructor() {
    this.toppings = "pepperoni";
    this.sauce = "tomato";
  }
  eat() {
    console.log("eat pizza");
  }
}
let pc = new PizzaClass();
