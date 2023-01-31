let me = ['Ivan Poch', 31, true];  // declaring an array

console.log(`My name is: ${me[0]}`);
console.log(`My age is: ${me[1]}`);
console.log(`Do I like pizza ? ${me[2]}`);


let cards = [5, 8];

cards.push(2); // .push() will add a new item at the end of array
console.log(cards);

let messages = [
    "Hey, you alright ?",
    "I'm fine, cheers. How about you ?",
    "It's fine, could have been worse :D ",
    "Couple more messages",
    "and another one"
];

let newMessage = "Same here!";

messages.push(newMessage); // push newMessage variable into an array
console.log(messages); // print all items inside array into console
messages.pop(); // remove the last item from array
console.log(messages);

for (let count = 10; count <= 100; count += 10) {  //for loop
    console.log(count);
}

for (let i = 0; i < messages.length; i++) {  // for loop for each array item in messages
    console.log(messages[i]);   // messages.lenght checks how many items are in messages array, it returns number of items
}