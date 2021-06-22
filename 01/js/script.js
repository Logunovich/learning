'use strict' 
window.addEventListener ('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          parentTabs = document.querySelector('.tabheader__items');
        //   male = document.querySelector('#gender').children,
        //   maleBlock = document.querySelector('#gender');

    
    function hideContent () {
        tabsContent.forEach((item) => {
            item.style.display = 'none';
        });
        tabs.forEach((item) => {
            if (item.classList.contains ('tabheader__item_active')) {
                item.classList.remove('tabheader__item_active');
            }
        });
    }
    function showContent (i = 0) {
        tabsContent[i].style.display = 'block';
        tabs.forEach(() => {
            tabs[i].classList.add('tabheader__item_active');
        });
    }
    hideContent();
    showContent(); 

    parentTabs.addEventListener('click', (event) => {
        if(event.target && event.target.classList.contains ('tabheader__item')) {
            tabs.forEach((tab, i) => {
                if (event.target == tab) { 
                hideContent();
                showContent(i); 
                console.log(event.target);
                }
            });
        }
    });
    // Экспериментируем

// let arr = Array.prototype.slice.call(male);
// function deleteMale () {
//     arr.forEach((i) => {
//         if (i.classList.contains ('calculating__choose-item_active')) {
//             i.classList.remove ('calculating__choose-item_active');
//         }
//     });
// }
// maleBlock.addEventListener('click', (event) => {
//     let target = event.target;
//     // console.log(target);
//     // console.log(arr[0]);
//     if (target && target.classList.contains ('calculating__choose-item')) {
//     arr.forEach((male, i) => {
//         if(target == arr[i]) {
//             deleteMale();
//             arr[i].classList.add('calculating__choose-item_active');
//         }
//     });
// }
// });


// const cars = [
//     'audi',
//     'bmw'
// ];

// function unique(arr) {
//     return [...new Set(arr)];
// }

// let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Hare', ':-0'];
// console.log(unique(values));

// 


// Заканчиваем экспериментировать -----------


// Таймер -------------- (урок)

// const deadline = '2022-06-22';

// function getTimeRemaning(endtime) {
//     const t = Date.parse(endtime) - Date.parse(new Date()),
//           days = Math.floor(t / (1000 * 60 * 60 * 24)),
//           hours = Math.floor((t / (1000 * 60 * 60)) % 24), 
//           minutes = Math.floor((t / 1000 / 60) % 60),
//           seconds = Math.floor((t / 1000) % 60);

//           return {
//             'total': t,
//             'days': days, 
//             'hours': hours,
//             'minutes': minutes, 
//             'seconds': seconds
//           };
// }

// function getZero(num) {
//     if (num >= 0 && num < 10) {
//         return `0 ${num}`; 
//     } else {
//         return num;
//     }

// }

// function setClock (selector, endtime) {
//     const timer = document.querySelector(selector),
//           days = timer.querySelector('#days'),
//           hours = timer.querySelector('#hours'),
//           minutes = timer.querySelector('#minutes'),
//           seconds = timer.querySelector('#seconds'),
//           timeInterval = setInterval(updateClock, 1000);

//           updateClock();

//           function updateClock() {
//               const t = getTimeRemaning(endtime);
//               console.log(t);
//               days.innerHTML = getZero(t.days);
//               hours.innerHTML = getZero(t.hours);
//               minutes.innerHTML = getZero(t.minutes);
//               seconds.innerHTML = getZero(t.seconds);

//               if (t.total <= 0) {
//                   clearInterval(timeInterval); 
//                   days.innerHTML = '0';
//                   hours.innerHTML = '0';
//                   minutes.innerHTML = '0';
//                   seconds.innerHTML = '0';
//               }
//           }
//     }

// setClock('.timer', deadline);

// Таймер --------------


// мой таймер))) 

const finalDate = '2021-09-08'; 

function timeLeft(time) {
    const t = Date.parse(time) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60)) % 24),
          minutes = Math.floor((t / (1000 * 60)) % 60),
          seconds = Math.floor((t / 1000) % 60);

         

          return {
              't' : t,
              'days': days,
              'hours': hours,
              'minutes': minutes,
              'seconds': seconds, 
          }
         
        }

        function getNull (num) {
            if (num < 10) {
                return `0${num}`
            } else {
                return num;
            }
        }

function clockUpd(time) {
    const days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds'),
          inter = setInterval(updCl, 1000);

          updCl();

          function updCl () {

    const timeArr = timeLeft(time);
    let t = timeArr.t; 

    days.innerHTML = getNull(timeArr.days);
    hours.innerHTML = getNull(timeArr.hours);
    minutes.innerHTML = getNull(timeArr.minutes);
    seconds.innerHTML = getNull(timeArr.seconds);
    // console.log(timeArr.t);
    // console.log(Date.parse(new Date()));
    if (t <= 0) {
        clearInterval(inter);
        days.innerHTML = '00';
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';

    }
        }
    }

clockUpd(finalDate);


// // Модальное окно (пробую делать сам)

// const modal = document.querySelector('.modal'),
//       btn = document.querySelectorAll('[data-modal]'), 
//       btnClose = document.querySelector('.modal__close'),
//       backgroudBtn = document.querySelector('.modal');
//       console.log(backgroudBtn);


// function clickBtn() {
//     btn.forEach((item) => {
//         item.addEventListener('click', () => {
//             // modal.classList.toggle('show'); опционально можно так
//             modal.classList.add('show');  
//             modal.classList.remove('hide');     
//             if (modal.classList.contains('show')) {
//                 console.log('work');
//                 document.body.style.overflow = 'hidden';
//             };
//         });
//     });
// }

// function closeBtn() {
//     btnClose.addEventListener('click', () => {
//         // modal.classList.toggle('show'); опционально можно так
//         modal.classList.add('hide');
//         modal.classList.remove('show');
//         if (modal.classList.contains('hide')) {
//             console.log('work');
//             document.body.style.overflow = '';
//         };
//     });

// }

// backgroudBtn.addEventListener('click', (event)=> {
// if (event.target === backgroudBtn) {
//     console.log('ooooooookKk');
//     modal.classList.add('hide');
//         modal.classList.remove('show');
//         if (modal.classList.contains('hide')) {
//             console.log('work');
//             document.body.style.overflow = '';
//         };
// }
// });


// closeBtn();
// clickBtn();



/// конец моего кода (работает все ок)




// // Урок: 

const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');

function openModal () {
    document.body.style.overflow = 'hidden';
    modal.classList.toggle('show');
    clearInterval(modalTimerId)
}


modalTrigger.forEach((btn) => {

btn.addEventListener('click', () => {
    openModal();
});
});



function closeModal () {
    document.body.style.overflow = '';
    modal.classList.toggle('show');
}

modalCloseBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
        if (e.target === modal) {
        closeModal();
   } 
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});


// Второй урок. Дорабатываем модельное окно 



const modalTimerId = setTimeout(openModal, 50000); // вызываем модельное окно спустя 2 секунды после загрузки стр. 

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        console.log('огромное окно - ' + window.pageYOffset + ' плюс ' + document.documentElement.clientHeight);
        window.removeEventListener('click', showModalByScroll);
      }
    }


 window.addEventListener('click', showModalByScroll);


    console.log('Вся страница в пикселях - ' + document.documentElement.scrollHeight);
    console.log('Сколько прокрутил пользователь - ' + window.pageYOffset);
    console.log('Видимое окно пользователя - ' + document.documentElement.clientHeight);
});


