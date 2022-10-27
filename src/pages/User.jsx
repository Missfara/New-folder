import React from "react";
import axios from "axios";
import { Pagination } from "@material-ui/lab";

export const User = () => {
  const [data, setdata] = React.useState([]);
  const [loading, setloading] = React.useState(true);

  const [pageCount, setpageCount] = React.useState(1);
  const [pageValue, setpageValue] = React.useState(1);

  const fetchData = async () => {
    await axios
      .get(`https://randomuser.me/api/?page=${pageCount}&results=10&seed=abc`)
      .then((response) => {
        setTimeout(() => {
          setdata(response.data.results);
          setloading(false);
          setpageValue(data.total_count);
        }, 3000);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(() => {
    fetchData();
  }, [pageCount]);

  return (
    <>
      {loading === true ? (
        <div className="loading">
          <p>LOADING...</p>
        </div>
      ) : (
        <div className="main">
          <Pagination
            style={{
              margin: "auto",
              justifyContent: "center",
              display: "flex",
            }}
            onChange={() => {
              setpageCount(pageCount + 1);
            }}
            count={pageValue}
          />
          <h3>User Details</h3>
          {data.map((data) => {
            return (
              <div key={data.name.last} style={{ display: "flex" }}>
                <div style={{ height: 200, width: 200, marginRight: 40 }}>
                  <img
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 2,
                      marginBottom: 20,
                    }}
                    src={data.picture.large}
                    alt="jp.jpg"
                  />
                </div>
                <ul>
                  <li>
                    Name:{" "}
                    {data.name.title +
                      " " +
                      data.name.first +
                      " " +
                      data.name.last}
                  </li>
                  <li>Email: {data.email}</li>
                  <li>
                    Address:{" "}
                    {data.location.city +
                      ", " +
                      data.location.state +
                      ", " +
                      data.location.country}
                  </li>
                  <li>Phone number: {data.phone}</li>
                  <li>Age: {data.dob.age}</li>
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
