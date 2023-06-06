import React from 'react';
import { Button, Offcanvas } from 'bootstrap';
import PropTypes from 'prop-types';


export default function RecipeOffcanvas({ recipe }) {
  const offcanvasRef = React.useRef(null);

  const openOffcanvas = () => {
    const offcanvas = new Offcanvas(offcanvasRef.current);
    offcanvas.show();
  };

  return (
    <>
      <button className="btn btn-primary lighten-10" type="button" aria-controls="recipeOffcanvas" onClick={openOffcanvas}>{recipe?.title ? 'Edit Recipe' : 'Add New Recipe'}</button>
      
      <div ref={offcanvasRef} className="offcanvas offcanvas-end" id={recipe ? 'editRecipe' + recipe?.id + 'Offcanvas' : 'addnewRecipeOffcanvas'} aria-labelledby="recipeOffcanvas">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="recipeOffcanvas">{recipe?.title ? 'Edit Recipe' : 'Add New Recipe'}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <form id="recipeForm" onSubmit={saveRecipe}>
            <label htmlFor="recipeTitle">Recipe Title</label>
            <input type="text" className="form-control" />
            <label htmlFor="cuisine">Cuisine</label>
            <select id="cuisine" className="form-select">
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
        </div>
      </div>
    </>
  );
}

function saveRecipe() {
  window.event?.preventDefault();
  let form = document.getElementById('recipeForm');
  console.log(form)
}

RecipeOffcanvas.propTypes = {
  recipe: PropTypes.object
}