$(function(){
  //关于切换
  $('.leftnav li').on("click",function(){
    $(this).addClass('current')
           .siblings('li').removeClass('current')

    $('.content article').eq($(this).index())
                         .addClass('current')
                         .siblings('article').removeClass('current')
                         .siblings('h2').text($(this).text().slice(0,4))

                         
  })

})