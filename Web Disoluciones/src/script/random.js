function dropdown(a) { 
    if (a[0].className.indexOf("show") == -1) {
        a[0].className += " show";
        a[0].parentNode.style.backgroundColor = "#959595"
        a[0].parentNode.style.zIndex = "1";
        a.shift()
        a.forEach(i => i.classList.toggle("show"));   
    } else { 
        a[0].className = a[0].className.replace(" show", "");
        a[0].parentNode.style.backgroundColor = ""
        a.shift()
        a.forEach(i => i.classList.remove("show"));   
    }
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