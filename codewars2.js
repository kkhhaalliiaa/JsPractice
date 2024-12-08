// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
    return data.map(member => {

    if (member[0] >= 55 && member[1] > 7) {
        return "Senior";
    } else {
        return "Open";
    }
    });
}

let input = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];
console.log(openOrSenior(input));


//This one was a little tricky, but it felt great to figure it out! I had to think through the steps and handle some tricky cases, but once I got it, everything else was easy. It’s so satisfying to make progress!