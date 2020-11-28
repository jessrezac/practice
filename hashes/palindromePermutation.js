let countOfLetters = {}
let stringAsArray = theString.split("")
let numberOfOdds = 0

stringAsArray.forEach((letter) => {
	let existingCount = countOfLetters[letter]
	countOfLetters[letter] = existingCount + 1 || 1
	if (countOfLetters[letter] % 2 === 1) {
		numberOfOdds++
	} else if (
		countOfLetters[letter] % 2 === 0 &&
		countOfLetters[letter] > 1
	) {
		numberOfOdds--
	}
})

if (numberOfOdds <= 1) {
	return true
}

return false
