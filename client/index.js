const searchBx = document.querySelector('#searchBx')
const searchBtn = document.querySelector('#searchBtn')
const Search = document.querySelector('#searchForm')
const spellInfo = document.querySelector('#splInfo')
const spellDeet = document.querySelector('#splDetail')
const list = document.querySelector('#spellList')
const spellName = document.querySelector('#spellName')
const savedSpells = document.querySelector('#savedSpells')

const spellDesc = (spell)=>{
    spellDeet.innerText = `${spell.desc}`
    spellName.innerText = `${spell.name}`
    // spellName.addEventListener('click', savedSpell)
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

// const savedSpell = (event)=>{
//     const spell = document.createElement('p');
//     spell.innerText = event.target.innerText
//     savedList.appendChild(spell)
//     spell.addEventListener('click', spellCheck)
// }

const getList = ()=> axios.get('/api/savedspells')
.then(res => console.log(res))
.catch((err)=>{console.log(err)})

const savespell = ()=> axios.post('/api/savedspells',{
    name:`${spellName.innerText}`
})
    .then(savedSpells.innerHTML = null)
    .then(res=> res.data.forEach(spell=>{
        const p = document.createElement('p');
        p.innerText = spell
        savedSpells.appendChild(p)
        p.addEventListener('click',spellCheck)
    }))
    .catch((err)=>{console.log(err)})
    
    
spellName.addEventListener('click',savespell)
Search.addEventListener('submit',spellSearch)