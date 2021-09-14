let current = 0;
function dropdown(a) { 
    if (a[0].parentNode.className.indexOf("showed") == -1) {
        current++;
        a[0].parentNode.classList.add("showed");
        a[0].parentNode.style.zIndex = current;
        a.shift()
        Array.from(a[0].children).forEach(i => i.classList.toggle("show"));   
    } else { 
        a[0].parentNode.classList.remove("showed");
        a[0].parentNode.style.zIndex = current;
        a.shift()
        Array.from(a[0].children).forEach(i => i.classList.remove("show"));   
    }
}


function toggle(element) {
  if(element.classList.contains("Raised")) {
    element.classList.add("Pressed");
    element.classList.remove("Raised");
  } else {
    element.classList.add("Raised");
    element.classList.remove("Pressed");
  }
  if(element.classList.contains("DarkButton")) darkToggle();
  if(element.classList.contains("ConfigButton")) settingsToggle();
}

function darkToggle() {
  let element = document.documentElement
  let button = document.getElementsByClassName("DarkButton")[0]
  let logo = document.getElementById("logo");
  c.theme.value = element.classList.contains("Dark") ? "white" : "black"
  if(element.classList.contains("Dark")) {
    button.classList.add("Raised");
    button.classList.remove("Pressed")
    element.classList.remove("Dark")
    logo.src = "/images/logo.png"
  } else {
    element.classList.add("Dark");
    button.classList.add("Pressed");
    button.classList.remove("Raised")
    logo.src = "/images/logo-dark.png"
  }
  
}

function settingsToggle() {
  let element = document.getElementById("settings")
  let button = document.getElementById("settingsToggle")
  if(element.classList.contains("Displayed")) {
    button.classList.replace("Pressed", "Raised")
    element.classList.remove("Displayed")
  } else {
    button.classList.replace("Raised", "Pressed")
    element.classList.add("Displayed")
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
  if(!lang || document.documentElement.lang === lang) return;
  window.location.href = window.location.protocol + '//' + window.location.host + "/" + lang
  c.lang.value = e.className ? e.className : e
}