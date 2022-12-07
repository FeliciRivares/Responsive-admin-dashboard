const chart = document.querySelector('#chart').getContext('2d');
// create new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov' ],

        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59059, 57500, 49505, 43902, 39475, 23583, 23749, 60376],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'EHT',
                data: [39374, 43537, 49631, 69059, 27500, 39505, 23902, 69475, 53583, 33749, 30376],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
        }, 
        options: {
        responsive: true  
        }
   
})


// show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () =>{
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    sidebar.style.display = 'none';
})

// change theme


const themeBtn = document.querySelector('.theme-btn');


themeBtn.addEventListener('click',() =>{
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})