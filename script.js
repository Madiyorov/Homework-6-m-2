const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes');

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

        hoursNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
        minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

        setTimeout(() => clock(), 1000);  /* Рекурция - это когда функция внутри себя вызывает самого себя */
}
    // setInterval(clock, 1000)
    clock()
    
    const tabsItem = document.querySelectorAll('.tabsItem'),
        tabsContent = document.querySelectorAll('.tabsContentItem');

        // console.log(tabsItem.length);
        // console.log(tabsContent.length);


        tabsItem.forEach((item, i) => {
            item.addEventListener('click', function () {
                removeActiveClass()
                this.classList.add('active');
                tabsContent[i].classList.add('active');
            })
        })

        function removeActiveClass () {
            tabsItem.forEach((item, i) => {
                item.classList.remove('active');
                tabsContent[i].classList.remove('active');
            })
        }

    const watchBtn = document.querySelector('.stopwatch__btn'),
    watchSeconds = document.querySelector('.stopwatch__seconds'),
    watchMinutes = document.querySelector('.stopwatch__minutes'),
    watchHours = document.querySelector('stopwatch__hours');
    watchBtn.addEventListener('click', function () {
    if(this.innerHTML == 'start'){
        this.innerHTML = 'stop';

        let timer = 0

        setTimeout(() => timerWatch(this, timer), 1000)
    }else if(this.innerHTML == 'stop'){
        this.innerHTML = 'reset'
    }else{
        this.innerHTML = 'start'
        watchSeconds.innerHTML = 0;
        watchMinutes.innerHTML = 0;
        watchHours.innerHTML = 0;
    }
})

function timerWatch (element, i){
    if(element.innerHTML == 'stop'){
        if(i == 59){
            i = 0;
            watchSeconds.innerHTML = 0;
            if(watchMinutes == 59){
                watchMinutes.innerHTML = 0;
                watchHours.innerHTML++
            }else {
                watchMinutes.innerHTML++
            }
        }else{
            i++
            watchSeconds.innerHTML = i;
        }
        setTimeout(() => timerWatch(element, i), 1000)
    }
}