// Project Secret Message
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// console.log(secretMessage.length); //24

secretMessage.pop()
// console.log(secretMessage);

// console.log(secretMessage.length); //23 

secretMessage.push('to','program');

// console.log(secretMessage);

const easilyAccess =  secretMessage.indexOf('easily');
secretMessage[easilyAccess] = 'right';

// console.log(secretMessage);

secretMessage.shift();

// console.log(secretMessage);

 secretMessage.unshift ('Programming');

// console.log(secretMessage);

secretMessage.splice(5,5,'know');

// console.log(secretMessage);

console.log(secretMessage.join(' '));

