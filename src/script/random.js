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

const matcher = window.matchMedia('(prefers-color-scheme:dark)');

matcher.addEventListener('change', toggleIcon);

function toggleIcon() {
  const lightSchemeIcon = document.querySelector('link#light-icon');
  const darkSchemeIcon = document.querySelector('link#dark-icon');
  if(matcher.matches) {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  } else {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon.remove();
  }
}

function darkToggle() {
  let element = document.documentElement
  let button = document.getElementsByClassName("DarkButton")[0]
  let logo = document.getElementById("logo");
  c.theme.value = element.className.includes("Dark") ? "white" : "black"
  if(element.className.includes("Dark")) {
    button.className += " Raised";
    button.className = button.className.replace(" Pressed", "")
    element.className = element.className.replace(" Dark", "")
    logo.src = "https://parogo72.github.io/images/logo.png"
  } else {
    element.className += " Dark";
    button.className += " Pressed";
    button.className = button.className.replace(" Raised", "")
    logo.src = "https://parogo72.github.io/images/logo-dark.png"
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
  
  let element = e.className ? e : document.getElementsByClassName(e)[0]
  element.dispatchEvent(new Event('click'));
  element.checked = true;
  switch (e.className ? e.className : e) {
    case 'mil':
      aprox = 3;
      c.round.value = e.className ? e.className : e
    break;
    case 'cent':
      aprox = 2;
      c.round.value = e.className ? e.className : e
    break;
    case 'dec':
      aprox = 1;
      c.round.value = e.className ? e.className : e
    break;
    case '10':
      exponent = false;
      c.notation.value = e.className ? e.className : e
    break;
    case 'e': 
      exponent = true;
      c.notation.value = e.className ? e.className : e
    break;
  }
  main()
}

function languageToggle(e) {
  let lang;
  let selector = document.getElementById("lang-selector")
  switch (e.className ? e.className : e) {
    case 'Español':
      lang = "es";
    break;
    case 'English':
      lang = "en";
    break;
    case 'Català':
      lang = "ca";
    break;
  }
  selector.innerHTML = e.className ? e.className : e
  selector.className = selector.className.replace(" es", "").replace(" en", "").replace(" ca", "") + ` ${lang}`
  c.lang.value = e.className ? e.className : e
  document.documentElement.lang = lang
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
      if(!val) return;
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