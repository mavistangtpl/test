//  A,B
// - => A < B
// 0 =>  A = B
// + => A > B
function compareCard(cardA, cardB) {
    const ranks = [
        "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "J", "Q", "K", "A"
    ];

    const suits = ["Diamond", "Club", "Heart", "Spade"];

    const [suitA, rankA] = cardA;
    const [suitB, rankB] = cardB;

    const ranksDiff = ranks.indexOf(rankA) - ranks.indexOf(rankB);

    if (ranksDiff !== 0) {
        return ranksDiff;
    } else {
        return suits.indexOf(suitA) - suits.indexOf(suitB);
    }
}

const cards = [
    ["Spade", "A"],
    ["Diamond", "J"],
    ["Club", "3"],
    ["Heart", "6"],
    ["Spade", "K"],
    ["Club", "2"],
    ["Heart", "Q"],
    ["Spade", "6"],
    ["Heart", "J"],
    ["Spade", "10"],
    ["Club", "4"],
    ["Diamond", "Q"],
    ["Diamond", "3"],
    ["Heart", "4"],
    ["Club", "7"],
];

if (true) {
    console.log("Count the number of card which is of suit Spade ♠️. (Hints: using reduce)")

    const result = cards.reduce((sum, element) => {
        // console.log(element[0] == 'Spade')
        if (element[0] == 'Spade')
            return sum + 1
        else return sum
    }, 0)

    console.log(result)

}

if (false) {
    console.log(`Remove all the card that is smaller than ["Club", "3"]`)


    const result2 = cards.filter((element) => {
        // console.log(element)
        console.log(compareCard(element, ["Club", "3"]))
        if (compareCard(element, ["Club", "3"]) >= 0)
            return true
        else return false
    })

    console.log(result2)
}


if (false) {
    console.log("Count the number of card which is of suit Diamond ♦️ or Heart ♥️ and with the rank larger than or equal to J.")

    const result3 = cards.reduce((sum, element) => {

        if (element[0] == 'Diamond' || element[0] == 'Heart') {

            if (compareCard(element, [element[0], 'J']) >= 0) {
                return sum + 1
            }
            else return sum
        } else return sum

    }, 0)

    console.log(result3)

}

if (false) {
    console.log("Replace all of the cards with suit Club ♣️ to suit Diamond ♦️, keeping the same rank.")

    const result4 = cards.map((element) => {
        if (element[0] == 'Diamond') {
            element[0] = 'Club'
            return element
        } else return element
    })

    console.log(result4)
}


if (false) {

    console.log("Replace all of the cards with rank A to rank 2. Keeping the same suit.")
    const result5 = cards.map((element) => {
        if (element[1] == '2') {
            element[1] = 'A'
            return element
        } else return element
    })

    console.log(result5)
}