let addToy = false;
let toyBin = document.getElementById('toy-collection')

function fetchToys(){
  fetch("http://localhost:3000/toys")
  .then(resp => resp.json())
  .then(data => toyCard(data))
  }
 
function toyCard(data){ 
    const card = document.createElement('div');
    document.body.appendChild(card);
    card.elementId = 'toy-card';
    
    for(const element of data){ 
      let toyName = document.createElement('h2');
      toyName.innerHTML = element.name;
      let toyImage = document.createElement('img');
      toyImage.className = 'toy-avatar';
      toyImage.src = element.image;
      let toyLikes = document.createElement('p');
      toyLikes.innerHTML = element.likes;
      let btn = document.createElement('button');
      btn.innerHTML = 'Like';
      btn.className = 'like-btn';
      card.append(toyName,toyImage, toyLikes, btn)
    }
}

 async function addMoreToys(){
  let submit = document.getElementsByClassName('submit')

  submit[0].addEventListener('click', ()=>{
    let values = document.getElementsByClassName("input-text");
  

  let formData = {
    name: values[0].value,
    image: values[1].value,
    likes: 0
  }
   let configObj = {
     method: "POST",
     headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"
    }, 
    body: JSON.stringify(formData)
  };

   fetch("http://localhost:3000/toys", configObj)
   .then(resp => resp.json())
   .then(data => fetchToys(data))
 })}

 function newLikes(e){
  console.log(e)
  // let likeBtn = document.getElementByIdbyId(e.target.id);
 
  // for(const element of likeBtn){
  //   element.addEventListener('click',()=>{
  //     e.preventDefault();
  //    console.log('clicked')
      // }
    //  let currentLikes= parseInt(element.previousElementSibling)
    // let newLikes = currentLikes + 1;
    //   console.log(newLikes)
  //   })
  // }
 }

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  
  fetchToys()
  
  addMoreToys()
  
  newLikes()

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
