import React from 'react';
import { Button, Offcanvas } from 'bootstrap';
import PropTypes from 'prop-types';
import RecipeForm from './RecipeForm';


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
          <RecipeForm />
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