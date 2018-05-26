function mergefoo(wtbreed_id, with_id) {
    $.get(
        "/want_to_breed?wtbreed=" + wtbreed_id + "&with=" + with_id,
        {},
        function(data) {
            var res_id = Number(data);
            console.log(res_id);
            res_img.src = "/static/img/lizards/" + res_id + ".svg";
            res_label.value = "Lizard #" + res_id;
            setTimeout(chngvis, 0.8*mergetime*1000);
        }
    );

  mergebutton.style.visibility='hidden';
  var b= document.getElementsByClassName("bcg");
  for (var i = 0; i < b.length; i+=2) {
    b[i].style.backgroundColor='rgba(0, 0, 0, 0)';
  }
  var start= Date.now();
  var f= document.getElementsByClassName("fading");
  var speed = window.innerWidth/5;
  var distance=$("#liz3").offset().left - $("#liz1").offset().left;
  var mergetime = distance / speed;
  var timer=setInterval(function(){
    var timePassed=Date.now()-start;
    liz1.style.left= speed*timePassed/1000+'px';
    liz2.style.right= speed*timePassed/1000+'px';
    for (var i = 0; i < f.length; i++) {
      f[i].style.opacity= 1-1.5*(timePassed/1000)/mergetime;
    }
    if ($("#liz1").offset().left- $("#liz3").offset().left>0)
      clearInterval(timer);
  }, 20);

  function chngvis() {


    liz3.style.visibility='visible';
    var timer1=setInterval(function(){
      liz3.style.opacity=$('#liz3').css("opacity")-(-0.01);
      if ($('#liz1').css("opacity")=='1')
        clearInterval(timer1);
    }, 20);
    document.getElementById("liz3").classList.add("col-md-12");
    var zoom=1; //зум новой ящерки, хз, хорошая ли практика делать это вот так
    getw.style.width=$("#setw1").outerWidth()*zoom+'px';
    liz2.style.visibility='hidden';
    liz1.style.visibility='hidden';
    setw1.style.width='0px';
    setw2.style.width='0px';
    document.getElementById("setw1").classList.remove("col");
    document.getElementById("setw2").classList.remove("col");
    document.getElementById("btnbreed").classList.remove("col-md-12");
    btnbreed.style.width='0px';
    var c= document.getElementsByClassName("congrats");
    for (var i = 0; i < c.length; i++) {
      c[i].classList.add("col");
      c[i].style.visibility='visible';
    }
  }
}
