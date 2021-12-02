let replace_var = (s) => {
    let x = s.replace(/m_s/g, values.m_s.value)
    .replace(/m_d/g, values.m_d.value)
    .replace(/m_D/g, values.m_D.value)
    .replace(/v_s/g, values.v_s.value)
    .replace(/v_d/g, values.v_d.value)
    .replace(/v_D/g, values.v_D.value)
    .replace(/d_s/g, values.d_s.value)
    .replace(/d_d/g, values.d_d.value)
    .replace(/d_D/g, values.d_D.value)
    .replace(/p_m/g, values.p_m.value)
    .replace(/p_v/g, values.p_v.value)
    .replace(/c/g, values.c.value)
    .replace(/molaridad/g, values.molaridad.value)
    .replace(/molalidad/g, values.molalidad.value)
    .replace(/m_mol_s/g, values.m_mol_s.value)
    .replace(/m_mol_d/g, values.m_mol_d.value)
    .replace(/m_mol_D/g, values.m_mol_D.value)
    .replace(/f_m/g, values.f_m.value)
    .replace(/n_s/g, values.n_s.value)
    .replace(/n_d/g, values.n_d.value)
    .replace(/n_D/g, values.n_D.value)
    if(x.includes('null')) return NaN
    return x;
}

const check_var = (id, ans, i) => {
    let obj = values[id];
    let val = obj.calcValue()
    if(!isNaN(val) && (Math.abs(val - ans) >  10**(-aprox) || ans < 0 || val < 0) && val !== null) {
        console.log(i, ans, val)
        issue_arr.push(id)
    } 
    return !values[id].value && values[id].value !== 0;
}

const change_style = (id, bool) => {
    let element = document.getElementsByName(id)[0]
    let element2 = document.getElementById(id)
    let name = "wrong2"
    if(element2.parentNode.classList.contains("wrong2")) name ="wrong";
        element ? element.classList.remove("wrong", "wrong2") : null;
        element2.parentNode.classList.remove("wrong", "wrong2");
    if(bool) {
        element ? element.parentNode.classList.add(name) : null;
        element2.parentNode.classList.add(name)
    } 
}

let table = {
    'H': 1,
    'He': 4,
    'Li': 6.94,
    'Be': 9.01,
    'B': 10.81,
    'C': 12.01,
    'N': 14,
    'O': 16,
    'F': 19,
    'Ne': 20.18,
    'Na': 22.99,
    'Mg': 24.3,
    'Al': 26.98,
    'Si': 18.09,
    'P': 30.97,
    'S': 32.07,
    'Cl': 35.45,
    'K': 39.1,
    'Ar': 39.99,
    'Ca': 40.08,
    'Sc': 44.96,
    'Ti': 47.87,
    'V': 50.94,
    'Cr': 52,
    'Mn': 54.94,
    'Fe': 55.85,
    'Ni': 58.7,
    'Co': 58.93,
    'Cu': 63.55,
    'Zn': 65.39,
    'Ga': 69.72,
    'Ge': 72.64,
    'As': 74.92,
    'Se': 78.96,
    'Br': 79.9,
    'Kr': 83.8,
    'Rb': 85.47,
    'Sr': 87.62,
    'Y': 88.91,
    'Zr': 91.22,
    'Nb': 92.91,
    'Mo': 95.94,
    'Tc': 98,
    'Ru': 101.07,
    'Rh': 102.91,
    'Pd': 106.42,
    'Ag': 107.87,
    'Cd': 112.41,
    'In': 114.82,
    'Sn': 118.71,
    'Sb': 121.76,
    'I': 126.9,
    'Te': 127.6,
    'Xe': 131.29,
    'Cs': 132.91,
    'Ba': 137.33,
    'La': 138.91,
    'Ce': 140.12,
    'Pr': 140.91,
    'Nd': 144.24,
    'Pm': 145,
    'Sm': 150.36,
    'Eu': 151.96,
    'Gd': 157.25,
    'Tb': 158.93,
    'Dy': 162.5,
    'Ho': 164.93,
    'Er': 167.26,
    'Tm': 168.93,
    'Yb': 173.04,
    'Lu': 174.97,
    'Hf': 178.49,
    'Ta': 180.95,
    'W': 183.84,
    'Re': 186.21,
    'Os': 190.23,
    'Ir': 192.22,
    'Pt': 195.08,
    'Au': 196.97,
    'Hg': 200.69,
    'Tl': 204.38,
    'Pb': 207.2,
    'Bi': 208.98,
    'Po': 209,
    'At': 210,
    'Rn': 222,
    'Fr': 223,
    'Ra': 226,
    'Ac': 227,
    'Pa': 231.04,
    'Th': 232.04,
    'Np': 237,
    'U': 238.03,
    'Am': 243,
    'Pu': 244,
    'Cm': 247,
    'Bk': 247,
    'Cf': 251,
    'Es': 252,
    'Fm': 257,
    'Md': 258,
    'No': 259,
    'Rf': 261,
    'Lr': 262,
    'Db': 262,
    'Bh': 264,
    'Sg': 266,
    'Mt': 268,
    'Rg': 272,
    'Hs': 277
}

 const mole_arr = (string) => { 
     let arr = [] 
     if(parseFloat(string)) return string 
     for( i=0 ; i<string.length ; i++ ) { 
         if(/[A-Z]/.test(string[i])) { 
             /[a-z]/.test(string[i+1]) && string[i+1] ? arr.push(string[i] + string[i+1]) : arr.push(string[i]) 
         } else if(Number(string[i])){ 
	     let num = '';
             for( k=0; !isNaN(Number(string[i+k])); k++) {
		num += string[i+k];
             } 
             arr.push(Number(num)) 
         } else if(string[i] === '(') { 
             let fn = mole_loop(string, i+1) 
             arr.push(fn[0]) 
             i = fn[1] 
             if(fn[2]) { 
                 arr.push(fn[2]) 
             } 
         } 
     } 
 return arr 
 } 
 const mole_loop = (string, i) => { 
     let arr2 = [] 
     let count = 0; 
     for(j=i; string[j] !== ')'; j++) { 
         if(/[A-Z]/.test(string[j])) { 
             /[a-z]/.test(string[j+1]) ? arr2.push(string[j] + string[j+1]) : arr2.push(string[j]) 
         } else if(Number(string[j])){ 
             let num = '';
             for( k=0; !isNaN(Number(string[j+k])); k++) {
		num += string[j+k];
             } 
             arr2.push(Number(num)) 
         } else if(string[j] == '(') { 
             let fn = mole_loop(string, j+1) 
             arr2.push(fn[0]) 
             j = fn[1] 
             if(fn[2]) { 
                 arr2.push(fn[2]) 
             } 
        } 
     count = j 
     } 
     if(Number(string[count+2])) { 
         return [arr2, count + 2, string[count+2]] 
     } 
     return [arr2, count] 
 }

const mole_obtainer = (array, id) => {
    let values = 0;
    if(parseFloat(array)) return array
    for( i=0 ; i<=array.length ; i++ ) {
        if(Array.isArray(array[i])) {
            let val = arr_loop(array[i])
            if(Number(array[i+1])) {
                values += val*array[i+1]
            }
        } else {
            let num = table[array[i]];
            if(num && Number(array[i+1])) {
                values += num * array[i+1];
            } else if(num){
                values += num
            } else {
                return values || null
            }
        }   
    }
    change_style(id, false)
   
    return values
}
const arr_loop = (array) => {
    let values = 0;
    for(j=0; j<array.length; j++) {
        if(Array.isArray(array[j])) {
            let val = arr_loop(array[j])
            if(Number(array[j+1])) {
                values += val*array[j+1]
            }
        } else {
            let num = table[array[j]];
            if(num && Number(array[j+1])) {
                values += num * array[j+1];
            } else if(num){
                values += num
            }
        }   
    }
    return values
}

function copy(e) {
    const copyText = e;

    copyText.select();
  
    document.execCommand("copy");

    alert("Texto copiado");
  }

function numberChangeEnd(element, value) {
    if(value > 1000) exponent ? value = Number(value).toExponential(aprox) :  value = Number(value).toExponential(aprox).replace(/e\+?/, 'x10^')
    element.innerHTML = value || value === 0 ? value : '---'
}


function move() {
    let element = document.getElementById('response-container')
    let position = element.getBoundingClientRect();
    let e = document.getElementById('button-div') ;
    if(position.top <= window.innerHeight && position.bottom >= 0) {
        if(document.getElementById("not-bubble").classList.contains("visible")) document.getElementById("not-bubble").classList.toggle("visible");
	    if(document.getElementById("button-div").childNodes[3].childNodes[1].classList.contains('down')) {
e.childNodes[3].childNodes[1].classList.remove('down')  
	 e.childNodes[3].childNodes[1].classList.add('up')
	    e.childNodes[3].href = "#top"
} 
    } else {
	    if(document.getElementById("button-div").childNodes[3].childNodes[1].classList.contains('up')) {
e.childNodes[3].childNodes[1].classList.remove('up')  
	 e.childNodes[3].childNodes[1].classList.add('down') 
		e.childNodes[3].href = "#response-container"

} 
    } 
} 
window.addEventListener('scroll', move())
