// Code goes here
var imageBackgroundArray = ["glowTop", "glowBottom","glowLeft","glowRight"];
var colorArray = ["green", "blue", "teal", "yellow", "black", "orange", "aquamarine", "white","gray","violet"];

function highlightOpenSessions(x) {
  var logoSlide = document.getElementById("Top");

  logoSlide.addEventListener("webkitAnimationEnd", function() {
    
    var logoBox = document.getElementById("logoBox");
    logoBox.className += " logoBoxSpin";

    for (i = 0; i < x; i++) {
      var glowDiv = document.createElement('div');
      glowDiv.className = 'logoStyle glowBox';
      glowDiv.id = imageBackgroundArray[i];
      logoBox.appendChild(glowDiv);
    };
  }, false);

  setTimeout(function() {
    fadeIn("brandName");}
    ,3000);

}

function fadeIn(nameOfElement) {
  var name = document.getElementsByClassName(nameOfElement)[0];
  name.className += " fade-in";
;}


function buildAllSlices(x) {
  //First, remove all the existing elements from PizzaBox
  var pizzaBox = document.getElementsByClassName("PizzaBox")[0];
  while(pizzaBox.hasChildNodes()) {
    pizzaBox.removeChild(pizzaBox.firstChild);
  }
  var size = x;
  for (i = 0; i < x; i++) {
    createSlice(colorArray[i], size, i);
  }

  fadeIn("PizzaBox");
}

function createSlice(color, count, index) {
/* Artist Profile Picture SHOULD GO IN THIS BOX */
  var colorClassIdentifier = '_'+color;
  var xwidth = (100/count);
  var offset = xwidth*index;
  var artistDiv = document.createElement('div');
  artistDiv.addEventListener('click', function(){
    showVideoContent(colorClassIdentifier, color);}, false);
  artistDiv.className = "pizzaSlice "+ color;
  artistDiv.style.width = xwidth+'%'; 
  artistDiv.style.left = offset+'%';
  artistDiv.id = colorClassIdentifier
/* Artist profile INFO should go HERE --> This gets unhid on .pizzaSlice:hover */
/*    This should be "mini" info...just the basics: Name(w/link), FB "like", Hometown*/
  var artistMiniInfo = document.createElement('div');
  artistMiniInfo.className = "artistMiniInfo";
  artistDiv.appendChild(artistMiniInfo);
  document.getElementsByClassName("PizzaBox")[0].appendChild(artistDiv);
}

function showVideoContent(identifier, color) {
  /* VIDEO/VOTING/SOCIAL SHOULD GO IN THIS BOX */
  var videoHolder = document.getElementsByClassName("videoHolder")[0];

  while(videoHolder.hasChildNodes()) {
    videoHolder.removeChild(videoHolder.firstChild);
  }

  /*This is where the video goes*/
  var videoBox = document.createElement('div');
  videoBox.className = "videoBox";
  videoBox.id = identifier+'_video';
  videoBox.style.background = color;

  /*This is the box that holds the voting & the timer */
  var votingWidget = document.createElement('div');
  votingWidget.className = "votingWidget";
  votingWidget.id = identifier+'_voting';
  votingWidget.style.background = "transparent";

  /*This is the FLIP VOTE stuff*/
  var flipContainer = document.createElement('div');
    flipContainer.className = 'flip-container';
    flipContainer.onclick = function() {
      this.classList.toggle('hover');
    };
  var flipper = document.createElement('div');
    flipper.className = 'flipper';
  var front = document.createElement('div');
    front.className = "front";
  var back = document.createElement('div');
    back.className = "back";

  var voteText = document.createElement('p');
    voteText.className = 'voteText';
    voteText.innerHTML = 'VOTE!!!';
    /*This is the stuff for the SVG element*/
    var NS = "http://www.w3.org/2000/svg";
    var svgWrapper = document.createElementNS(NS, 'svg');
    var svgStar1 = document.createElementNS(NS, 'polygon');
    var svgStar2 = document.createElementNS(NS, 'polygon');

    svgWrapper.style.background = 'transparent';
    svgStar1.setAttribute('points', "45,22.5 30,69.5 67.5,39.5 22.5,39.5 60,69.5");
    svgStar1.setAttribute('stroke', 'transparent');
    svgStar1.setAttribute('fill', '#cbcdd2');
    svgStar2.setAttribute('points', "45,22.5 30,69.5 67.5,39.5 22.5,39.5 60,69.5");
    svgStar2.setAttribute('stroke', 'gray');
    svgStar2.setAttribute('fill', 'gray');
    svgStar2.setAttribute('class', "small");
    svgWrapper.addEventListener('click', function() {
      svgStar2.setAttribute('fill', "red");
      svgStar1.setAttribute('fill', "yellow");
    }, false);
    /*svgStar.setAttribute('points', "100,10 40,198 190,78 10,78 160,198");*/

  var socialWidget = document.createElement('div');
  socialWidget.className = "socialWidget";
  socialWidget.id  = identifier+'_social'; 
  socialWidget.style.background = "gray";

  

  svgWrapper.appendChild(svgStar1);
  svgWrapper.appendChild(svgStar2);
  front.appendChild(voteText);
  back.appendChild(svgWrapper);

  flipper.appendChild(front);
  flipper.appendChild(back);
  flipContainer.appendChild(flipper);
  votingWidget.appendChild(flipContainer);

  videoHolder.appendChild(votingWidget);
  videoHolder.appendChild(videoBox);
  videoHolder.appendChild(socialWidget);

  /*VideoHolder is what the voting, the video, and the social media buttons ALL go into*/
  /*Each of those sections gets appended in a SPECIFIC ORDER, then hidden until user clicks on artist pic*/

}

