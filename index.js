document.getElementById("button").addEventListener('click',()=>{
    let inputValue = document.getElementById('inputName').value 
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${inputValue}`)
    .then (response => response.json())
    .then(data => {
        const cardsContainer =document.getElementById("cardsContainer")
        cardsContainer.innerHTML=""
        if(data.meals == null ){

           document.getElementById("msg").style.display = "block"
        }
        else
            {
             document.getElementById("msg").style.display = "none"
            data.meals.forEach(meal =>{
              console.log(meal)
              itemDiv = document.createElement("div")
              itemDiv.className ="m-2 singleItem"
              itemDiv.setAttribute(`onclick`,`details('${meal.idMeal}')`)
              const itemInfo =`
               <div class="card" style="width: 14rem;">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                     <div class="card-body">
                <h5 class="card-text">${meal.strMeal}</h5>
               </div>
            </div>`  
               itemDiv.innerHTML = itemInfo
               cardsContainer.appendChild(itemDiv)

            })
        }
    })
})

