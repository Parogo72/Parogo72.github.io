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
        let name = "wrong2"
        if(element2.parentNode.classList.contains("wrong2")) name ="wrong";
        element ? element.classList.remove("wrong", "wrong2") : null;
        element2.parentNode.classList.remove("wrong", "wrong2");
        if(bool) {
            element ? element.parentNode.classList.add(name) : null;
            element2.parentNode.classList.add(name)
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
