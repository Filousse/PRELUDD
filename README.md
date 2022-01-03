# Preludd Hiring test

# Armstrong Numbers
An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
For example:
* 9 is an Armstrong number, because 9 = 9^1 = 9
* 10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
* 153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
* 154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
Write some code to determine whether a number is an Armstrong number.

# Difference Of Squares
Find the difference between the square of the sum and the sum of the squares of the first N natural numbers.
The square of the sum of the first ten natural numbers is (1 + 2 + ... + 10)² = 55² = 3025.
The sum of the squares of the first ten natural numbers is 1² + 2² + ... + 10² = 385.
Hence the difference between the square of the sum of the first ten natural numbers and the sum of the squares of the first ten natural numbers is 3025 - 385 = 2640.

# Rotational Cipher
Create an implementation of the rotational cipher, also sometimes called the Caesar cipher.
The Caesar cipher is a simple shift cipher that relies on transposing all the letters in the alphabet using an integer key between 0 and 26. Using a key of 0 or 26 will always yield the same output due to modular arithmetic. The letter is shifted for as many values as the value of the key.
The general notation for rotational ciphers is ROT + <key>. The most commonly used rotational cipher is ROT13.
A ROT13 on the Latin alphabet would be as follows:
Plain:  abcdefghijklmnopqrstuvwxyz
Cipher: nopqrstuvwxyzabcdefghijklm
It is stronger than the Atbash cipher because it has 27 possible keys, and 25 usable keys.
Ciphertext is written out in the same formatting as the input including spaces and punctuation.

Examples
* ROT5 omg gives trl
* ROT0 c gives c
* ROT26 Cool gives Cool
* ROT13 The quick brown fox jumps over the lazy dog. gives Gur dhvpx oebja sbk whzcf bire gur ynml qbt.
* ROT13 Gur dhvpx oebja sbk whzcf bire gur ynml qbt. gives The quick brown fox jumps over the lazy dog.

# Run Length Encoding
Implement run-length encoding and decoding.
Run-length encoding (RLE) is a simple form of data compression, where runs (consecutive data elements) are replaced by just one data value and count.
For example we can represent the original 53 characters with only 13.
"WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB"
RLE allows the original data to be perfectly reconstructed from the compressed data, which makes it a lossless data compression.
"AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE"
For simplicity, you can assume that the unencoded string will only contain the letters A through Z (either lower or upper case) and whitespace. This way data to be encoded will never contain any numbers and numbers inside data to be decoded always represent the count for the following character.

# Say
Given a number from 0 to 999,999,999,999, spell out that number in English.

Step 1
Handle the basic case of 0 through 99.
If the input to the program is 22, then the output should be 'twenty-two'.
Your program should complain loudly if given a number outside the blessed range.
Some good test cases for this program are:
* 0
* 14
* 50
* 98
* -1
* 100

Extension
If you're on a Mac, shell out to Mac OS X's say program to talk out loud. If you're on Linux or Windows, eSpeakNG may be available with the command espeak.

Step 2
Implement breaking a number up into chunks of thousands.
So 1234567890 should yield a list like 1, 234, 567, and 890, while the far simpler 1000 should yield just 1 and 0.
The program must also report any values that are out of range.

Step 3
Now handle inserting the appropriate scale word between those chunks.
So 1234567890 should yield '1 billion 234 million 567 thousand 890'
The program must also report any values that are out of range. It's fine to stop at "trillion".

Step 4
Put it all together to get nothing but plain English.
12345 should give twelve thousand three hundred forty-five.
The program must also report any values that are out of range.

Extensions
Use and (correctly) when spelling out the number in English:
* 14 becomes "fourteen".
* 100 becomes "one hundred".
* 120 becomes "one hundred and twenty".
* 1002 becomes "one thousand and two".
* 1323 becomes "one thousand three hundred and twenty-three".
