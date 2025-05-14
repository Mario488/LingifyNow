
//navigation menu event
const navMenuIcon = document.getElementById('navMenuIcon');
const sideBar = document.getElementById('sideBar');

navMenuIcon.addEventListener('click', () => {
    sideBar.style.display = 'block';
});

document.addEventListener('click', (event) => {
    if (!sideBar.contains(event.target) && !navMenuIcon.contains(event.target)) {
        sideBar.style.display = 'none';
    }
});




//event when navigation settings is clicked
const navSettingIcon = document.getElementById('navSettingIcon');
const settingPanel = document.getElementById('settingPanel');
navSettingIcon.addEventListener('click', () =>{
    settingPanel.style.display = 'block';
    
});

document.addEventListener('click', (event) => {
    if (!settingPanel.contains(event.target) && !navSettingIcon.contains(event.target)) {
        settingPanel.style.display = 'none';
    }
});



//sort in settings div
const sortPanel = document.getElementById('sortPanel');
const settingSortBtn = document.getElementById('settingSortBtn');

settingSortBtn.addEventListener('click', () => {
    sortPanel.style.display = 'block';
    if (settingPanel) {
        settingPanel.style.display = 'none';
    }
    
});

document.addEventListener('click', (event) => {
    if (!sortPanel.contains(event.target) && !settingSortBtn.contains(event.target)) {
        sortPanel.style.display = 'none';
    }
});





//Filter in settings div
const fltrPanel = document.getElementById('fltrPanel');
const settingFltrBtn = document.getElementById('settingFltrBtn');
settingFltrBtn.addEventListener('click', () => {
    fltrPanel.style.display = 'block';
    if (settingPanel) {
        settingPanel.style.display = 'none';
    }
});


document.addEventListener('click', (event) => {
    if (!fltrPanel.contains(event.target) && !settingFltrBtn.contains(event.target)) {
        fltrPanel.style.display = 'none';
    }
});
