// const express = require('express')
// const path = require('path')
// const app = express()


const searchBx = document.querySelector('#searchBx')
const searchBtn = document.querySelector('#searchBtn')
const Search = document.querySelector('#searchForm')
const spellInfo = document.querySelector('#splInfo')
const spellDeet = document.querySelector('#splDetail')
const list = document.querySelector('#spellList')
const spellName = document.querySelector('#spellName')

const spellDesc = (spell)=>{
    spellDeet.innerText = `${spell.desc}`
    spellName.innerText = `${spell.name}`
    }
const spellCheck = (event) => {
fetch(`https://www.dnd5eapi.co/api/spells/${event.target.innerText.toLowerCase().replace(/ /g,'-').replace('/','-').replace(`'`, '')}`)
.then(response => response.json())
.then(data => spellDesc(data))
}

const spellSearch = ()=>{
event.preventDefault();
if (searchBx.value != ''){
fetch(`https://www.dnd5eapi.co/api/spells/${searchBx.value.toLowerCase().replace(/ /g,'-').replace('/','-').replace(`'`, '')}`)
.then(response => response.json())
.then(data => spellDesc(data))}
else {alert(`Please Enter A Spell Name`)}
}

const showSpells = (spells)=>{
spells.forEach(spell => {
const spellName = document.createElement('p');
spellName.innerText = `${spell.name}`;
list.appendChild(spellName)
spellName.addEventListener('click', spellCheck)
})
}

const getSpells = ()=>{
    fetch('https://www.dnd5eapi.co/api/spells/')
    .then(response => response.json())
    .then(data => showSpells(data.results))}
getSpells()

Search.addEventListener('submit',spellSearch)



