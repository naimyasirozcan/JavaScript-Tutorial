// convert

let number = 456
let stringNumnber = String(456) 
let isNumber = String(true)

console.log(typeof(number),
typeof(stringNumnber),
typeof(isNumber))

// template literal and string features usage

let firstName = `naim`
let midName = `yasir`
let surName = `ozcan`

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)} ${midName[0].toUpperCase()}${midName.slice(1)} ${surName[0].toUpperCase()}${surName.slice(1)}
`
console.log(fullName)

// add & subtract
firstName.split('a')
console.log(firstName.concat(' ',surName ))

// search methods
let prg = "Hi guys! I'm looking for some friends that talk with me in English for improve my language skills."

prg.search('hi') //regular expressions
prg.indexOf('g') //index number turns
prg.lastIndexOf('s') //elemets last seen index number turns 
console.log(prg.slice(0,10)) // sifir dahil 10'a kadar alir
console.log(prg.slice(15)) //15 dahil 15'ten itibaren komple alir

// document object model 
let title = document.querySelector("#title")
title.style.color = "red"
// let link = document.querySelector("ul#list>li#list>a")
// link.innerHTML += " changed!"
// link.style.color = "aqua"


let enterName = prompt('write your beautiful name babe')
let greeting = document.querySelector("#wellcome")

greeting.innerHTML = `${greeting.innerHTML.slice(0, (greeting.innerHTML.length)-1)}, <small style="color: aqua;"> ${enterName[0].toUpperCase()}${enterName.slice(1)} </small> !`

// reach to last element
let lastChild = document.querySelector("ul#list>li:last-child")
console.log(lastChild)

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = 'first li element has changed'

// add new element to list 
const ulDOM = document.querySelector('ul#list')
const liDOM = document.createElement('li')

liDOM.innerHTML = 'new element added - created by us'

ulDOM.append(liDOM)

