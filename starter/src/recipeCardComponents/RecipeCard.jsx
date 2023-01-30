import React from "react";
import {Navigate} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import styles from "./RecipeCard.css";


const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()

    const handleClick =() => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }
    return(
        <div className = {styles.r_card}>
            <div>
                <div className = {styles.r_img_container}>
                    <img src = "https://i.ndtvimg.com/i/2017-04/prawn-curry-generic_650x400_51491898702.jpg"/>
                </div>
                <h3>Prawn Malai Curry</h3>
            </div>
            <button className="teal_btn" onclick ={handleClick}>See More</button>
        </div>
    );
};
export default RecipeCard;