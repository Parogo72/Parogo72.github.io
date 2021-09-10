let current = 0;
function dropdown(a) { 
    if (a[0].parentNode.className.indexOf("showed") == -1) {
        current++;
        a[0].parentNode.className += " showed";
        a[0].parentNode.style.zIndex = current;
        a.shift()
        Array.from(a[0].children).forEach(i => i.classList.toggle("show"));   
    } else { 
        a[0].parentNode.className = a[0].parentNode.className.replace(" showed", "");
        a[0].parentNode.style.zIndex = current;
        a.shift()
        Array.from(a[0].children).forEach(i => i.classList.remove("show"));   
    }
}


function toggle(element) {
  if(element.className.includes("Raised")) {
    element.className += " Pressed";
    element.className = element.className.replace(" Raised", "")
  } else {
    element.className += " Raised";
    element.className = element.className.replace(" Pressed", "")
  }
  if(element.className.includes("DarkButton")) darkToggle();
  if(element.className.includes("ConfigButton")) settingsToggle();
}

function darkToggle() {
  let element = document.documentElement
  if(element.className.includes("Dark")) {
    element.className = element.className.replace(" Dark", "")
  } else {
    element.className += " Dark";
  }
}

function settingsToggle() {
  let element = document.getElementById("settings")
  let button = document.getElementById("settingsToggle")
  if(element.className.includes("Displayed")) {
    button.className = button.className.replace(" Pressed", " Raised")
    element.className = element.className.replace(" Displayed", "")
  } else {
    button.className = button.className.replace(" Raised", " Pressed")
    element.className += " Displayed";
  }
}

function radioToggle(e) {
  console.log(e.className)
  switch (e.className) {
    case 'mil':
      aprox = 3;
    break;
    case 'cent':
      aprox = 2;
    break;
    case 'dec':
      aprox = 1;
    break;
    case '10':
      exponent = false;
    break;
    case 'e': 
      exponent = true;
    break;
  }
  main()
}

function languageToggle(e) {
  let lang;
  let selector = document.getElementById("lang-selector")
  switch (e.className) {
    case 'Español':
      lang = "es";
    break;
    case 'English':
      lang = "en";
    break;
  }
  selector.innerHTML = e.className
  selector.className = selector.className.replace(" es", "").replace(" en", "") + ` ${lang}`
  langToggle(lang)
}

function langToggle(lang) {
  let lang_obj = languages[lang]
  let elements = document.getElementsByClassName('lang')
  let array_lang = Object.entries(lang_obj)
  Array.from(elements).forEach(e => {
      let val = array_lang.find(a=> {
        return e.className.includes(" " + a[0] + " ")
      })
      if(!val) return console.log(e, e.className)
      e.innerHTML = val[1]
  })
}
// Close the dropdown if the user clicks outside of it
/*window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown_input_value");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}*/