$(function () {
  var isIE9 = navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE9.0"

  //banner展示轮播图--非ie9
  function banner(container, setTime) {
    //获取元素
    var carousel = document.querySelector(container);
    var carouselWrap = carousel.querySelector('ul');
    var lis = carouselWrap.querySelectorAll('li');
    var ol = carousel.querySelector('ol');
    var timer = null;
    var timer2 = null;
    var imgWidth = $(window).width();
    var imgHeight = lis[0].offsetHeight;
    // console.log(lis[0],imgWidth);
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

  //banner轮播--ie9专用
  function iebanner(container, setTime) {
    var box = document.querySelector(container);
    var ul = box.querySelector('ul');
    var lis = ul.querySelectorAll('li');
    var imgW = lis[0].offsetWidth;
    var ol = box.querySelector('ol')
    var ollis = '';
    var index = 0;
    var timer = null;
    $(lis).each(function (i, v) {
      v.style.width = imgW + 'px'
      if (i == 0) {
        ollis += '<li class="active"></li>'
      } else {
        ollis += '<li></li>'
      }
    })
    ol.innerHTML = ollis
    var first = lis[0].cloneNode('true')
    ul.appendChild(first)
    ul.style.width = lis[0].offsetWidth * (lis.length + 1) + 'px'
    //小圆点事件
    $(ol).find('li').on('mouseenter', function () {
      $(this).addClass('active').siblings().removeClass('active')
      var end = -$(this).index() * imgW
      index = $(this).index()
      animate(ul, end)
    })

    //next事件
    function next() {
      if (index == lis.length) {
        index = 0
        ul.style.left = 0;
      }
      index++
      var end = -index * imgW
      animate(ul, end)
      var pic = index;
      if (pic == lis.length) {
        pic = 0
      }
      $('ol li').eq(pic).addClass('active').siblings().removeClass('active')

    }
    //prev事件
    function prev() {
      if (index == 0) {
        index = lis.length
        ul.style.left = -imgW * index + 'px';
      }
      index--
      var end = -index * imgW
      animate(ul, end)
      $('ol li').eq(index).addClass('active').siblings().removeClass('active')
    }
    //点击事件
    $(box).find('.env-prev').on('click',function(){
      prev()
    })
    $(box).find('.env-next').on('click',function(){
      next()
    })    
    //轮播
    timer = setInterval(next,setTime)
    $(box).on('mouseenter',function(){
      console.log('jinru')
      clearInterval(timer)
    })
    $(box).on('mouseleave',function(){
      timer = setInterval(next,setTime)
    })
  }

  //一个缓动函数--ie9用
  function animate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      var leader = obj.offsetLeft;
      var step = 30;
      step = leader < target ? step : -step;
      if (Math.abs(target - leader) >= Math.abs(step)) {
        leader = leader + step;
        obj.style.left = leader + "px";
      } else {
        obj.style.left = target + "px";
        clearInterval(obj.timer);
      }
    }, 15);
  }

  //看是否是ie9，切换轮播方式
  if (!isIE9) {
    banner('.banner-carousel', 7000)
  } else {
    $('.banner-carousel ul li').each(function (i, v) {
      $(v).addClass('ie9')
    })
    iebanner('.banner-carousel', 5000)
  }
  //关于切换
  $('.infolist p span').on('click', function () {
    $(this).addClass('current').siblings('span').removeClass('current')
    $('.infolist-content ul').eq($(this).index()).addClass('current')
      .siblings('ul').removeClass('current')
  })
  //关于研发中心老师的介绍展开
  $('.dev-center .expend-text').on('click', function () {
    $(this).siblings('span').toggle();
    $(this).siblings('p').toggleClass('expend')
    if ($(this).text() == '展开全部') {
      $(this).text('收起')
    } else {
      $(this).text('展开全部')
    }
  })

  //研发中心移动端
  if ($(window).width() <= 640) {
    $('.dev-center').removeClass('pc').addClass('mobile')
    banner('.dev-center.mobile .container', 10000)
  }

})