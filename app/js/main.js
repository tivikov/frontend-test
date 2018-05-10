var years = document.getElementById('year');
var currenttyear = new Date().getFullYear();
var startyear = new Date((currenttyear-100).toString()).getFullYear();
for (var i = startyear;i<=currenttyear;i++){
  var newOpt = document.createElement('option');
  newOpt.value = i;
  newOpt.innerHTML = i;
  if(newOpt.value == "1999") {
    newOpt.selected = true;
    years.classList.add('change');
  }
  years.appendChild(newOpt);
}


var humb = document.getElementById('icon-menu');
var mobMenu = document.getElementById('mob-menu');
humb.addEventListener('click',openMenu);

function changeClass() {
  event.srcElement.className="change";
}



function openMenu() {  
  humb.classList.toggle('open');
  if(humb.classList.contains('open'))
    mobMenu.style.display = "block";
  else
    mobMenu.style.display = "none";

}

// drag
var drop = document.getElementById('drop');
var init;
var drag = false;
var range = document.getElementById('range');
var ind = document.getElementById('indicator');
var levels = document.getElementsByClassName('level');
for (var i = 0;i<levels.length;i++){
  levels[i].addEventListener('mousedown',function (e) {  
    drag=true;
  })
}
range.onmousedown = function (e) {  
  init = e.pageX - range.getBoundingClientRect().left;
  drop.style.left = Math.round(init/range.clientWidth*4)*25 + "%";
  indicator.style.width = Math.round(init / range.clientWidth*4)*25 + "%";
  if (Math.round(init / range.clientWidth * 4) * 25 === 75) {
    drop.style.left = "100%";
    ind.style.width = "100%";
  }
}
drop.onmousedown=function (e) {  
  drag = true;
}
document.onmousemove = function (e) {
  if(drag) {
    init = e.pageX - range.getBoundingClientRect().left;
    if(init < 0 || init > range.clientWidth) {
      return false;
    }
    drop.style.left = (init / range.clientWidth) * 100 + "%";
    ind.style.width = (init / range.clientWidth) * 100 + "%";
  }
}

drop.ondragstart = function () {  
  return false;
}
document.onmouseup = function (e) {  
  if(!drag) return;
  init = e.pageX - range.getBoundingClientRect().left;
  drop.style.left = Math.round(init / range.clientWidth * 4) * 25 + "%";
  indicator.style.width = Math.round(init / range.clientWidth * 4) * 25 + "%";
  if (Math.round(init / range.clientWidth * 4) * 25 === 75) {
    drop.style.left = "100%";
    ind.style.width = "100%";
  }
  drag = false;
}


//touches

range.addEventListener('touchstart',function (e) {
  init = e.touches[0].clientX - range.getBoundingClientRect().left;
  drop.style.left = Math.round(init / range.clientWidth * 4) * 25 + "%";
  indicator.style.width = Math.round(init / range.clientWidth * 4) * 25 + "%";
  if (Math.round(init / range.clientWidth * 4) * 25 === 75) {
    drop.style.left = "100%";
    ind.style.width = "100%";
  }
})

drop.addEventListener('touchstart',function (e) {
  drag = true;
})

document.addEventListener('touchmove', function (e) {
  if(drag) {
    init = e.touches[0].clientX - range.getBoundingClientRect().left;
    if (init < 0 || init > range.clientWidth) {
      return false;
    }
    drop.style.left = (init / range.clientWidth) * 100 + "%";
    ind.style.width = (init / range.clientWidth) * 100 + "%";
  }
})

document.addEventListener('touchend', function (e) {
  if(!drag) return;
  drag = false;
  init = e.changedTouches[0].clientX - range.getBoundingClientRect().left;
  drop.style.left = Math.round(init / range.clientWidth * 4) * 25 + "%";
  indicator.style.width = Math.round(init / range.clientWidth * 4) * 25 + "%";
  if (Math.round(init / range.clientWidth * 4) * 25 === 75) {
    drop.style.left = "100%";
    ind.style.width = "100%";
  }
})