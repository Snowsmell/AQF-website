//2017.8.2 薛启伟初版
/**
 * 常见的横向点击移动和纵向点击移动，容器内允许任意个数，
 * 不用定位而用transform，因为定位重排页面很损耗性能
 */


    var clickmove = {
        //第一个函数，水平方向轮播，第一个是包裹的容器，第二个参数代表显示时间，第三个参数表示切换过渡时间，第四个参数表示想要同时显示的个数,第五个表示是否开启点击切换
        horzational: function (container, time, transTime,maxNumber,flag) {
            var container = document.querySelector(container)
            var ul = container.querySelector('ul');
            var lis = ul.querySelectorAll('li');
            var timer = null;
            var index = 0;
            var containerWidth = container.offsetWidth;
            var liWidth = lis[0].offsetWidth;
            container.style.width = liWidth*maxNumber+'px';
            // var maxNumber = Math.ceil(containerWidth / liWidth);//最大显示个数
            console.log(maxNumber)

            //结尾处追加li,追加个数为最大显示个数
            for (var i = 0; i < maxNumber; i++) {
                var cloneLi = lis[i].cloneNode(true);
                ul.appendChild(cloneLi)
            }

            //设置Ul宽度,依照获取的Li宽度，写在行内定死后再定ul
            function setUlWidth() {
                [].forEach.call(ul.querySelectorAll('li'), function (v, i) {
                    v.style.width = liWidth + 'px';
                    ul.style.width = liWidth * (i + 1) + 'px'//这里可以优化下性能，不过不是重点
                })
            }
            setUlWidth();
            //自动轮播事件
            function autoplay() {
                timer = setInterval(function () {
                    moveNext()
                }, time)
                console.log(index)
            }
            autoplay()
            //核心部分
            function moveNext() {
                ul.style.transition = 'transform ' + transTime + 's';
                if (index == lis.length) {
                    ul.style.transition = 'none';
                    index = 0;
                    ul.style.transform = 'translateX(-' + index * liWidth + 'px)';
                    setTimeout(function () {
                        ul.style.transition = 'transform ' + transTime + 's';
                        ul.style.transform = 'translateX(-' + ++index * liWidth + 'px)';
                    }, 0)
                } else {
                    ul.style.transform = 'translateX(-' + ++index * liWidth + 'px)';
                }
            }
            function movePrev() {
                ul.style.transition = 'transform ' + transTime + 's';
                if (index == 0) {
                    ul.style.transition = 'none';
                    index = lis.length;
                    console.log(index)
                    ul.style.transform = 'translateX(-' + index * liWidth + 'px)';
                    setTimeout(function () {
                        ul.style.transition = 'transform ' + transTime + 's';
                        ul.style.transform = 'translateX(-' + --index * liWidth + 'px)';
                    }, 0)
                } else {
                    ul.style.transform = 'translateX(-' + --index * liWidth + 'px)';
                }
            }
            //点击事件
            if(flag){
                container.parentNode.querySelector('.next').addEventListener('click', function () {
                    clearInterval(timer)
                    moveNext()
                    autoplay()
                })
                container.parentNode.querySelector('.prev').addEventListener('click', function () {
                    clearInterval(timer)
                    movePrev()
                    autoplay()
                })
            }
        }
    }

    