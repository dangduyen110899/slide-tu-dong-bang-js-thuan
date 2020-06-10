window.addEventListener("load", function(event) {
    const width = 800
    const slides = document.getElementById('slides')
    const slidesWrap = slides.querySelector('.wrap') 

    //tinh chieu rong slide
    const imgs = slidesWrap.getElementsByClassName('slide')
    const totalImg = imgs.length
    const totalWidth = totalImg * width 
    slidesWrap.style.width =  totalWidth + 'px'

    //vi tri ben trai
    let left = 0

    //khi click nut next
    const nextBtn = slides.querySelector('.next')
    nextBtn.addEventListener("click",function(){
        left -= width
        if( left <= -totalWidth) {
            left = 0
        }
        slidesWrap.style.left = left + 'px'
    })

    //khi click nut prev
    const prevBtn = slides.querySelector('.prev')
    prevBtn.addEventListener("click",function(){
        left += width
        if( left > 0) {
            left = -(totalWidth-width)
        }
        slidesWrap.style.left = left + 'px'
    })

    //tu dong chay slide
    let autoLoopSlide = null
    autoLoopSlide = setInterval(() => {
        nextBtn.click()
    }, 3000);

    //dung slide khi di chuot vao
    slides.addEventListener('mouseenter',function() {
        clearInterval(autoLoopSlide)
    })

    //chay slide khi di chuot ra
    slides.addEventListener('mouseleave',function() {
        autoLoopSlide = setInterval(() => {
            nextBtn.click()
        }, 3000);
    })
  })
  