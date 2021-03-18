import React, { Component } from "react";
import { SHOP_DATA } from "./shop.data.js";
import "./shop.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = SHOP_DATA;
  }
  render() {
    const collections = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
