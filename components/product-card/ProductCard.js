import React from "react";

import { Article } from "./ProductCard.styles";

export default function ProductCard({ product }) {
  console.log(product);
  const amount = product.unitPrice;
  const options = { style: "currency", currency: "USD" };
  const numFormat = new Intl.NumberFormat("en-US", options);
  return (
    <Article>
      <img src={product.assets[0]["url"]} alt={product.title} />
      <div>{product.title}</div>
      <amount>{numFormat.format(amount)}</amount>
    </Article>
  );
}