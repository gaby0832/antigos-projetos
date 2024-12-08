

var sliders = document.querySelectorAll('.slider .inner-slider');
var slider = document.querySelector('.slider');
var bullets = document.querySelector('.bullets')
var curIndex = 0;

sliders.forEach((item,index)=>{
    sliders[index].style.left = 100 * index+'%';
    bullets.innerHTML += '<span class="inner-bullet"></span>';
});


var innerBullets = document.querySelectorAll('.bullets .inner-bullet');
innerBullets[0].style = 'background-color: cyan;';

setInterval(()=>{
    curIndex++;
    if(curIndex >= sliders.length){
        curIndex = 0;
    }


    var offsetScroll = sliders[curIndex].offsetLeft;


    slider.scroll({
        left: offsetScroll,
        behavior: 'smooth'
    })

    for(let i = 0; i < innerBullets.length; i++){
        innerBullets[i].style = 'background-color: #ccc;'
    }
    innerBullets[curIndex].style = 'background-color: cyan;';
},10000)


innerBullets.forEach((item,index)=>{
    innerBullets[index].addEventListener('click',()=>{
        curIndex = index;
        offsetScrollBullet = sliders[index].offsetLeft;


        slider.scroll({
            left: offsetScrollBullet,
            behavior: 'smooth'
        })

        for(let i = 0; i < innerBullets.length; i++){
            innerBullets[i].style = 'background-color: #ccc;'
        }
        innerBullets[index].style = 'background-color: cyan;';

        })
})