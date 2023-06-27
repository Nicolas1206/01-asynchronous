const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.onclick = () => {
    fetch("becode.json").then((response) => response.json()).then((json) =>{
        for (let i=0; i<json.length; i++){
            const li = document.createElement('li')
            li.innerText = json[i]
            ul.append(li)
        }
    }).catch((error) => {
        console.log("There was an error!", error);
      });
}