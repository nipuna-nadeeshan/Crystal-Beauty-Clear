var index = 0;
var i = 0;
var slider =  document.getElementsByClassName("slider");
var line = document.getElementsByClassName("line");

auto();

function show(n) {
  for(i = 0; i < slider.length; i++){
    slider[i].style.display="none";
  }
  for(i=0;i<line.length;i++){
    line[i].className=line[i].className.replace("sactive");
  }
  slider[n-1].style.display = ("block");
  line[n-1].className += " sactive";
}

function auto() {
  index++;
  if(index > slider.length) {
    index = 1;
  }
  show(index);
  setTimeout(auto, 5000);
}

function plusSlide(n) {
  index += n;
  if(index > slider.length){
    index = 1;
  }
  if (index < 1){
    index = slider.length;
  }
  show(index);
}

function currentSlide(n) {
  index = n;
  show(index);
}