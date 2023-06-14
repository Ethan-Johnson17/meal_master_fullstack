import React from "react";
import RecipeOffcanvas from "../components/RecipeOffcanvas";
export default function FindRecipes() {
  return (
    <>
        <div className="row">
          <h2 className="col-10 p-3">Find Recipes</h2>
          <div className="col-2 p-3">
            {/* <RecipeOffcanvas /> */}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Find recipes..." aria-label="Find recipes..." aria-describedby="button-addon2"/>
              <button className="btn btn-outline-primary mdi mdi-search" type="button" id="button-addon2">Search</button>
            </div>
            {/* <input type="text" className="form-control" placeholder="Find recipes..." />
            <button className="mdi mdi-search text-black btn"><i className="mdi mdi-search text-black"></i></button> */}
          </div>
        </div>
      </>
  )
}