// PARTIE UNE AJOUT DE CONTENU

//1
let exo1 = document.querySelector('h1')
exo1.innerText = 'Les attributs class et id'

//2
let exo2 = document.querySelector('h2')
exo2.innerText = "Exercice 2 partie A"

//3
let exo3 = document.querySelectorAll('h2')[1]
exo3.innerText = 'Exercice 2 partie B'

//4
let exo4 = document.querySelector('p')
exo4.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>"

//5 
let exo5 = document.querySelectorAll('p')[1].innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide"


//2 PARTIE DEUX 
//6
exo1.setAttribute('id', 'bigTitle')

//7
let myDiv = document.querySelector('div')
// myDiv.setAttribute('class', "container")
myDiv.classList.add('container')

//8
let allh2 = document.querySelectorAll('h2')
let arrayAllh2 = Array.from(allh2)

arrayAllh2.forEach(el => {
    el.classList.add('title')
    // el.setAttribute('class', 'title')
});

//9
let allP = Array.from(document.querySelectorAll('p'))

allP.forEach(el => {
    el.classList.add('text')
});


//3 PARTIE TROIS

//10
let section = document.querySelectorAll('section')
section[0].setAttribute('class', 'margin-bottom border-black padding')

//11
section[1].setAttribute('class', 'margin-top border-black padding')

//12 
let div12 = section[1].querySelector('div')

// div12.style.height = "20px"
// div12.style.width = "20px"
// div12.style.backgroundColor = 'blue'
// div12.style.border = '1px solid black'

div12.style.cssText="width:20px; height:20px; background-color:blue; border:25px dashed grey;";