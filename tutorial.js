const sum = (num1,num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject{
  constructor(){
    console.log('object created');
  }
}

/* EXPORT THE FUNCTION, VALUE and CLASS */
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObject = SomeMathObject;

/* The above export method violates DRY code principles, you can do this: */
module.exports = {sum : sum, PI : PI, SomeMathObject : SomeMathObject}
