// Code goes here
var imageBackgroundArray = ["glowTop", "glowBottom","glowLeft","glowRight"];
var colorArray = ["green", "blue", "teal", "yellow", "black", "orange", "aquamarine", "white"];



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

  setTimeout(fadeIn("brandName"),2000);
}
function fadeIn(nameOfElement) {
  var name = document.getElementsByClassName(nameOfElement)[0];
  name.className += " fade-in";

}


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

  var pizzaAngle = pizzaRotationAngle(x);
  pizzaBox.style.transform = 'rotate('+ pizzaAngle +'deg)';
  fadeIn("PizzaBox");
}

function findSliceSize (count) {
  if (count >= 7) {
    return .53589;
  } else if (count >= 5) {
    return .72794;
  } else if (count == 4) {
    return .8284;
  } else if (count == 3) {
    return .9326;
  } else if (count == 2) {
    return 1.1547;
  }
}

function findSliceAngle (count) {
  if (count >= 7) {
    return 30;
  } else if (count >= 5) {
    return 40;
  } else if (count == 4) {
    return 45;
  } else if (count == 3) {
    return 50;
  } else if (count == 2) {
    return 60;
  }
}

function pizzaRotationAngle (count) {
  var _angle = findSliceAngle(count);
  var angle = ((_angle * (count-1))/2)*-1;
  return angle;
}
    
function createSlice(color, count, index) {
  /* ---THIS IS WHAT THE HOLDER ELEMENT SHOULD LOOK LIKE---
  
      <div class="clipBoxOut SpinX">
        <div class="clipBoxIn">
          <a href="#">
            <div class="clip" id="yellow"></div>
          </a>
        </div>
      </div>
      
  */
  var _width = findSliceSize(count);
  var xwidth = 40* _width;
  var xmarginLeft = (xwidth/2)*-1;
  
  var _sliceAngle = findSliceAngle(count);
  var xsliceAngle = _sliceAngle * index;

  /*Outer Box*/
  var outdiv = document.createElement('div');
  outdiv.className = "clipBoxOut";
  outdiv.addEventListener('click', function(){alert('suckmyballs!!');}, false);
  outdiv.style.width = xwidth+'%';
  outdiv.style.marginLeft = xmarginLeft +'%';
  outdiv.style.transform = 'rotate('+ xsliceAngle + 'deg)';
  
  /*Inner Box*/
  var indiv = document.createElement('div');
  indiv.className = "clipBoxIn"
  
  /*Anchor Link*/
  var alink = document.createElement('a');
  alink.href = "#";
  
  /*This is where the background clip should go*/
  var clip = document.createElement('div');
  clip.className = "clip";
  clip.id = color;
  /*
  clip.style.background = "url('http://i.imgur.com/IkiLeXj.jpg')";
  clip.style.backgroundPosition = "-200% -90%";
  */

  alink.appendChild(clip);
  indiv.appendChild(alink);
  outdiv.appendChild(indiv);
  
  document.getElementsByClassName("PizzaBox")[0].appendChild(outdiv);
}

