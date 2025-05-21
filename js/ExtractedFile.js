// Variables
const origWord = document.getElementById('origWord');
const transWord = document.getElementById('transWord');
const defnWord = document.getElementById('wordDefinition');

// Constants
const MIN_FONT_SIZE = 16;
const MAX_FONT_SIZE = 32;

// Buttons
const increaseFont = document.getElementById('increaseFont');
const decreaseFont = document.getElementById('decreaseFont');
const pageColorWhite = document.getElementById('pageColorWhite');
const pageColorBeige = document.getElementById('pageColorBeige');
const pageColorBlack = document.getElementById('pageColorBlack');
const tableContentIcon = document.getElementById('tableContentIcon');
const fontSetting = document.getElementById('fontSetting');
const closeBtn = document.getElementById('closeBtn');

// Divs/Containers
const textSettingContainer = document.getElementById('textSettingContainer');
const tableContentContainer = document.getElementById('tableContentContainer');
const doc = document.getElementById('document');
const def_word_popUp = document.getElementById('definitionContainer');


const docContent = document.getElementById('docContent');
const progress = document.getElementById('progress');


// Array with elements to close when clicked outside of them
const elemsToClose = [textSettingContainer, tableContentContainer, doc];

// Helper functions
function updateFontButtons(currFontSize) {
    if (currFontSize <= MIN_FONT_SIZE) {
        decreaseFont.style.backgroundColor = 'hsl(214, 50%, 70%)'; 
        decreaseFont.disabled = true;
    } else {
        decreaseFont.style.backgroundColor = ''; 
        decreaseFont.disabled = false;
    }

    if (currFontSize >= MAX_FONT_SIZE) {
        increaseFont.style.backgroundColor = 'hsl(214, 50%, 70%)'; 
        increaseFont.disabled = true;
    } else {
        increaseFont.style.backgroundColor = ''; 
        increaseFont.disabled = false;
    }
}

// 1) Calculate the total number of pages needed based the content size and width and height of the document 
// 2) If the total number of pages is >= 5 put 5 buttons in the progress bar
// 3) Keep track of the current page and provide content for it
// rough AVG size of a single character
// width: 50px;
// height 70px;

// Momchi suggestion -> to search a specific word with the help of a trie (like ctrl + F)


// for first page 
function renderText(){
    let numberOfWordsPerLine = (doc.offsetWidth - 100) / 7.27; // 100px is from margins, 7.27px wide character 
    let numberOfLines = (doc.offsetHeight) / 20; // 20px between lines
    let totalNumberOfCharacters = numberOfWordsPerLine * numberOfLines;
    
    let flip = false;
    
    for(let i = 0; i <= totalNumberOfCharacters; i++){
        if(flip == false){
            docContent.textContent += 'T';
            flip = true;
        }
        else{
            docContent.textContent += ' ';
            flip = false;
        }
    }
}




async function getWordTranslation(word, from = 'en', to = 'de') {
    const url = `https://lingva.ml/api/v1/${from}/${to}/${encodeURIComponent(word)}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.translation || '[No translation]';
}

async function getWordDefinition(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`;
    const res = await fetch(url);
    if (!res.ok) return '[No definition]';
    const data = await res.json();
    try {
        return data[0].meanings[0].definitions[0].definition || '[No definition found]';
    } catch {
        return '[No definition found]';
    }
}

// Combined usage
async function showWordInfo(word) {
    const [translation, definition] = await Promise.all([
        getWordTranslation(word),
        getWordDefinition(word)
    ]);

    transWord.textContent = translation;
    defnWord.textContent = definition;
}


// Event listeners
document.querySelectorAll('.def-word').forEach(word => {
    word.addEventListener('click', async (e) => {
        const rect = word.getBoundingClientRect();
        const wordToBeTranslated = word.dataset.word; 
        
        def_word_popUp.style.display = 'flex';

        origWord.textContent = wordToBeTranslated;
        transWord.textContent = "Loading ...";
        defnWord.textContent = "Loading ...";

        // Adjust position of the box
        if(rect.y + def_word_popUp.offsetHeight > doc.offsetHeight){
            def_word_popUp.style.left = `${(rect.left - rect.width / 2)}px`;
            def_word_popUp.style.top = `${rect.top - def_word_popUp.offsetHeight}px`;
        }
        else{
            def_word_popUp.style.left = `${(rect.left - rect.width / 2)}px`;
            def_word_popUp.style.top = `${rect.bottom}px`;
        }
        
        // Get word translation and definition 
        await showWordInfo(wordToBeTranslated);

        // Adjust the popup additionally based on how long the description is
        if(rect.y + def_word_popUp.offsetHeight > doc.offsetHeight){
            def_word_popUp.style.left = `${(rect.left - rect.width / 2)}px`;
            def_word_popUp.style.top = `${rect.top - def_word_popUp.offsetHeight}px`;
        }
        else{
            def_word_popUp.style.left = `${(rect.left - rect.width / 2)}px`;
            def_word_popUp.style.top = `${rect.bottom}px`;
        }
    })
})

document.addEventListener('click', (e) => {
    if(!textSettingContainer.contains(e.target)){
        textSettingContainer.style.display = 'none';
    }
    if(!tableContentContainer.contains(e.target)){
        tableContentContainer.style.display = 'none';
    }
});

closeBtn.addEventListener('click', () => {
    def_word_popUp.style.display = 'none';
});

increaseFont.addEventListener('click', (e) => {
    e.stopPropagation(); 
    const docStyle = window.getComputedStyle(doc);
    let currFontSize = parseFloat(docStyle.fontSize);
    if (currFontSize < MAX_FONT_SIZE) {
        currFontSize += 2;
        doc.style.fontSize = currFontSize + 'px';
    }
    updateFontButtons(currFontSize);
});

decreaseFont.addEventListener('click', (e) => {
    e.stopPropagation(); 
    const docStyle = window.getComputedStyle(doc);  
    let currFontSize = parseFloat(docStyle.fontSize);
    if (currFontSize > MIN_FONT_SIZE) {
        currFontSize -= 2;
        doc.style.fontSize = currFontSize + 'px';
    }
    updateFontButtons(currFontSize);
});

window.addEventListener('DOMContentLoaded', (e) => {
    e.stopPropagation(); 
    const docStyle = window.getComputedStyle(doc);
    const currFontSize = parseFloat(docStyle.fontSize);
    updateFontButtons(currFontSize);
    renderText();
});


pageColorWhite.addEventListener('click', (e) => {
    e.stopPropagation(); 
    doc.style.backgroundColor = '#fff';
    doc.style.color = '#122C4A';
});

pageColorBeige.addEventListener('click', (e) => {
    e.stopPropagation(); 
    doc.style.backgroundColor = 'hsl(40, 38%, 83%)';
    doc.style.color = '#122C4A';
});

pageColorBlack.addEventListener('click', (e) => {
    e.stopPropagation(); 
    doc.style.backgroundColor = '#222222';
    doc.style.color = '#B5CFED';
});

fontSetting.addEventListener('click', (e) => {
    e.stopPropagation(); 
    const isVisible = textSettingContainer.style.display === 'flex';
    textSettingContainer.style.display = isVisible ? 'none' : 'flex';
});


tableContentIcon.addEventListener('click', (e) => {
    e.stopPropagation(); 
    const isVisible = tableContentContainer.style.display === 'flex';
    tableContentContainer.style.display = isVisible ? 'none' : 'flex';
});
