//STEP 1 ALPHABETIZE STRING
  // function alphabetize(str) {
  //   return str.split("")
  //             .sort()
  //             .join("");
  // }
  // let userStr = window.prompt('Input a string to alphabetize: ');
  // console.log(alphabetize(userStr));

//STEP 2 FIRST LETTER OF EACH WORD TO UPPERCASE
  // function capitalize(str) {
  //   let array = str.split(' ');
  //   let newArray = [];

  //   for (var i = 0; i < array.length; i++) {
  //     newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  //   }
  //   return newArray.join(' ');
  // }
  // console.log(capitalize('the quick brown fox'));

//STEP 3 VOWEL COUNTER
  // function vowelCount(str) {
  //   const vCount = str.match(/[aeiou]/gi).length;
  //   return vCount;
  //   }
  // console.log(vowelCount('The quick brown box'));

//STEP 4 GENERATE STRING ID OF RANDOM CHARACTERS
  // const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // function generateStringId(length) {
  //     let result = ' ';
  //     const charactersLength = characters.length;
  //     for (let i = 0; i < length; i++) {
  //         result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //     }
  //     return result;
  // }

  // console.log(generateStringId(8));

//STEP 5 FINDS LONGEST STRING
  // function longestName(arr){
  //   var count = [];
  //   for(var i = 0; i < arr.length; i++){
  //     count.push(arr[i].length);
  //   }
  //   var max = Math.max(...count);
  //   var index = count.indexOf(max);
  //   return arr[index];
  // }

  // console.log(longestName(["Australia", "Germany", "United States of America"]));
