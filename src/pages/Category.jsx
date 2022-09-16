import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`https://dev-samsblog.pantheonsite.io/wp-json/wp/v2/posts?categories=${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setAllPosts(data)
    })
  }, []);


  return (
    <>
      <div className="bg-green-100 min-h-screen p-12">
      <Link to={'/'}>Home</Link>
        <div className="container mx-auto">
          <h2 className="text-5xl flex justify-center cursive">Blog Posts</h2>
          <h3 className="text-lg text-gray-600 flex justify-center mb-12">
            Welcome to my blog posts page!
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData &&
              allPostsData.map((post, index) => (
                <Link to={"/" + post.id} key={post.id}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                  <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h2 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                      {post.slug}
                      </h2>
                  </span>
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </div>
        
    </>
  
  );
}