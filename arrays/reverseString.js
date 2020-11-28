function reverse(arrayOfChars) {
	let lastCharIndex = arrayOfChars.length - 1

	// determine the midpoint of the array
	let midPoint = Math.ceil(arrayOfChars.length / 2)

	// loop through the array until the midpoint, swapping first and last char
	for (let i = 0; i < midPoint; i++) {
		let earlyChar = arrayOfChars[i]
		let lateChar = arrayOfChars[lastCharIndex - i]

		arrayOfChars[i] = lateChar
		arrayOfChars[lastCharIndex - i] = earlyChar
	}

	return arrayOfChars
}

// Tests

let desc = "empty string"
let input = "".split("")
reverse(input)
let actual = input.join("")
let expected = ""
assertEqual(actual, expected, desc)

desc = "single character string"
input = "A".split("")
reverse(input)
actual = input.join("")
expected = "A"
assertEqual(actual, expected, desc)

desc = "longer string"
input = "ABCDE".split("")
reverse(input)
actual = input.join("")
expected = "EDCBA"
assertEqual(actual, expected, desc)

function assertEqual(a, b, desc) {
	if (a === b) {
		console.log(`${desc} ... PASS`)
	} else {
		console.log(`${desc} ... FAIL: ${a} != ${b}`)
	}
}
