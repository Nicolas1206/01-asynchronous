const buttonAdd = document.getElementById('add')
const buttonSave = document.getElementById('save')
const buttonRemove = document.getElementById('remove')
const select = document.querySelector('select')
const divCategory = document.getElementById('category')
const divRandom = document.getElementById('random')
/**local storage */
const data = JSON.parse(localStorage.getItem("divValue"))
if (data != null) {
	for (let i = 0; i < data.length; i++) {
		const div = document.createElement("div")
		div.textContent = data[i]
		divCategory.append(div)
	}
}
const joke = () => fetch('https://api.chucknorris.io/jokes/random');
const categorie = () => fetch('https://api.chucknorris.io/jokes/categories')

/**Mettre les catégories dans le select dynamiquement */
categorie().then((response) => response.json()).then((json) =>{
    for (let elem of json){
        const option = document.createElement('option')
        option.setAttribute('value', elem)
        option.innerText = elem
        select.append(option)
    }
    const option = document.createElement('option')
    option.setAttribute('value', null)
    option.textContent = 'none'
    option.setAttribute('selected', 'select')
    select.prepend(option)
})
/**Choix de blague selon la catégorie */
buttonAdd.onclick = () => {
    const value = select.value
    if (value=="null"){
    joke().then((response) => response.json()).then((json) =>{
        const div = document.createElement('div')
        div.innerText = json.value
        divRandom.append(div)
    }).catch((error) => {
        console.log("There was an error!", error);
      });
    }else {
    const categorie = (value) => fetch("https://api.chucknorris.io/jokes/random?category=" + value)
    categorie(value).then((response) => response.json()).then((json) =>{
        const div = document.createElement('div')
        div.innerText = json.value
        divRandom.append(div)
    }).catch((error) => {
        console.log("There was an error!", error);
      });
    }
}

save.onclick = () => {
	let data = []
	let divs = document.body.querySelectorAll("div")
	for (let div of divs) {
		let elem = div.textContent
		data.push(elem)
	}
	localStorage.setItem("divValue", JSON.stringify(data))
}

buttonRemove.onclick = () => {
	localStorage.removeItem("divValue")
	location.reload()
}