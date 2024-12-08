// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    const vowels = /[aeiouAEIOU]/g;
    
    // replace vowels with an empty string
    return str.replace(vowels, '');
}

console.log(disemvowel("This website is for losers LOL!"));

//This one was a little tricky, but it felt great to figure it out! I had to think through the steps and handle some tricky cases, but once I got it, everything else was easy. It’s so satisfying to make progress!