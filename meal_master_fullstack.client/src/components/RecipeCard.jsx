import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { recipesService } from '../services/RecipesService';
import Pop from '../utils/Pop';

export default function RecipeCard({ recipe }) {
    // NOTE Probably dont need this?? keeping it in case 
    // let [recipeData, setRecipeData] = useState({
    //     title: '',
    //     subtitle: '',
    //     imgUrl: '',
    //     cuisine: '',
    //     tags: ''
    // });


    return (
        <Link to={`recipe/${recipe.id}`}>
            <div className='position-relative card-border rounded'>
                <img
                    className='img-fluid'
                    src={recipe.imgUrl}
                    alt={recipe.title}
                />

                <div className='position-absolute bottom-0 start-0'>
                    <div className='ps-2 pt-3 text-body-bg'>
                        <b>{recipe.title}</b>
                    </div>
                    <div className='ps-2'>{recipe.subtitle}</div>
                    {recipe.tags}

                </div>
            </div>
        </Link>
    );

}

RecipeCard.propTypes = {
    recipe: PropTypes.object.isRequired,
};

