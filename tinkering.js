/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 30;
var shirtLength = 37;
var shirtSleeve = 12;

const sWidth = 18;
const sLength = 28;
const sSleeve = 8.13;

const mWidth = 20;
const mLength = 29;
const mSleeve = 8.38;

const lWidth = 22;
const lLength = 30;
const lSleeve = 8.63;

const xlWidth = 24;
const xlLength = 31;
const xlSleeve = 8.88;

const xl2Width = 26;
const xl2Length = 33;
const xl2Sleeve = 9.63;

const xl3Width = 28;
const xl3Length = 34;
const xl3Sleeve = 10.13;

//console.log(xl3Width);
// Write your if/else code here
if((shirtWidth >= xl3Width) && (shirtLength >= xl3Length) && (shirtSleeve >= xl3Sleeve)) {
    console.log('3XL');
} else if((shirtWidth >= xl2Width) && (shirtLength >= xl2Length) && (shirtSleeve >= xl2Sleeve) &&
    (shirtWidth < xl3Width) && (shirtLength < xl3Length) && (shirtSleeve < xl3Sleeve)) {
        console.log('2XL');
} else if((shirtWidth >= xlWidth) && (shirtLength >= xlLength) && (shirtSleeve >= xlSleeve) &&
    (shirtWidth < xl2Width) && (shirtLength < xl2Length) && (shirtSleeve < xl2Sleeve) ) {
        console.log('XL');
} else if((shirtWidth >= lWidth) && (shirtLength >= lLength) && (shirtSleeve >= lSleeve) &&
    (shirtWidth < xlWidth) && (shirtLength < xlLength) && (shirtSleeve < xlSleeve)) {
        console.log('L');
} else if((shirtWidth >= mWidth) && (shirtLength >= mLength) && (shirtSleeve >= mSleeve) &&
    (shirtWidth < lWidth) && (shirtLength < lLength) && (shirtSleeve < lSleeve)) {
        console.log('M');
} else if((shirtWidth >= sWidth) && (shirtLength >= sLength) && (shirtSleeve >= sSleeve) &&
    (shirtWidth < mWidth) && (shirtLength < mLength) && (shirtSleeve < mSleeve)) {
        console.log('S');
} else {
    console.log('N/A');
}