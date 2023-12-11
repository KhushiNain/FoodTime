// to get a randome dish everytime page load
function getRandomeDish(){
    let api = "https://www.themealdb.com/api/json/v1/1/random.php";
fetch(api).then((res)=>
    res.json()
    ).then((imageinfo)=>{
        // console.log(imageinfo)
    let imagesrc = imageinfo.meals[0].strMealThumb;
    let dishname = imageinfo.meals[0].strMeal;
    document.getElementById("randomedish").src=imagesrc;
    document.getElementById("minimeal").src=imagesrc;
    document.getElementById("dishname").innerText=dishname;
    


    // storing ingredientList
    let list=document.getElementById("list");
    listitem=""
    ingredientList=[imageinfo.meals[0].strIngredient1,imageinfo.meals[0].strIngredient2,imageinfo.meals[0].strIngredient3,imageinfo.meals[0].strIngredient4,imageinfo.meals[0].strIngredient5,imageinfo.meals[0].strIngredient6]
    for(let i=0;i<6;i++){
        listitem += `<li> ${ingredientList[i]} </li>`;
    }
    list.innerHTML= listitem    
    }).catch((err)=>{ 
    console.log(err.message)})
}
getRandomeDish()


// button to change the random dish
function newDish(){
    getRandomeDish()
}


// to displaye searched dished in the third section
function searchResult(){
    let c= document.getElementById("search-value").value;
    console.log(c)
    let api=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${c}`

    fetch(api).then((res)=>
    res.json()
    ).then((seacrhedDish)=>{
    console.log(seacrhedDish);
    let section=document.getElementById("none");
    section.style.display="block"
    document.getElementById("csearched").innerText=c;
    document.getElementById("cimg1").src= seacrhedDish.meals[0].strMealThumb;
    document.getElementById("cimg2").src= seacrhedDish.meals[1].strMealThumb;
    document.getElementById("cimg3").src= seacrhedDish.meals[2].strMealThumb;
    document.getElementById("cimg4").src= seacrhedDish.meals[3].strMealThumb;
    document.getElementById("ctitle1").innerText= seacrhedDish.meals[0].strMeal;
    document.getElementById("ctitle2").innerText= seacrhedDish.meals[1].strMeal;
    document.getElementById("ctitle3").innerText= seacrhedDish.meals[2].strMeal;
    document.getElementById("ctitle4").innerText= seacrhedDish.meals[3].strMeal;
    }).catch((err)=>{ 
    console.log(err.message)})
}

let popUp= document.getElementById("popUp");
popUp.addEventListener("click",removepopUp)
function removepopUp(){
    popUp.style.display="none"
}

function showpopUp(){
    console.log("hello")
    popUp.style.display="flex"
}