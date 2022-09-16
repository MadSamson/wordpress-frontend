import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import parse from 'html-react-parser'; 

export default function Post() {
    const [postData, setPostData] = useState(null);
    const { id } = useParams();
    console.log(id);
    let url = process.env.REACT_APP_API_URL
    useEffect(() => {
        fetch(`${url}/posts/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPostData(data)
        })
      }, [id]);
      if (!postData) return <div>Loading...</div>;
  return (
    <div className="bg-gray-200 min-h-screen p-12">
    <Link to={'/'}>Home</Link>
    <div className="container shadow-lg mx-auto bg-green-100 rounded-lg">
      <div className="relative">
        <div className="h-full w-full flex items-center justify-center p-8">
          {/* Title Section */}
          <div className="bg-white bg-opacity-75 rounded p-12">
            <h2 className="cursive text-3xl lg:text-6xl mb-4">
            {postData.title.rendered}
            </h2>
            <div className="flex justify-center text-gray-800">
              <h4 className="cursive flex items-center pl-2 text-2xl">
              </h4>
            </div>
          </div>
        </div>
        
      </div>
      <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
      {parse(`${postData.content.rendered}`)}
      </div>
    </div>
  </div>
  )
}
