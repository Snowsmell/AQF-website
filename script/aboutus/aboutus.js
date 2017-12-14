$(function(){
  //about four tabs change
  $('.leftnav li').on("click",function(){
    $(this).addClass('current')
           .siblings('li').removeClass('current')

    $('.content article').eq($(this).index())
                         .addClass('current')
                         .siblings('article').removeClass('current')
                         .siblings('h2').text($(this).text().slice(0,4))                         
  })

  //about timeline
  $('.timeline .text .next').on('click',function(){
    var now = $(this).siblings('ul').find('li.current').index();
      now++
      if(now==10){now=0}                   
    $('.timeline .text ul li').eq(now).addClass('current')
                              .siblings().removeClass('current')
    $('.timeline .dian ul li').eq(now).addClass('current')    
                              .siblings().removeClass('current')  
  })

  $('.timeline .text .prev').on('click',function(){
    var now = $(this).siblings('ul').find('li.current').index();
      now--;
      if(now == -1 ){now=9}
    $('.timeline .text ul li').eq(now).addClass('current')
                              .siblings().removeClass('current')
    $('.timeline .dian ul li').eq(now).addClass('current')    
                              .siblings().removeClass('current')  
  })

  $('.timeline .dian ul li').on('click',function(){
    $(this).addClass('current').siblings().removeClass('current')

    $('.timeline .text ul li').eq($(this).index()).addClass('current')
                              .siblings().removeClass('current')
  })
})