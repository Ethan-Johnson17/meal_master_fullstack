import React, { useState } from 'react';
import { recipesService } from '../services/RecipesService';

export default function MyForm() {
  const [recipeData, setRecipeData] = useState({
    recipeTitle: '',
    recipeSubtitle: '',
    recipeImg: '',
    cuisine: '',
    tags: []
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic with recipeData
    recipesService.createRecipe(recipeData)
  };

  return (
    <form id="recipeForm" onSubmit={handleSubmit}>
      <label htmlFor="recipeTitle">Recipe Title</label>
      <input type="text" name="recipeTitle" className="form-control mb-4" value={recipeData.recipeTitle}
          onChange={handleInputChange} />

      <label htmlFor="recipeSubtitle">Subtitle or Brief Description</label>
      <input type="text" name="recipeSubtitle" className="form-control mb-4" value={recipeData.recipeSubtitle}
          onChange={handleInputChange} />
      
      <label htmlFor="imgUrl">Image URL</label>
      <input type="text" name="recipeImg" className="form-control mb-4" value={recipeData.recipeImg}
          onChange={handleInputChange} />
      
      <label htmlFor="recipeSubtitle">Tags (Ex. easy, seafood, spicy)</label>
      <input type="text" placeholder="Enter tags separated by commas" name="recipeSubtitle" className="form-control mb-4" />
      
      <label htmlFor="cuisine">Cuisine</label>
      <select id="cuisine" name="cuisine" className="form-select mb-4" value={recipeData.cuisine}
        onChange={handleInputChange}>
        <option>Select cuisine</option>
        <optgroup label="European">
          <option value="greek">Greek</option>
          <option value="italian">Italian</option>
          <option value="german">German</option>
          <option value="belgian">Belgian</option>
          <option value="spanish">Spanish</option>
        </optgroup>
        <optgroup label="Asian">
          <option value="chinese">Chinese</option>
          <option value="japanese">Japanese</option>
          <option value="vietnamese">Vietnamese</option>
          <option value="indian">Indian</option>
          <option value="korean">Korean</option>
        </optgroup>
        <optgroup label="North, South, and Latin American">
        <option value="american">American</option>
        <option value="mexican">Mexican</option>
        <option value="peruvian">Peruvian</option>
        <option value="brazilian">Brazilian</option>
        </optgroup>
        <option value="other">Other</option>
      </select>

      <button type="submit" className="btn btn-primary">Save</button>

    </form>
  );
}