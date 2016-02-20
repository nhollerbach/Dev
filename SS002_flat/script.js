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

  var videoBox = document.createElement('div');
  videoBox.className = "videoBox";
  videoBox.id = identifier+'_video';
  videoBox.style.background = color;
  var votingWidget = document.createElement('div');
  votingWidget.className = "votingWidget";
  votingWidget.id = identifier+'_voting';
  votingWidget.style.background = "yellow";
  var socialWidget = document.createElement('div');
  socialWidget.className = "socialWidget";
  socialWidget.id  = identifier+'_social'; 
  socialWidget.style.background = "gray";

  videoHolder.appendChild(votingWidget);
  videoHolder.appendChild(videoBox);
  videoHolder.appendChild(socialWidget);

  /*VideoHolder is what the voting, the video, and the social media buttons ALL go into*/
  /*Each of those sections gets appended in a SPECIFIC ORDER, then hidden until user clicks on artist pic*/

}

