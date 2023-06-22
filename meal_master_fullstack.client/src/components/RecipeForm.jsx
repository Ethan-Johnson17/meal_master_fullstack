import React, { useState } from 'react';
import { recipesService } from '../services/RecipesService';
import PropTypes from 'prop-types';
import Pop from '../utils/Pop';

export default function MyForm({onCloseOffcanvas}) {
  let [recipeData, setRecipeData] = useState({
    title: '',
    subtitle: '',
    imgUrl: '',
    cuisine: '',
    tags: ''
  });

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Perform form submission logic with recipeData
    recipeData.tags = recipeData.tags.toLowerCase();
    try {
      await recipesService.createRecipe(recipeData)
      Pop.success('Successfully added recipe')
      setRecipeData(() => ({
        title: '',
        subtitle: '',
        imgUrl: '',
        cuisine: '',
        tags: ''
      }));
      onCloseOffcanvas();
    }
    catch (error){
      Pop.error(error);
    }
    
  };

  return (
    <form id="recipeForm" onSubmit={handleSubmit}>
      <label htmlFor="recipeTitle">Recipe Title</label>
      <input type="text" name="recipeTitle" className="form-control mb-4" value={recipeData.title}
          onChange={handleInputChange} />

      <label htmlFor="recipeSubtitle">Subtitle or Brief Description</label>
      <input type="text" name="recipeSubtitle" className="form-control mb-4" value={recipeData.subtitle}
          onChange={handleInputChange} />
      
      <label htmlFor="imgUrl">Image URL</label>
      <input type="text" name="recipeImg" className="form-control mb-4" value={recipeData.imgUrl}
          onChange={handleInputChange} />
      
      <label htmlFor="tags">Tags (Ex. easy, seafood, spicy)</label>
      <input type="text" placeholder="Enter tags separated by commas" name="tags" className="form-control mb-4" value={recipeData.tags} onChange={handleInputChange}/>
      
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
        <optgroup label="North, South, and Central American">
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

MyForm.propTypes = {
  onCloseOffcanvas: PropTypes.func
}