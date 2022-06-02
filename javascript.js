const wDefinition = document.querySelector(".result");
const words = document.querySelector(".word");
const phonetics = document.querySelector(".phonetics");
const meaningsDef = document.querySelector(".wordDef");

const handle = async (e) => {
  if (e.keyCode === 13) {
    const word = e.target.value;
    const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await result.json();

    wDefinition.style.display = "block";
      words.innerText = data[0].word;
      phonetics.innerText = data[0].phonetics[0].text;
      meaningsDef.innerText = data[0].meanings[0].definitions[0].definition;
  }
};

let gpaString = document.getElementById("rightj");

const altitudes = [72.6];