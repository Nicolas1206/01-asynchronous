const button = document.querySelector('button');
const joke = () => fetch('https://api.chucknorris.io/jokes/random');


const categorie = () => fetch('https://api.chucknorris.io/jokes/categories')
categorie().then((response) => response.json()).then((json) =>{
    for (let elem of json){
        console.table(json)
    }
})

button.onclick = () => {
    joke().then((response) => response.json()).then((json) =>{
        const div = document.createElement('div')
        div.innerText = json.value
        document.body.append(div)
    }).catch((error) => {
        console.log("There was an error!", error);
      });
}