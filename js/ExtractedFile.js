const fontSetting = document.getElementById('fontSetting');
const textSettingContainer = document.getElementById('textSettingContainer');

const pageColorWhite = document.getElementById('pageColorWhite');
const pageColorBeige = document.getElementById('pageColorBeige');
const pageColorBlack = document.getElementById('pageColorBlack');

const doc = document.getElementById('document');
const increaseFont = document.getElementById('increaseFont');
const decreaseFont = document.getElementById('decreaseFont');

const MIN_FONT_SIZE = 16;
const MAX_FONT_SIZE = 32;

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

increaseFont.addEventListener('click', () => {
    const docStyle = window.getComputedStyle(doc);
    let currFontSize = parseFloat(docStyle.fontSize);
    if (currFontSize < MAX_FONT_SIZE) {
        currFontSize += 2;
        doc.style.fontSize = currFontSize + 'px';
    }
    updateFontButtons(currFontSize);
});

decreaseFont.addEventListener('click', () => {
    const docStyle = window.getComputedStyle(doc);  
    let currFontSize = parseFloat(docStyle.fontSize);
    if (currFontSize > MIN_FONT_SIZE) {
        currFontSize -= 2;
        doc.style.fontSize = currFontSize + 'px';
    }
    updateFontButtons(currFontSize);
});

window.addEventListener('DOMContentLoaded', () => {
    const docStyle = window.getComputedStyle(doc);
    const currFontSize = parseFloat(docStyle.fontSize);
    updateFontButtons(currFontSize);
});


pageColorWhite.addEventListener('click', () => {
    doc.style.backgroundColor = '#fff';
    doc.style.color = '#122C4A';
});

pageColorBeige.addEventListener('click', () => {
    doc.style.backgroundColor = 'hsl(40, 38%, 83%)';
    doc.style.color = '#122C4A';
});

pageColorBlack.addEventListener('click', () => {
    doc.style.backgroundColor = '#222222';
    doc.style.color = '#B5CFED';
});




fontSetting.addEventListener('click', () => {
    textSettingContainer.classList.toggle('show');
});



const tableContentIcon = document.getElementById('tableContentIcon');
const tableContentContainer = document.getElementById('tableContentContainer');

tableContentIcon.addEventListener('click', () => {
    tableContentContainer.classList.toggle('show');
});
