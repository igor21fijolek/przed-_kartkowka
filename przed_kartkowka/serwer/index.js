const express = require('express')

const cors = require('cors')

const app = express()

app.use(cors())

app.get("/zad1/:text", (req,res)=>{
    let text = req.params.text
    let result = text.split(" ").reverse().join(" ")
    res.json(`odwrocone wyrazy to: ${result}`)
})

app.get("/zad2/:l1/:l2", (req,res)=>{
    let l1 = parseInt(req.params.l1)
    let l2 = parseInt(req.params.l2)
    let result = Math.floor(Math.random() * (l2-l1+1) + l1)
    res.json(`losowa liczba to: ${result}`)
})

app.get("/zad3/:liczba", (req,res)=>{
    let l = req.params.liczba 
    let result = []
    for(let i = 0; i<=l;i++){
        if(i%5==0){
            result.push(i)
        }
        if(i == 0){
            result.shift()
        }
    }
    res.json(`co piata liczba to: ${result}`)
})

app.get("/zad4/:zdanie", (req,res)=>{
    let zdanie  = req.params.zdanie
    let result = 0
    zdanie = zdanie.split(" ")
    for(let i = 0; i< zdanie.length; i++){
        if(zdanie[i] != ' '){
            result++
        }
    }
    res.json(`: ${result}`)
})

app.listen(4000, ()=>{
    console.log('działa');
})