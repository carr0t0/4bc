$(".play").click(function(){
  $(this).parents(".txtbox").siblings(".img_box").addClass("move")
  $(this).parents(".txtbox").siblings(".img_box").removeClass("move_pause")
  $(this).parents(".box").find("audio").get(0).play();
})
$(".pause").click(function(){
  $(this).parents(".txtbox").siblings(".img_box").addClass("move_pause")
  $(this).parents(".box").find("audio").get(0).pause();
})
$(".load").click(function(){
  $(this).parents(".txtbox").siblings(".img_box").removeClass("move")
  $(this).parents(".txtbox").siblings(".img_box").removeClass("move_pause")
  $(this).parents(".box").find("audio").get(0).load();
})

/* 이전 다음 버튼 누를때, 오디오/애니메이션 초기화 */

function stop(){
  $(".img_box").removeClass("move")
  $(".img_box").removeClass("move_pause")
 
}


/* box 회전 */
 let i=0
 let a=0
 let b=0
$(".btn_next").click(function(){
  i++ //i=i+1
  $(".contents").css({"transform":"rotate(" + (-45*i) +"deg)"})
  $(".box").removeClass("on")
  //eq(0)~eq(7)
  a=a==7?0:a+1
  $(".box").eq(a).addClass("on")
  stop();
  b=a==0?7:a-1
  $(".box").find("audio").get(b).pause();
  $(".box").find("audio").get(b).load();
})//.btn_next click end


$(".btn_prev").click(function(){
  i-- //i=i-1
  $(".contents").css({"transform":"rotate(" + (-45*i) +"deg)"})
  $(".box").removeClass("on")
  //eq(7)~eq(0)
  a=a==7?0:a-1
  $(".box").eq(a).addClass("on");

  stop();
  b=a==7?0:a+1
  $(".box").find("audio").get(b).pause();
  $(".box").find("audio").get(b).load();

})//.btn_prev click end