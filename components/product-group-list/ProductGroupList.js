import React, { useState, useEffect } from "react";
import LoadingSpinner from "../loader/LoadingSpinner.component";
import ProductGroup from "../product-group/ProductGroup";

function ProductGroupList() {
  const [productGroups, setProductGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    await fetch(
      "https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6"
    )
      .then((res) => res.json())
      .then((data) => {
        setError(false);
        setProductGroups(data.aisle.groups);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <error>Something went wrong!</error>;
  }
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      {productGroups.map((productGroup) => {
        if (productGroup.products.length > 0) {
          return (
            <ProductGroup key={productGroup.id} productGroup={productGroup} />
          );
        }
      })}
    </>
  );
}

export default ProductGroupList;
