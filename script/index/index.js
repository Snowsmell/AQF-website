$(function () {
  //banner展示轮播图
  function banner(container,setTime) {
    //获取元素
    var carousel = document.querySelector(container);
    var carouselWrap = carousel.querySelector('ul');
    var lis = carouselWrap.querySelectorAll('li');
    var ol = carousel.querySelector('ol');
    var timer = null;
    var timer2 = null;
    var imgWidth = $(window).width();
    var imgHeight = lis[0].offsetHeight;
    console.log(lis[0],imgWidth);
    function setHeight() {
      //设置盒子高度
      //循环创建小圆点，动态加入
      carousel.style.height = imgHeight + "px";
      carouselWrap.style.height = imgHeight + "px";
      for (var i = 0; i < lis.length; i++) {
        var olLi = document.createElement('li');
        if (i == 0) { olLi.classList.add('active') }
        ol.appendChild(olLi);
      }
    }
    setHeight();

    window.addEventListener('resize', function () {
      clearTimeout(timer2);
      timer2 = setTimeout(function () {
        ol.innerHTML = '';
        setHeight();
        window.location.reload();
      }, 300)
    })


    //初始化位置
    var left = lis.length - 1;
    var center = 0;
    var right = 1;
    lis[left].style.transform = "translateX(" + (-imgWidth) + "px)";
    lis[center].style.transform = "translateX(0px)";
    lis[right].style.transform = "translateX(" + (imgWidth) + "px)";


    //自动轮播
    timer = setInterval(showNext, setTime);

    //移动端滑动事件
    var startX = 0;
    var moveX = 0;
    var startTime = 0;
    carouselWrap.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      startTime = Date.now();
      clearInterval(timer);
    });
    carouselWrap.addEventListener('touchmove', function (e) {
      moveX = e.touches[0].clientX - startX;
      setTransition(false, false, false);
      setPosition(moveX);
    });
    carouselWrap.addEventListener('touchend', function (e) {
      // console.log('经过的时间');
      // console.log(Date.now() - startTime);
      // console.log('移动的距离');
      // console.log(moveX);
      if (Math.abs(moveX) > imgWidth / 3 || (Math.abs(moveX) > 50 && (Date.now() - startTime) < 100)) {
        if (moveX > 0) {
          showPrev()
        } else {
          showNext()
        }
      } else {
        setTransition(true, true, true);
        setPosition(0)
      }
      timer = setInterval(showNext, setTime);
    });

    //pc端点击事件
    document.querySelector('.env-next').addEventListener('click', function () {
      clearInterval(timer)
      showNext()
      timer = setInterval(showNext, setTime);
    })
    document.querySelector('.env-prev').addEventListener('click', function () {
      clearInterval(timer)
      showPrev()
      timer = setInterval(showNext, setTime);
    })
    //右侧下一张
    function showNext() {
      //设置过度，再次归位
      left = center;
      center = right;
      right++;
      if (right > lis.length - 1) {
        right = 0
      }
      setTransition(true, true, false);
      setPosition(0);
      setPoints();
    }
    function showPrev() {
      //设置过度，再次归位
      right = center;
      center = left;
      left--;
      if (left < 0) {
        left = lis.length - 1
      }
      setTransition(false, true, true);
      setPosition(0);
      setPoints();
    }
    //初始位置函数
    function setPosition(dis) {
      lis[left].style.transform = "translateX(" + (-imgWidth + dis) + "px)";
      lis[center].style.transform = "translateX(" + (0 + dis) + "px)";
      lis[right].style.transform = "translateX(" + (imgWidth + dis) + "px)"
    }
    //设置过渡的函数
    function setTransition(flag1, flag2, flag3) {
      if (flag1) {
        lis[left].style.transition = 'transform 1s'
      } else {
        lis[left].style.transition = 'none'
      }
      if (flag2) {
        lis[center].style.transition = 'transform 1s'
      } else {
        lis[center].style.transition = 'none'
      }
      if (flag3) {
        lis[right].style.transition = 'transform 1s'
      } else {
        lis[right].style.transition = 'none'
      }
    }

    function setPoints() {
      var olLis = ol.querySelectorAll('li');
      for (var i = 0; i < olLis.length; i++) {
        olLis[i].classList.remove('active')
      }
      olLis[center].classList.add('active')
    }
  }
  banner('.banner-carousel',7000)  
  //关于切换
  $('.infolist p span').on('click',function(){
    $(this).addClass('current').siblings('span').removeClass('current')
    $('.infolist-content ul').eq($(this).index()).addClass('current')
                              .siblings('ul').removeClass('current')
  })


  //关于研发中心老师的介绍展开
  $('.dev-center .expend-text').on('click',function(){
    $(this).siblings('span').toggle();
    $(this).siblings('p').toggleClass('expend')
    if($(this).text()=='展开全部'){
      $(this).text('收起')
    }else{
      $(this).text('展开全部')
    }
  })

  //研发中心移动端
  if($(window).width()<=640){
    $('.dev-center').removeClass('pc').addClass('mobile')
    banner('.dev-center.mobile .container',10000)
  }

})