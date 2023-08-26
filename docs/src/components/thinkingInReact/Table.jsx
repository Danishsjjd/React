import React, { Fragment } from "react"

const Table = ({ products, search, checked }) => {
  const productsSortByCategoryObj = products.reduce((ac, cur) => {
    if (ac[cur.category]) {
      if (!search) ac[cur.category].push(cur)
      else {
        if (cur.name.toLowerCase().includes(search.toLowerCase())) {
          ac[cur.category].push(cur)
        }
      }
    } else {
      if (!search) ac[cur.category] = [cur]
      else {
        if (cur.name.toLowerCase().includes(search.toLowerCase())) ac[cur.category] = [cur]
      }
    }
    return ac
  }, {})

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(productsSortByCategoryObj).map((key) => (
            <Fragment key={key}>
              <tr>
                <th colSpan={2}>{key}</th>
              </tr>
              {productsSortByCategoryObj[key].map((item, index) => {
                return checked ? (
                  item.stocked ? (
                    <tr key={index} style={{ color: item.stocked ? "black" : "red" }}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                    </tr>
                  ) : null
                ) : (
                  <tr key={index} style={{ color: item.stocked ? "black" : "red" }}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                  </tr>
                )
              })}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
