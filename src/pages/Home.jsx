import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import axios from "axios";

function Home() {
  let [a, b] = useState("data of states");
  let [products, setProducts] = useState([
    {
      title: "Iphone",
      price: 10,
      color: "black",
      img : 'https://imgs.search.brave.com/_Up3wdECKEbhRubeXrkL8q28ACv46vjZkeLzL-exBvw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNTA0MDgx/NjA5NTAxNzUwNzQv/UmVhY3QtaW50b2R1/Y3Rpb24tLndlYnA'
    },
    {
      title: "car",
      price: 100,
      color: "green",
      img : 'https://imgs.search.brave.com/fzBjjDJHzpyfb79cx-tBa291leaKktt8q3Icw0reZjc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxdDljYklJQ1VM/LmpwZw'
    },
    {
      title: "Laptop",
      price: 1000,
      color: "blue",
      img : 'https://imgs.search.brave.com/89a_84cinMfspYgVLXaTdF3TI9ApKoIEnbvtFHGzg_Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dGVjaG1hZ2ljLmNv/L2Jsb2cvY29udGVu/dC9pbWFnZXMvMjAy/NC8wNy9jb3Zlci1S/ZWFjdC0xLnBuZw'
    },
  ]);
  console.log(a);


  // useEffect(function,dependency)

  useEffect(function(){
    
    async function getData(){
       let res = await axios.get('https://dummyjson.com/products')
       console.log(res.data.products);
       setProducts(res.data.products)
    }

    getData()

    return function(){
      console.log("Component destroy hua")
    }
  },[])

  return (
    <div>
      <Header />
      <h1>{a}</h1>
      <button
        onClick={() => {
          b("iggigigiygy");
        }}
        className="bg-green-300 text-white font-bold px-4 py-2 rounded-xl"
      >
        Change text
      </button>
      <div className="flex flex-wrap items-center gap-4">
        
        {
            products.map((items,idx)=>{
                return <Card key={idx} data={items}/>
            })
        }
      </div>
    </div>
  );
}

export default Home;
