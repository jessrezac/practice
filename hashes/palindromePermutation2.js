function hasPalindromePermutation(theString) {
	// Check if any permutation of the input is a palindrome
	let unpairedLetters = new Set()

	for (let char of theString) {
		if (unpairedLetters.has(char)) {
			unpairedLetters.delete(char)
		} else {
			unpairedLetters.add(char)
		}
	}

	return unpairedLetters.size <= 1
}

// Tests

let desc = "permutation with odd number of chars"
assertEqual(hasPalindromePermutation("aabcbcd"), true, desc)

desc = "permutation with even number of chars"
assertEqual(hasPalindromePermutation("aabccbdd"), true, desc)

desc = "no permutation with odd number of chars"
assertEqual(hasPalindromePermutation("aabcd"), false, desc)

desc = "no permutation with even number of chars"
assertEqual(hasPalindromePermutation("aabbcd"), false, desc)

desc = "empty string"
assertEqual(hasPalindromePermutation(""), true, desc)

desc = "one character string "
assertEqual(hasPalindromePermutation("a"), true, desc)

function assertEqual(a, b, desc) {
	if (a === b) {
		console.log(`${desc} ... PASS`)
	} else {
		console.log(`${desc} ... FAIL: ${a} != ${b}`)
	}
}
