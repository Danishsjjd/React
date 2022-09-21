import React from "react";

import Table from "./Table";
import { products } from "../../constants/data";
import { useState } from "react";
import ReactTable from "./ReactTable";

const Products = () => {
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="showInStock"
          id="showInStock"
          value={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>
      {/* My Logic */}
      <Table products={products} search={search} checked={checked} />
      {/* React Docs */}
      <div style={{ margin: "40px 0" }} />
      <ReactTable products={products} search={search} checked={checked} />
    </div>
  );
};

export default Products;
