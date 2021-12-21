const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s');

// let date = new Date();

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());



function clock() {

    let time = new Date(),
        hours = time.getHours() * 30,
        minutes = time.getMinutes() * 6,
        seconds = time.getSeconds() * 6;


        hour.style = `transform: rotate(${hours}deg)`;
        min.style = `transform: rotate(${minutes}deg)`;
        sec.style = `transform: rotate(${seconds}deg)`;
}


clock()
    

const tabsLinks = document.querySelectorAll('.tabsItem'),
    tabsContent = document.querySelectorAll('.tabsContentItem');


tabsLinks.forEach(tabsItem => {
    tabsItem.addEventListener('click', function() {
        removeActive(tabsLinks,tabsContent);
        this.classList.add('active');
    })
})

tabsContent.forEach(tabsContentItem => {
    tabsContentItem.addEventListener('click', function() {
        removeActive(tabsContent);
        this.classList.add('active');
    })
})

// this - в оброботчике событий обращяется на элемент на который вешаем свмо события

function removeActive(array) {
    array.forEach(item => {
        item.classList.remove('active');
    })
}
