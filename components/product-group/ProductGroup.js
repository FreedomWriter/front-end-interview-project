import React from "react";
import ProductCard from "../product-card/ProductCard";
import { Section, Div } from "./ProductGroup.styles";

export default function ProductGroup({ productGroup }) {
  return (
    <Section>
      <h3>{productGroup.name}</h3>
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
