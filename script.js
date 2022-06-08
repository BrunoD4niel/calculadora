
function soma() {

    var s1 = document.querySelector("#soma1")
    var s2 = document.querySelector("#soma2")
    var re = document.querySelector("#re")

    var n1 = Number(s1.value)
    var n2 = Number(s2.value)

    var valor = n1 + n2

    re.innerHTML = ` A soma entre ${n1} e ${n2} é igual a: ${valor}`

}

function subtrair() {

    var su1 = document.querySelector("#sub1")
    var su2 = document.querySelector("#sub2")
    var re2 = document.querySelector("#re2")

    var s1 = Number(sub1.value)
    var s2 = Number(sub2.value)

    var valor2 = s1 - s2

    re2.innerHTML = ` A subtração entre ${s1} e ${s2} é igual a: ${valor2}`

}

function multiplicar() {

    var mu1 = document.querySelector("#mult1")
    var mu2 = document.querySelector("#mult2")
    var re3 = document.querySelector("#re3")

    var m1 = Number(mu1.value)
    var m2 = Number(mu2.value)

    var valor3 = m1 * m2

    re3.innerHTML = ` A multiplicação entre ${m1} e ${m2} é: ${valor3}`
}

function divisao() {
    var div1 = document.querySelector("#di1")
    var div2 = document.querySelector("#di2")
    var re4 = document.querySelector("#re4")

    var d1 = Number(div1.value)
    var d2 = Number(div2.value)
    
    var valor4 = d1 / d2

    re4.innerHTML = ` A divisão entre ${d1} e ${d2} é: ${valor4}`
}