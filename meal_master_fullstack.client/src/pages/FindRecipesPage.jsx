import React, { useEffect, useState } from "react";
import RecipeOffcanvas from "../components/RecipeOffcanvas";
import { recipesService } from '../services/RecipesService';
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default function FindRecipes() {
  const [query, setQuery] = useState('');
  // const [results, setResults] = useState([]);
  // ?WILL DELETE LATER USED FOR TESTING
  async function getAllRecipes() {
    try {
      await recipesService.getAllRecipes()
    } catch (error) {
      Pop.error(error)
    }
  }


  // Function to handle the search
  const handleSearch = async () => {
    try {
      logger.log('handle search run')
      // Call the searchRecipes function from RecipeService.js
      await recipesService.searchRecipes(query);
    } catch (error) {
      Pop.error(error)
    }
  };
  useEffect(() => {
    getAllRecipes()
  }, [])

  return (
    <>
      <div className="row">
        <h2 className="col-10 p-3">Find Recipes</h2>
        <div className="col-2 p-3">
          <RecipeOffcanvas />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-4">
          <div className="input-group mb-3">
            <input
              type="text" className="form-control" placeholder="Find recipes..." aria-label="Find recipes..."
              aria-describedby="button-addon2" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className="btn btn-outline-primary mdi mdi-search" type="button" id="button-addon2" onClick={handleSearch}>Search</button>
          </div>
          {/* <input type="text" className="form-control" placeholder="Find recipes..." />
            <button className="mdi mdi-search text-black btn"><i className="mdi mdi-search text-black"></i></button> */}
        </div>
      </div>
    </>
  )
}