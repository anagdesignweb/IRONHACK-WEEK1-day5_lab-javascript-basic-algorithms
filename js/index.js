// Iteration 1: Names and Input
//


let hacker1 = "jack";
let hacker2 = "Maggie";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const max = (a, b) => {

let aChar=a.length;
let bChar=b.length;

      if (aChar==bChar){
            console.log(`Wow, you both have equally long names, ${a.length+b.length} characters!.`)
      }else if (aChar > bChar) {
            console.log(`The driver has the longest name, it has ${a.length} characters.`);
      } else {
            console.log(`It seems that the navigator has the longest name, it has ${b.length} characters.`);
      };
};

max(hacker1, hacker2);


// Iteration 3: Loops
// 3.1
const mayus = (vari) => {
    
      let separarString = vari.toLocaleLowerCase().split("");
      let imprArray=[];

      for(let i=0; i<separarString.length; i++){
            imprArray.push(separarString[i])
            imprArray.push(` `);
      }
      return imprArray;
}
console.log(mayus(hacker1));

// 3.2


const inverso = (str) => {
  
      let separarString =  str.split("");
      let invertirString = separarString.reverse();
      let unirArray = invertirString.join("");
     
      return unirArray;
       
     }
     
console.log(inverso(hacker1));


// 3.3


// forma larga 

//const ordenAlf = (a, b) => {

// let wordsArray = [a,b];

//       wordsArray.sort((a, b) => {
//             if (a == b) {
//             return 0;
//             }
//             if (a < b) {
//             return -1;
//             }
//             return 1;
//       });
//       console.log(wordsArray);

// }

// ordenAlf(hacker1,hacker2);
const ordenAlf =() => {

      let arr =[hacker1,hacker2];
      arr.sort();
      console.log(arr);

      if (arr[0] === arr[1]) {
            return `What?! You both have the same name?`;
      }else if (arr[0] === hacker1){
            return `The driver's name goes first.`;
      } else if (arr[0] === hacker2) {
            return `Yo, the navigator goes first definitely.`;
      };

}

console.log(ordenAlf())