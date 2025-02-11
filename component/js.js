const containerSearch = document.querySelector('.container-icon-search');
const navBar = document.getElementById('navbar');
const containerConcelSearch = document.querySelector('.container-concel')

containerSearch.addEventListener('click', () => {
    navBar.classList.add('active');

    containerConcelSearch.addEventListener('click', () => {
        navBar.classList.remove('active')
    })
    

})