import React, { useState, useEffect } from "react";
import LoadingSpinner from "../loader/LoadingSpinner.component";

function ProductList() {
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
        setProductGroups((prevState) => [...prevState, ...data.aisle.groups]);
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
  console.log("from where I need em: ", productGroups);
  if (error) {
    return <error>Something went wrong!</error>;
  }
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <p>Product List commin in hot</p>
    </div>
  );
}

export default ProductList;
