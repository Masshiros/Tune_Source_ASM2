import React, { useState } from "react";
import Layout from "./Layout";
import { getAlbums } from "./apiCore";
const Home = () => {
  const [albumsBySell, setA] = useState([]);

  return (
    <Layout title="Home Page" description="Tune Source">
      ...
    </Layout>
  );
};

export default Home;
