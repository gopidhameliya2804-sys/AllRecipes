import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Search() {
  let [data, setData] = useState([]);
  let [query , setQuery] = useState("");
  
  let navigate = useNavigate();

    useEffect(() => {
      fetch("https://dummyjson.com/recipes")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data.recipes);
        });
    }, []);

    function handleSubmit(e){
      e.preventDefault();
      navigate(`/searchResults?query=${query}`);
    }
    
    
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-8 col-12">
            <div className="right-side mt-3">
              <form onSubmit={handleSubmit} className="d-flex flex-wrap gap-2 align-items-center mb-4 justify-content-between">
                <div className="position-relative w-75">
                  <span className="fa fa-search position-absolute top-50 start-0 translate-middle-y ps-3 text-secondary" />
                  <input onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                    type="search"
                    className="form-control ps-5 py-2 bg-light border-0"
                    placeholder="Search for recipes..."
                    id="searchInput"
                  />
                </div>
              </form>
              <div className="container mt-5">
                <div className="row">
                  {data.map((value) => {
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

export default Search;
