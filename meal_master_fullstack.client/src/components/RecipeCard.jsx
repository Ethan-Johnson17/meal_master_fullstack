import React, { useState } from 'react';
import { recipesService } from '../services/RecipesService';
import Pop from '../utils/Pop';

export default function RecipeCard() {
    let [recipeData, setRecipeData] = useState({
        title: '',
        subtitle: '',
        imgUrl: '',
        cuisine: '',
        tags: ''
    });


}

