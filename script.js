let consultScore
let communicationScore
let educationScore
let recommendScore

buttonContainer = document.getElementById('button-container')

// Get all buttons with class="btn" inside the container
var btns = buttonContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

function next() {
 let scroll = document.getElementById('next')
  scroll.scrollIntoView({behavior: "smooth"})
}

function getValue(e){
  recommendScore = e.innerText
}

function my5StarConsult() {
    var element = document.getElementById("face-1");
    element.className = 'fa-regular fa-face-grin-hearts'
    element.scrollIntoView({behavior: "smooth"})
    consultScore = 5
  }

function my4StarConsult() {
    var element = document.getElementById("face-1");
    element.className = 'fa-regular fa-face-smile'
    element.scrollIntoView({behavior: "smooth"})
    consultScore = 4
  }

function my3StarConsult() {
    var element = document.getElementById("face-1");
    element.className = 'fa-regular fa-face-meh'
    element.scrollIntoView({behavior: "smooth"})
    consultScore = 3
  }

function my2StarConsult() {
    var element = document.getElementById("face-1");
    element.className = 'fa-regular fa-face-frown-open'
    element.scrollIntoView({behavior: "smooth"})
    consultScore = 2
  }

function my1StarConsult() {
    var element = document.getElementById("face-1");
    element.className = 'fa-regular fa-face-angry'
    element.scrollIntoView({behavior: "smooth"})
    consultScore = 1
  }



function my5StarCommunication() {
    var element = document.getElementById("face-2");
    element.className = 'fa-regular fa-face-grin-hearts'
    element.scrollIntoView({behavior: "smooth"})
     communicationScore = 5
  }

function my4StarCommunication() {
    var element = document.getElementById("face-2");
    element.className = 'fa-regular fa-face-smile'
    element.scrollIntoView({behavior: "smooth"})
     communicationScore = 4
  }

function my3StarCommunication() {
    var element = document.getElementById("face-2");
    element.className = 'fa-regular fa-face-meh'
    element.scrollIntoView({behavior: "smooth"})
     communicationScore = 3
  }

function my2StarCommunication() {
    var element = document.getElementById("face-2");
    element.className = 'fa-regular fa-face-frown-open'
    element.scrollIntoView({behavior: "smooth"})
     communicationScore = 2
  }

function my1StarCommunication() {
    var element = document.getElementById("face-2");
    element.className = 'fa-regular fa-face-angry'
    element.scrollIntoView({behavior: "smooth"})
     communicationScore = 1
  }



function my5StarEducation() {
    var element = document.getElementById("face-3");
    element.className = 'fa-regular fa-face-grin-hearts'
    element.scrollIntoView({behavior: "smooth"})
     educationScore = 5
  }

function my4StarEducation() {
    var element = document.getElementById("face-3");
    element.className = 'fa-regular fa-face-smile'
    element.scrollIntoView({behavior: "smooth"})
     educationScore = 4
  }

function my3StarEducation() {
    var element = document.getElementById("face-3");
    element.className = 'fa-regular fa-face-meh'
    element.scrollIntoView({behavior: "smooth"})
     educationScore = 3
  }

function my2StarEducation() {
    var element = document.getElementById("face-3");
    element.className = 'fa-regular fa-face-frown-open'
    element.scrollIntoView({behavior: "smooth"})
     educationScore = 2
  }

function my1StarEducation() {
    var element = document.getElementById("face-3");
    element.className = 'fa-regular fa-face-angry'
    element.scrollIntoView({behavior: "smooth"})
     educationScore = 1
  }











  button = document.querySelector('.btn-scale-1')
  button.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('ketrigger')
    button = document.querySelector('.btn-scale-10')
    button.scrollIntoView({behavior: "smooth"})
  })

  button = document.querySelector('.btn-scale-2')
  button.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('ketrigger')
    button = document.querySelector('.btn-scale-10')
    button.scrollIntoView({behavior: "smooth"})
  })

  button = document.querySelector('.btn-scale-3')
  button.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('ketrigger')
    button = document.querySelector('.btn-scale-10')
    button.scrollIntoView({behavior: "smooth"})
  })

  button = document.querySelector('.btn-scale-4')
  button.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('ketrigger')
    button = document.querySelector('.btn-scale-10')
    button.scrollIntoView({behavior: "smooth"})
  })

  button = document.querySelector('.btn-scale-5')
  button.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('ketrigger')
    button = document.querySelector('.btn-scale-10')
    button.scrollIntoView({behavior: "smooth"})
  })

  button = document.querySelector('.btn-scale-6')
  button.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('ketrigger')
    button = document.querySelector('.btn-scale-10')
    button.scrollIntoView({behavior: "smooth"})
  })

  button = document.querySelector('.btn-scale-7')
  button.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('ketrigger')
    button = document.querySelector('.btn-scale-10')
    button.scrollIntoView({behavior: "smooth"})
  })

  button = document.querySelector('.btn-scale-8')
  button.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('ketrigger')
    button = document.querySelector('.btn-scale-10')
    button.scrollIntoView({behavior: "smooth"})
  })

  button = document.querySelector('.btn-scale-9')
  button.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('ketrigger')
    button = document.querySelector('.btn-scale-10')
    button.scrollIntoView({behavior: "smooth"})
  })

  button = document.querySelector('.btn-scale-10')
  button.addEventListener('click', function(event) {
    event.preventDefault()
    console.log('ketrigger')
    button = document.querySelector('.btn-scale-10')
    button.scrollIntoView({behavior: "smooth"})
  })



document.getElementById('submit-1').onkeyup = function () 
{
document.getElementById('count').innerHTML = (300 - this.value.length) + "/300";
  };


const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}

submitButton = document.getElementById('submit')
submitButton.addEventListener('click', function(event) {
  event.preventDefault()
  console.log(consultScore)
  console.log(communicationScore)
  console.log(educationScore)
  console.log(recommendScore)
  if (consultScore && communicationScore && educationScore && recommendScore !== undefined) {
    location.replace('/thanks.html')
  } else  {
    alert('Silahkan isi semua form yang ada')
  }
}
)