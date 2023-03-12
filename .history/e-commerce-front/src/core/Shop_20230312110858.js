import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getAlbums } from "./apiCore";
import Card from "./Card";

const Shop = () => {
    return (
        <Layout
          title="Home Page"
          description="Tune Source"
          className="container-fluid"
        >
          <h2 className="mb-4">New Arrivals</h2>
          <div className="row">
            {albumsByArrival.map((album, i) => (
              <Card key={i} album={album} />
            ))}
          </div>
    
          <h2 className="mb-4">Best Seller</h2>
          <div className="row">
            {albumsBySell.map((album, i) => (
              <Card key={i} album={album} />
            ))}
          </div>
        </Layout>
      );
}