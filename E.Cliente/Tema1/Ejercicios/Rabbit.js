class Rabbit{
constructor(type){
this.type=type;
} 
speak(line){
console.log(`The ${this.type} puede hablar ${line}`);
}
}
let Rabbit1 = new Rabbit("Conejo");
Rabbit1.speak(true);
let Rabbit2 = new Rabbit("Conejo2");
