import React from "react";

const Table = ({ products, search, checked }) => {
  let lastCategory = [];
  const rows = [];

  products.forEach((product, index) => {
    if (search && !product.name.toLowerCase().includes(search.toLowerCase()))
      return;
    if (checked && !product.stocked) return;
    if (lastCategory !== product.category)
      rows.push(
        <tr key={product.category}>
          <th colSpan={2}>{product.category}</th>
        </tr>
      );
    rows.push(
      <tr style={{ color: product.stocked ? "black" : "red" }} key={index}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
    lastCategory = product.category;
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
