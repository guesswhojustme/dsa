// const str = "this.-head.-nextNode"
// const converted = str.split('-');
// converted.push(".nextNode")
// console.log(converted);
// const bringBack = converted.join('');
// console.log(bringBack);

// function at(index){
//     const str = "this.-head"
//     const strArr = str.split('-')
//     for(let i = 0; i < index; i++){
//         strArr.push(".nextNode");
//     }
//     const convertBack = strArr.join('');
//     console.log(convertBack);
//     return convertBack;
// }

// at(3)

// let notFound = true;
//  let count = 0;
// while(notFound){
//     count++;
//     console.log(count);
//     if(count === 4){
//         notFound = false;
//     }
// }

const str = "( value )"
let newStr = ''
function test(string){
    newStr = str + string;
}
test(" -> ( nya )")
test(" -> ( nyas )")
console.log(newStr);