import React, { useState } from "react";
import ProductCard from "../product-card/ProductCard";
import { Section, Div } from "./ProductGroup.styles";

export default function ProductGroup({ productGroup }) {
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setShowMore(!showMore);
  }
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
      <p onClick={handleClick}>
        {showMore ? `Less ${productGroup.name}` : `More ${productGroup.name}`}
      </p>
      <>
        {showMore && (
          <Div>
            {productGroup.products.map((product, idx) => {
              if (idx > 7) {
                return <ProductCard key={product.id} product={product} />;
              }
            })}
          </Div>
        )}
      </>
    </Section>
  );
}
