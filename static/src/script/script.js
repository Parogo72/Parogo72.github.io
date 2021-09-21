 
const get = id => parseFloat(document.getElementById(id).value);

async function main() {
  loop = true;
  for(let i of Object.entries(values)) {
    let id = i[0];
    let type = i[1].type || i[1];
    values[i[0]] = new Variable(id, type)
  }
  while(loop) {
    check_loop = true;
    masa_f.calcValue();
    volumen_f.calcValue();
    densidad_s_f.calcValue();
    densidad_d_f.calcValue();
    densidad_D_f.calcValue();
    concentracion_f.calcValue();
    molaridad_f.calcValue();
    molalidad_f.calcValue();
    frac_molar_f.calcValue();
    masa_molar_s_f.calcValue();
    masa_molar_d_f.calcValue();
    masa_molar_D_f.calcValue();
    porcentaje_masa_f.calcValue();
    porcentaje_volumen_f.calcValue();
    porcentaje_masa_f.calcValue();
    if(check_loop == true) {
      for(let i of Object.entries(values)) {
        let bool = false;
        if(issue_arr.some(val => val === i[1].id)) bool = true 
        i[1].changeStyle(bool)
      }
      issue_arr = []
      loop = false;
      end()
    }
  }
}
let previous = [];
let x = 0;
function end() {
  x = 0;
  let data = dataEncoder(Object.keys(values))
  let params = new URL(window.location.href).searchParams
  params.set("data", data)
  console.log(data)
  if(data) history.pushState(null, null, "?" + params.toString());
  for(let i of Object.entries(values)) {
    
    let element = document.getElementsByName(i[0])[0];
    let input_element = document.getElementById(i[0]);
    
    if(!element) return;
    
    let had_value = false;
    if(element.parentNode.classList.contains("has_value") && (previous[x] || previous[x] === 0) && previous[x] !== i[1].value) had_value = true;
    element.parentNode.classList.remove("calculated", "had_value", "has_value")
    previous[x] = i[1].value
    if(!i[1].value && i[1].value !== 0) {
      element.parentNode.style.display = 'none';
    }else {
      let value = parseFloat(Number(i[1].value).toFixed(aprox))
      numberChangeEnd(element, value)
      element.parentNode.style.display = 'flex'
    }
    if(input_element.value) {
      had_value ? element.parentNode.classList.add("had_value") : element.parentNode.classList.add("has_value");
    } else {
      element.parentNode.classList.add("calculated");
    }
    i[1].lastValue = i[1].value
    x++
  }
  
}
const afcn = id => Array.from(document.getElementsByClassName(id));
const createEventListener = (enode, ename, callback) => enode.addEventListener ? enode.addEventListener(ename, callback) : enode.attachEvent(`on${ename}`, callback);
afcn('ipt').forEach(e => createEventListener(e, 'change', main));
main()

if(c.theme.value === "black") darkToggle();
if(!/\/ca|\/en|\/es/.test(window.location.href)) languageToggle(c.lang.value);
radioToggle(c.round.value)
radioToggle(c.notation.value)

function dataEncoder (keys) {
  let keys_end = keys.filter(i => document.getElementById(i) && document.getElementById(i).value && document.getElementById(i).checked !== false);
  let values_end = keys_end.map(i => document.getElementById(i).checked || document.getElementById(i).value);
  console.log(keys_end)
  if(keys_end.length === 0) return;
  const str = `${keys_end.map(i => i + '1').join('&')}$${values_end.join('&')}`;
  const base64 = window.btoa(str)
  if(base64.endsWith('=')) return base64.slice(0, -1)
  console.log(base64)
  return base64
}