 async function zad1() {
    let text = document.getElementById("zad1").value
    const data = await fetch(`http://localhost:4000/zad1/${text}`)
    let wynik = await data.json()
    document.getElementById("wynik1").innerHTML = wynik
 }

 async function zad2() {
    let l1 = parseInt(document.getElementById("l1").value)
    let l2 = parseInt(document.getElementById("l2").value)
    const data  = await fetch(`http://localhost:4000/zad2/${l1}/${l2}`)
    let wynik = await data.json()
    document.getElementById("wynik2").innerHTML = wynik
 }

 async function zad3() {
    let liczba = document.getElementById("zad3").value
    const data = await fetch(`http://localhost:4000/zad3/${liczba}`)
    let wynik = await data.json()
    document.getElementById("wynik3").innerHTML = wynik
 }

 async function zad4() {
    let zdanie = document.getElementById("zad4").value
    const data = await fetch(`http://localhost:4000/zad4/${zdanie}`)
    let wynik = await data.json()
    document.getElementById("wynik4").innerHTML = wynik
    
 }