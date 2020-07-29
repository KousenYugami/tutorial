var name = "光線ゆがみ";
var age = 20;
var linesCoded = 15;
var message = "こんいちは！　"　+ name + "　と申します。" + age + "際です";

this.hair = 'white';
var human = {
    hair: 'black',
    toDo: function(){
        return this.hair;
    }
}

console.log(human.toDo());

var twoHair = human.toDo.bind(human);
console.log(twoHair());

if (age >= 18){
    console.log('You are now of legal age!');
}
for (lineWritten = 1; lineWritten <= linesCoded; lineWritten++){
    console.log('You have written ' + lineWritten + ' lines of code!');
}
alert(message);
//console.log(message);