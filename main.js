var clock = document.getElementById("countdown");
var body = document.querySelector("body");
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");

$("#countdown")
.countdown(`2023/02/17 15:40:00`, function(event) {
  $(this).text(
    event.strftime('Restam %H:%M:%S')
  );
}).on('finish.countdown', function() {
  body.style.backgroundImage = "url(images/img2.png)";
  audio1.pause();
  audio2.play();
  setTimeout(function() {
      body.style.backgroundImage = "url(images/img3.png)";
      audio3.play();
  }, 15000);
})

