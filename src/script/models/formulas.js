
class Formula {
    constructor(display, formulas, needed) {
      this.display = display,
      this.formulas = formulas
      this.needed = needed
    } 
    // Método
    calcValue() {
      if(this.needed) {
        if(this.needed.some(i => !values[i].value)) return false;
      }
      for(const i of this.formulas) {
        let formula_arr = i.split('=');
        let id = formula_arr[0];
        let ans = math.evaluate(replace_var(formula_arr[1]))
        if(check_var(id, ans, i)) {  
          if(!isNaN(ans) && ans !== Infinity) {
            values[id].value = ans
            check_loop = false;
          }
        }
      }
      return 
    }
}

let masa_f = new Formula([], ['m_s=m_D-m_d', 'm_d=m_D-m_s', 'm_D=m_s+m_d'])
let volumen_f = new Formula([], ['v_s=v_D-v_d', 'v_d=v_D-v_s', 'v_D=v_s+v_d'], ['v_a'])
let densidad_s_f = new Formula([], ['d_s=m_s/v_s', 'm_s=d_s*v_s', 'v_s=m_s/d_s'])
let densidad_d_f = new Formula([], ['d_d=m_d/v_d', 'm_d=d_d*v_d', 'v_d=m_d/d_d'])
let densidad_D_f = new Formula([], ['d_D=m_D/v_D', 'm_D=d_D*v_D', 'v_D=m_D/d_D'])
let concentracion_f = new Formula([], ['c=m_s/v_D', 'm_s=c*v_D', 'v_D=m_s/c'])
let molaridad_f = new Formula([], ['molaridad=n_s/v_D', 'n_s=molaridad*v_D', 'v_D=n_s/molaridad'])
let molalidad_f = new Formula([], ['molalidad=n_s/m_d', 'n_s=molalidad*m_d', 'm_d=n_s/molalidad'])
let frac_molar_f = new Formula([], ['f_m=n_s/(n_s+n_d)'])
let masa_molar_s_f = new Formula([], ['m_mol_s=m_s*1000/n_s', 'm_s=m_mol_s/1000*n_s', 'n_s=m_s/m_mol_s*1000'])
let masa_molar_d_f = new Formula([], ['m_mol_d=m_d*1000/n_d', 'm_d=m_mol_d/1000*n_d', 'n_d=m_d/m_mol_d*1000'])
let masa_molar_D_f = new Formula([], ['m_mol_D=m_D/n_D', 'm_D=m_mol_D/1000*n_D', 'n_D=m_D/m_mol_D*1000'])
let porcentaje_masa_f = new Formula([], ['p_m=m_s*100/m_D', 'm_s=(p_m*m_D)/100', 'm_D=m_s*100/p_m'])
let porcentaje_volumen_f = new Formula([], ['p_v=v_s*100/v_D', 'v_s=(p_v*v_D)/100', 'v_D=v_s*100/p_v'])
