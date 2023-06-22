import React, { useRef } from 'react';
import { Offcanvas } from 'bootstrap';
import PropTypes from 'prop-types';
import RecipeForm from './RecipeForm';


export default function RecipeOffcanvas({recipe}) {
  const offcanvasRef = useRef(null);

  const openOffcanvas = () => {
    // @ts-ignore
    const offcanvas = new Offcanvas(offcanvasRef.current);
    offcanvas.show();
  };

  const closeOffcanvas = () => {
    // @ts-ignore
    const offcanvas = new Offcanvas(offcanvasRef.current);
    offcanvas.hide();
  };

  return (
    <>
      <button className="btn btn-primary lighten-10" type="button" aria-controls="recipeOffcanvas" onClick={openOffcanvas}>Add New Recipe</button>
      
      <div className="offcanvas offcanvas-end" id="addnewRecipeOffcanvas" aria-labelledby="recipeOffcanvas" ref={offcanvasRef}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="recipeOffcanvas">Add New Recipe</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <RecipeForm onCloseOffcanvas={closeOffcanvas} />
        </div>
      </div>
      {/* <div className="offcanvas offcanvas-end" id={recipe ? 'editRecipe' + recipe?.id + 'Offcanvas' : 'addnewRecipeOffcanvas'} aria-labelledby="recipeOffcanvas" ref={offcanvasRef}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="recipeOffcanvas">{recipe?.title ? 'Edit Recipe' : 'Add New Recipe'}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <RecipeForm />
        </div>
      </div> */}
    </>
  );
}

RecipeOffcanvas.propTypes = {
  recipe: PropTypes.object
}