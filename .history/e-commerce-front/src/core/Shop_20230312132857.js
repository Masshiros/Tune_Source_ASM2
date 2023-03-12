import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getGenres, getFilteredAlbum } from "./apiCore";
import Checkbox from "./Checkbox";
import RadioBox from "./RadioBox";
import { prices } from "./fixedPrices";

const Shop = () => {
  const [myFilters, setMyfilters] = useState({
    filters: { genreId: [], price: [] },
  });
  const [genreId, setGenreId] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);
  const init = () => {
    getGenres().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setGenreId(data.data);
      }
    });
  };
  const loadFilteredResults = (newFilters) => {
    // console.log(newFilters);
    getFilteredAlbum(skip, limit, newFilters).then((data) => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };
  const loadMore = () => {
    // console.log(newFilters);
    let toSkip = skip + limit;
    getFilteredAlbum(toSkip, limit, myFilters.filters).then((data) => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults([...filteredResults, data.data]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };
  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-warning mb-5">Load More</button>
      )
    );
  };
  useEffect(() => {
    init();
    loadFilteredResults(skip, limit, myFilters.filters);
  }, []);
  const handleFilters = (filters, filterBy) => {
    //console.log("SHOP", filters, filterBy);
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;
    if (filterBy == "price") {
      let priceValue = handlePrice(filters);
      newFilters.filters[filterBy] = priceValue;
    }
    loadFilteredResults(myFilters.filters);

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
              genreId={genreId}
              handleFilters={(filters) => handleFilters(filters, "genreId")}
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
        <div className="col-8">
          <h2 className="mb-4">Albums</h2>
          <div className="row">
            {filteredResults.map((album, i) => (
              <Card album={album} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
