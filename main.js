
function openMenu() {
    document.querySelector(".nav").classList.toggle('active');
    document.querySelector(".menu-open").classList.toggle('active');
    document.querySelector(".menu-close").classList.toggle('active');
    document.getElementById('overlay').style.display = 'block';
}
function closeMenu() {
    document.querySelector(".nav").classList.toggle('active');
    document.querySelector(".menu-open").classList.toggle('active');
    document.querySelector(".menu-close").classList.toggle('active');
    document.getElementById('overlay').style.display = 'none';
}
function featuresDropdown(){
    document.querySelector('.feature').classList.toggle('active');
    // ------------ arrow change --------------
    var image = document.getElementById('featureImg');
    if (image.src.includes('icon-arrow-down.svg')) {
        image.src = './images/icon-arrow-up.svg';
    } else {
        image.src = './images/icon-arrow-down.svg';
    }
}
function companyDropdown(){
    document.querySelector('.company').classList.toggle('active');
    // ------------ arrow change --------------
    var image = document.getElementById('companyImg');
    if (image.src.includes('icon-arrow-down.svg')) {
        image.src = './images/icon-arrow-up.svg';
    } else {
        image.src = './images/icon-arrow-down.svg';
    }
}