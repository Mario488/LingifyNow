const fontSetting = document.getElementById('fontSetting');
const textSettingContainer = document.getElementById('textSettingContainer');

fontSetting.addEventListener('click', () => {
    textSettingContainer.classList.toggle('show');
});


const tableContentIcon = document.getElementById('tableContentIcon');
const tableContentContainer = document.getElementById('tableContentContainer');

tableContentIcon.addEventListener('click', () => {
    tableContentContainer.classList.toggle('show');
});
