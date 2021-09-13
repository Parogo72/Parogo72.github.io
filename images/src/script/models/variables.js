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
        let name = " wrong2"
        let b = name
        if(element2.parentNode.className.includes(" wrong2")) name =" wrong";
        element ? element.parentNode.className = element.parentNode.className.replace(b, "").replace(" wrong", "") : null;
        element2.parentNode.className = element2.parentNode.className.replace(b, "").replace(" wrong", "")
        if(bool) {
            element ? element.parentNode.className += name : null;
            element2.parentNode.className += name
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
