// Buttons
const navSettingIcon = document.getElementById('navSettingIcon');
const settingFltrBtn = document.getElementById('settingFltrBtn');
const settingSortBtn = document.getElementById('settingSortBtn');
const navMenuIcon = document.getElementById('navMenuIcon');

// Panels/Containers
const sortPanel = document.getElementById('sortPanel');
const fltrPanel = document.getElementById('fltrPanel');
const settingPanel = document.getElementById('settingPanel');
const sideBar = document.getElementById('sideBar');

const elemsToClose = [settingPanel, sortPanel, fltrPanel, sideBar];

// Event listeners
navSettingIcon.addEventListener('click', (e) => {
    e.stopPropagation(); 
    const isVisible = settingPanel.style.display === 'flex';
    settingPanel.style.display = isVisible ? 'none' : 'flex';
});

settingFltrBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = fltrPanel.style.display === 'flex';
    fltrPanel.style.display = isVisible ? 'none' : 'flex';
});

settingSortBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = sortPanel.style.display === 'flex';
    sortPanel.style.display = isVisible ? 'none' : 'flex';
});

navMenuIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = sideBar.style.display === 'flex';
    sideBar.style.display = isVisible ? 'none' : 'flex';
});

document.addEventListener('click', (e) => {
    if (!elemsToClose.some(el => el.contains(e.target))) {
        settingPanel.style.display = 'none';
        sortPanel.style.display = 'none';
        fltrPanel.style.display = 'none';
        sideBar.style.display = 'none';
    }

    
});



//FAVORITES/STAR ICON BY APRIL

/* const favIcon = document.getElementById('favIcon')

document.addEventListener('click', () => {
    if (favIcon.classList.contains('fa-regular fa-star')){
        favIcon.classList.remove('fa-regular fa-star');
        favIcon.classList.add('fa fa-star');

    } else if(favIcon.classList.contains('fa fa-star')){
        favIcon.classList.remove('fa fa-star');
        favIcon.classList.add('fa-regular fa-star');

    }

});
*/
