import React from "react";
const RecipeCard = ({ recipe }) => {
    const {
      strTags,
      strArea,
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    
    return (
        <div className="card">
            <img style={{height:200,width:200}}
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
            />
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <h3>Meals Name:{strMeal}</h3>
                <h4>Area: {strArea}</h4>
                <h4>Meals Tag:  {strTags}</h4>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Instructions</a>
            </div>
        </div>
    )
};

export default RecipeCard;