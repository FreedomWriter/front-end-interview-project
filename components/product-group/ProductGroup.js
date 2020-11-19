import React from "react";
import ProductCard from "../product-card/ProductCard";
import { Section, Div } from "./ProductGroup.styles";

export default function ProductGroup({ productGroup }) {
  return (
    <Section>
      <h2>{productGroup.name}</h2>
      <Div>
        {productGroup.products.map((product, idx) => {
          if (idx < 8) {
            return <ProductCard key={product.id} product={product} />;
          }
        })}
      </Div>
    </Section>
  );
}
