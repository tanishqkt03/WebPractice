import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
export default function Github() {
//   const [data, setData] = useState([]);

  const data=useLoaderData()
//   useEffect(() => {
//     fetch("https://api.github.com/users/tanishqkt03")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <>
      <div className="text-center text-white m-4 bg-gray-700 p-4 text-3xl">
        Github Followers: {data.followers}
      </div>
      <div className="text-center text-black">{data.name}</div>
        <div className="flex justify-center items-center">
          <img src={data.avatar_url} width={300} alt="Github Avatar" />
        </div>
      
    </>
  );
}

export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/tanishqkt03')
    return response.json();
}
