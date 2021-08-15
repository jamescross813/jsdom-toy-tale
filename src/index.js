let addToy = false;


function fetchToys(){
  fetch("http://localhost:3000/toys")
  .then(resp => console.log(resp))
  }
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  // let toyBin = document.getElementById('toy-collection')
  
 

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
