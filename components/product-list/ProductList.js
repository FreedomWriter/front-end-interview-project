// import React from "react";

// // export default function ProductList() {
// //   return (
// //     <div>
// //       <p>Product List commin in hot</p>
// //     </div>
// //   );
// // }
// // /

// // products will be populated at build time by getStaticProps()
// function ProductList({ products }) {
//   console.log("from where I need em: ", products);
//   return (
//     <div>
//       <p>Product List commin in hot</p>
//     </div>
//   );
// }

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries. See the "Technical details" section.
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(
//     "https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6"
//   );
//   const products = await res.json();
//   console.log(products);

//   // By returning { props: products }, the ProductList component
//   // will receive `products` as a prop at build time
//   return {
//     props: {
//       products,
//     },
//   };
// }
// // getStaticProps();

// export default ProductList;
import React, { useState, useEffect } from "react";

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
    return;
  }
  return (
    <div>
      <p>Product List commin in hot</p>
    </div>
  );
}

export default ProductList;
