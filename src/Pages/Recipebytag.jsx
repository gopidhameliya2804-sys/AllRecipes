import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Recipebytag() {
  let [data, setData] = useState([]);
  let [category, setCategory] = useState([]);

  let tag = useLocation().pathname.split("/")[2];
  console.log(tag);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/tag/${tag}`)
      .then((response) => {
        return response.json();
      })
      .then((recipe) => {
        console.log(recipe);
        setData(recipe.recipes);
      });
  }, [tag]);
  
  useEffect(() => {
      fetch("https://dummyjson.com/recipes/tags")
      .then((response) => {
          return response.json();
        })
        .then((tags) => {
            console.log(tags);
            setCategory(tags);
        });
    }, []);
    console.log(category);
    return (
    <div>
      <div>
        {/* hero section start */}
        <div className="container">
          <section className="hero-sec">
            <div className="low-opacity">
              <div className="hero text-white p-5">
                <h1 className="display-5 fw-bold">
                  Choose form <br />
                  thousands of <br /> recipes
                </h1>
                <p>
                  Appropriately integrate technically sound value with scalable{" "}
                  <br />
                  informediaries negotitate sustainable stategic theme areas{" "}
                </p>
                <a href>
                  Sign up today <span className="fa fa-arrow-right ms-3 " />
                </a>
              </div>
            </div>
          </section>
        </div>
        {/* hero section ends */}
        {/* recipes section start */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12 mb-4">
              <div className="left-side mt-3">
                <h1 className="fw-bold">Recipe</h1>
                <ul className="mt-4">
                  <div className="recipes-list d-flex justify-content-between ">
                    <li className="fw-bold fs-5">Dish Type</li>
                    <span className="fa fa-minus mt-2  text-secondary" />
                  </div>
                  <ul className>
                    {category.map((value, index) => {
                      return (
                        <li key={index}>
                          <Link
                            to={`/recipebytag/${value}`}
                            className="text-decoration-none text-black fs-5"
                          >
                            {value}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div className="right-side mt-3">
                <form className="d-flex flex-wrap gap-2 align-items-center mb-4">
                  <div className="position-relative w-75">
                    <span className="fa fa-search position-absolute top-50 start-0 translate-middle-y ps-3 text-secondary" />
                    <input
                      type="search"
                      className="form-control ps-5 py-2 bg-light border-0"
                      placeholder="Search for recipes..."
                    />
                  </div>
                  <button className="btn btn-danger rounded-pill px-4 py-2 ms-5">
                    Sort by Latest <i className="fa fa-sort ms-2" />
                  </button>
                </form>
                <div className="row">
                  {data.map((value, index) => {
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
                                <a className="text-secondary text-decoration-none">
                                  {value.rating}
                                </a>
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
      {/* recipes section ends */})
    </div>
  );
}

export default Recipebytag;
