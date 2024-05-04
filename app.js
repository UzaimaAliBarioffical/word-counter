


  function countWords(text) {
    let words = text.trim().split(/\s+/);
    return words.length;
}

const text = prompt("word counter");
const wordCount = countWords(text);
console.log("Word count:", wordCount);

countWords(text) 