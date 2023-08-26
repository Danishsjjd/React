import React, { useEffect, useState } from "react"
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom"

import axios from "axios"

const UseEffect = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Link to={"/1"} style={{ border: "3px solid black" }}>
              Users no 1
            </Link>
          }
        />
        <Route path="/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

function User() {
  const [user, setUser] = useState({})
  const [number, setNumber] = useState(0)

  const { id: userId } = useParams()

  useEffect(() => {
    setInterval(() => {
      setNumber((pre) => pre + 1)
    }, 1000)
  }, [number])

  useEffect(() => {
    const cancelToken = axios.CancelToken.source()
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
        cancelToken: cancelToken.token,
      })
      .then((res) => setUser(res.data))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("cancel", err)
        } else {
        }
      })

    return () => {
      cancelToken.cancel()
    }
  }, [userId])

  return (
    <div style={{ border: "3px solid black" }}>
      <ul>
        <li>useEffect works async, sync only for discrete input</li>
        <li>can preform any lifecycle method</li>
      </ul>
      <h1>It should count by one every second {number}</h1>
      <br />
      <br />
      <h2>To Check below code remove clean up function and use throttling</h2>
      <div>
        <div>
          <strong>Title: </strong>
          <span>{user?.title}</span>
        </div>
        <div>
          <strong>User ID: </strong> <span>{user?.id}</span>
        </div>
      </div>
      <Link to={"/1"} style={{ display: "block", margin: "10px 0", fontSize: "25px" }}>
        First user
      </Link>
      <Link to={"/2"} style={{ display: "block", margin: "10px 0", fontSize: "25px" }}>
        second user
      </Link>
      <Link to={"/3"} style={{ display: "block", margin: "10px 0", fontSize: "25px" }}>
        Third user
      </Link>
    </div>
  )
}

export default UseEffect
