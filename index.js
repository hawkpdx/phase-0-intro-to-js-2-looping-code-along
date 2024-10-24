//this is only a TEST
const array = ["Charlie", "Samip", "Ali"];

function writeCards(array) {
    let messages = [];

for (let i = 0; i < array.length; i++)
{
    const name = array[i];
    messages.push(`Thank you, ${name}, for the wonderful surprise gift!`);

}
    return messages;

}
console.log(writeCards());
function countDown(n) {
    while (n >= 0) {
        console.log(n);
        --n;
    }
}