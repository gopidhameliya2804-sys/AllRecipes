import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function SearchResults() {
    let [recipes, setRecipes] = useState([]);
    
    let query = useLocation().search.split("=")[1];
    console.log(query);

    useEffect(() => {
      fetch(`https://dummyjson.com/recipes/search?q=${query}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setRecipes(data.recipes);
        });
    }, []);


   return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-8 col-12">
            <div className="right-side mt-3">

              <div className="container mt-5">
                <div className="row">
                  {recipes.map((value) => {
                    return (
                      <div className="col-md-6 col-lg-4 col-12">
                        <div className="recipes-items">
                          <Link to={`/details/${value.id}`}>
                            <img src={value.image} alt />
                          </Link>
                          <div className="recipes mt-4">
                            <h2 className="fs-5">{value.name}</h2>
                            <div className="reviwe d-flex justify-content-between mt-3">
                              <span className="fa fa-star text-warning">
                                <Link className="text-secondary text-decoration-none ms-2">{value.rating}</Link>
                              </span>
                              <h5 className="text-secondary">
                                {value.cuisine}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResults
