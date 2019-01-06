/* TUTORIAL 1 */
/* HOW TO: REQUIRE and EXPORT */
// const tutorial = require('./tutorial'); // ./ means it's in the same folder
// console.log(tutorial.sum(2,5)); //prints out 'what' tutorial is holding
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());

/* TUTORIAL 2 */
/* HOW TO: EVENT EMITTER */
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();//Create new instance of eventEmitter
//
// eventEmitter.on('tutorial', (num1,num2)=>  {
//   console.log('tutorial event has occured:' + (num1 + num2));
// });//2 Arguments: First, listener you want to attach.
//                               //Second arg: Function you want to execute when event occurs.
//
// eventEmitter.emit('tutorial', 5,6);//Emits a tutorial event
//
// class Person extends EventEmitter{
//   constructor(name){
//     super();
//     this._name = name;
//
//   }
//
//   get name(){
//     return this._name;
//   }
// }
//
// var pedro = new Person('Pedro');
// var diana = new Person('Diana');
// //EVENT LISTENER
// pedro.on('name', ()=>{
//   console.log('My name is: ' + pedro.name);
// });
//
// diana.on('name', ()=>{
//   console.log('My name is: ' + diana.name);
// });
//
// //EMITS ABOVE EVENT
// pedro.emit('name');
// diana.emit('name');


//TUTORIAL 3
//HOW TO: readline module
// const readline = require('readline');
// const rl = readline.createInterface({input : process.stdin,
//                           output: process.stdout}); //create readline interface
//                                             //{] takes 2 properties
// var num1 = Math.floor((Math.random() * 10) + 1);
// var num2 = Math.floor((Math.random() * 10) + 1);
// var answer = num1 + num2;
//
// rl.question('What is ${num1} + ${num2} \n?', (userInput)=>{
//   if(userInput.trim() == answer){
//     console.log('condition met');
//     rl.close();
//   }else{
//     rl.setPrompt('Incorrect response, try again.\n');
//     rl.prompt();
//     rl.on('line',(userInput)=>{
//       if(userInput.trim() == answer)
//       rl.close();
//       else{
//         rl.setPrompt('Your answer of ${userInput} is wrong, try again');
//         rl.prompt();
//       }
//     });
//   }
// });//(userInput) gets user input
//
// rl.on('close'),()=>{ //THIS will only trigger when close() (line 62) is called
//   console.log('CORRECT!');
// };

//TUTORIAL 4
//HOW TO: FILE SYSTEM module
// const fs = require('fs');

//CREATING A FILE
// fs.writeFile('example.txt', "this is an example", (err)=>{ //(err) is callback in case somethin
//                                                             //goes wrong. I think kind of
//                                                             //like an error handler.
//   if(err)
//     console.log(err);
//   else
//     console.log('File successfully created');
//     fs.readFile('example.txt','utf8',(err, file)=>{
//       if(err)
//         console.log(err);
//       else
//         console.log(file);
//     }); //arg1: name of file, arg2: encoding type, arg3: callback
// });

//RENAME A FILE
// fs.rename('example.txt', 'example2.txt', (err)=>{
//   if(err)
//     console.log(err);
//   else {
//     console.log('Successfully renamed the file!')
//   }
// });

//APPEND DATA TO FILE
// fs.appendFile('example2.txt', 'some data being appended', (err)=>{
//   if(err)
//     console.log(err);
//   else {
//     console.log('successfully appended data to file!');
//   }
// } ); //arg1: name of file, arg2: data, arg3: callback

//DELETE A FILE
// fs.unlink('example2.txt', (err)=>{
//   if(err)
//     console.log(err);
//   else
//     console.log('successfully deleted the file');
// });

//TUTORIAL 5
//PART 2 of FILE SYSTEM MODULE (FOLDERS)

const fs = require('fs');
fs.mkdir('tutorial', (err)=>{
  if(err)
    console.log(err);
  else
    //console.log('successfully created the folder!');
    fs.rmdir('tutorial', (err)=>{
      if(err)
        console.log(err);
      else
        console.log('Folder successfully deleted!');
    })
})
