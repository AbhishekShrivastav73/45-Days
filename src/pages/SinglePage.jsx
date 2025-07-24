import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(function () {
    async function getData() {
      let res = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(res.data);
      setData(res.data);
    }

    getData();
  }, []);

  return (
    data && (
      <div>
        {data.title}
        <p>{data.price}</p>
      </div>
    )
  );
}

export default SinglePage;
