
const buttons = document.querySelector(".buttons")
const res = document.getElementById("Result")

const buttons2 = document.querySelector(".buttons2")
const res2 = document.getElementById("Result2")

buttons.addEventListener("click", (e) => {
    console.log(typeof res.innerHTML);
    if (e.target.className == "math") {
        if (e.target.innerHTML != res.innerHTML[res.innerHTML.length - 1]) {
            res.innerHTML += e.target.innerHTML
        }
    }
    if (e.target.className == "button") {
        if (e.target.innerHTML == "del") {
            res.innerHTML = res.innerHTML.slice(0, -1)
        }
        if (e.target.innerHTML == "=") {
            res.innerHTML = eval(res.innerHTML)
        }
        if (e.target.innerHTML == "C") {
            res.innerHTML = 0
        }
    }
    if (e.target.className == "number") {
        if (e.target.innerHTML == '.') {
            res.innerHTML += e.target.innerHTML
        } else {
            if (res.innerHTML == '0') {
                res.innerHTML = e.target.innerHTML
            } else {
                res.innerHTML += e.target.innerHTML
            }
        }
    }
})
let number1 = ''
let number2 = ''
buttons2.addEventListener("click", (e) => {
    kek = false
    if (res2.innerHTML.includes('+') == true || res2.innerHTML.includes('-') == true || res2.innerHTML.includes('/') == true || res2.innerHTML.includes('*') == true || res2.innerHTML.includes('√') == true) {
        kek = true
    }
    if (e.target.className == "math2") {
        if (kek == false) {
            res2.innerHTML += e.target.innerHTML
        } else {
            res2.innerHTML = eval(res2.innerHTML) + e.target.innerHTML
            number2 = ''
        }
    }
    if (e.target.className == "number2") {
        if (Number(res2.innerHTML == 0)) {
            res2.innerHTML = ''
            res2.innerHTML += e.target.innerHTML
            number1 += e.target.innerHTML
        } else {
            if (kek == false) {
                res2.innerHTML += e.target.innerHTML
                number1 += e.target.innerHTML
            } else {
                res2.innerHTML += e.target.innerHTML
                number2 += e.target.innerHTML
            }
        }
    }
    if (e.target.className == "button2") {
        if (e.target.innerHTML == 'C') {
            res2.innerHTML = "0"
            number1 = ''
            number2 = ''
        }
        if (e.target.innerHTML == "=") {
            if (res2.innerHTML[res2.innerHTML.length-1] == '+'||res2.innerHTML[res2.innerHTML.length-1] == '-'||res2.innerHTML[res2.innerHTML.length-1] == '*'||res2.innerHTML[res2.innerHTML.length-1] == '/') {
                number2 = res2.innerHTML.slice(0,res2.innerHTML.length-1)
                res2.innerHTML += number2
                console.log(res2.innerHTML);
                res2.innerHTML = eval(res2.innerHTML)
                number1 = res2.innerHTML
                number2 = ''
            }else{
                res2.innerHTML = eval(res2.innerHTML)
            }
        }
        if (e.target.innerHTML=='del') {
            res2.innerHTML = res2.innerHTML.slice(0,res2.innerHTML.length-1)
        }
        if (e.target.innerHTML == '√') {
            console.log(Math.sqrt(Number(res2.innerHTML)));
            number1 = Math.sqrt(Number(res2.innerHTML))
            res2.innerHTML = number1
        }
    }
})
// res2.innerHTML=eval(number1+i+number1)