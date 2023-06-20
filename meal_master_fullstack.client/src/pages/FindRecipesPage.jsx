import React from "react";
import RecipeOffcanvas from "../components/RecipeOffcanvas";
import { recipesService } from '../services/RecipesService';

export default function FindRecipes() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Function to handle the search
  const handleSearch = async () => {
    // Call the searchRecipes function from RecipeService.js
    const recipesService = await searchRecipes(query);

    // Update the results state with the search results
    setResults(recipesService);
  };
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