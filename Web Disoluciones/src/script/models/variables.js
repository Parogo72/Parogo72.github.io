class Variable {
    constructor(id, type) {
      this.id = id,
      this.type = type,
      this.value = this.calcValue()
    } 
    // Método
    changeStyle(bool) {
        let element = document.getElementsByName(this.id)[0]
        let element2 = document.getElementById(this.id)
        if(bool) {
            element ? element.style.background = 'rgba(255, 0, 0, 1)' : null
            element2.parentElement.style.background = 'rgba(255, 0, 0, 1)';
        } else {
            element ? element.style.background = 'rgba(73, 189, 255, 1)' : null
            element2.parentElement.style.background = 'rgba(73, 189, 255, 1)';
        }
    }
    calcValue() {
        if(this.type === 'number') {
            return parseFloat(document.getElementById(this.id).value);
        }
        if(this.type === 'mol') {
            return mole_obtainer(mole_arr(document.getElementById(this.id).value), this.id)
        }
        if(this.type === 'boolean') {
            return document.getElementById(this.id).checked;
        }
    }
}
