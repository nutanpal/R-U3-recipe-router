import React,{useEffect, useState} from 'react'
import axios from  "axios"
import AdBanner from './AdBanner'
import RecipeContainer from "./RecipeContainer"

//define consts and access api to get Recipes
const HomeScreen = () => {  
const[recipes,setRecipes] = useState([])
const url ='"https://recipes.devmountain.com'
const getRecipes =()=>{
  axios
  .get(`${url}/recipes`)
  .then((res)=>{
    setRecipes(res.data)
    console.log(res.data)
  })

}
////////////
useEffect(()=>{
  getRecipes()
},[])

////////////////
  return (
    <div>
      <AdBanner />
      <RecipeContainer recipes = 
      {recipes /* Much code from Part 2 will be placed around here. Do your best! */}/>
    </div>
  )
}

export default HomeScreen