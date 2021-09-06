let values = {
  'm_s': 'number',
  'm_d': 'number',
  'm_D': 'number',
  'v_s': 'number',
  'v_d': 'number',
  'v_D': 'number',
  'd_s': 'number',
  'd_d': 'number',
  'd_D': 'number',
  'p_m': 'number',
  'p_v': 'number',
  'c': 'number',
  'molaridad': 'number',
  'molalidad': 'number',
  'm_mol_s': 'mol',
  'm_mol_d': 'mol',
  'm_mol_D': 'mol',
  'f_m': 'number',
  'n_s': 'number',
  'n_d': 'number',
  'n_D': 'number',
  'v_a': 'boolean'
}
let issue_arr = [];
let loop;
let check_loop = true; 
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
    for(let i of Object.entries(values)) {
      let bool = false;
      if(issue_arr.some(val => val === i[1].id) || i[1].value === null) bool = true 
      i[1].changeStyle(bool)
    }
    issue_arr = []
    if(check_loop == true) {
      loop = false;
      end()
    }
  }
}

async function end() {
  for(let i of Object.entries(values)) {
    let element = document.getElementsByName(i[0])[0];
    if(element) {
      element.innerHTML = Math.round(i[1].value* 1000) / 1000 || 'No value'
      element.style.display = 'inline'
    }
  }
}
const afcn = id => Array.from(document.getElementsByClassName(id));
const createEventListener = (enode, ename, callback) => enode.addEventListener ? enode.addEventListener(ename, callback) : enode.attachEvent(`on${ename}`, callback);
afcn('ipt').forEach(e => createEventListener(e, 'change', main));
main()