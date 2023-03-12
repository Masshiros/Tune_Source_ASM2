import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getAlbums } from "./apiCore";
import Card from "./Card";
import { getGenres } from "./apiCore";
import Checkbox from "./Checkbox";
import RadioBox from "./RadioBox";
import { prices } from "./fixedPrices";

const Shop = () => {
  const [myFilters, setMyfilters] = useState({
    filters: { genre: [], price: [] },
  });
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(false);
  const init = () => {
    getGenres().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setGenres(data.data);
      }
    });
  };
  useEffect(() => {
    init();
  }, []);
  const handleFilters = (filters, filterBy) => {
    //console.log("SHOP", filters, filterBy);
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;
    if (filterBy == "price") {
      let priceValue = handlePrice(filters);
      newFilters.filters[filterBy] = priceValue;
    }
    loadFilteredResults(myFilters.filters)

    setMyfilters(newFilters);
  };
  const handlePrice = (value) => {
    const data = prices;
    let array = [];
    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };
  const loadFilteredResults = (newFilters) => {
    console.log(newFilters);
  }
  return (
    <Layout
      title="Shop Page"
      description="Search and find you favorite album"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-4">
          <h4>Filter by genres</h4>
          <ul>
            <Checkbox
              genres={genres}
              handleFilters={(filters) => handleFilters(filters, "genre")}
            />
          </ul>
          <h4>Filter by price range</h4>
          <div>
            <RadioBox
              prices={prices}
              handleFilters={(filters) => handleFilters(filters, "price")}
            />
          </div>
        </div>
        <div className="col-8">{JSON.stringify(myFilters)}</div>
      </div>
    </Layout>
  );
};

export default Shop;
