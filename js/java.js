
let counter = 0
let sayici = document.querySelector('#counter')
let arttirr = document.querySelector('#artir')
let azaltt = document.querySelector('#azalt')

sayici.innerHTML = counter

arttirr.addEventListener("click", clickEvent)
azaltt.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)
    // this.id == "artir" ?  ++counter : --counter
    // sayici.innerHTML = counter
    if(this.id == "artir"){
        ++counter
        sayici.innerHTML = counter
    }
    else if(this.id=="azalt"){
        --counter
        sayici.innerHTML = counter
    }
}