import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function Admin() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('blabla');
        navigate("/");
      };
  return (
    <div>
        <div className="container mx-auto">
        <h2 className="text-5xl flex justify-center cursive">Admin Page</h2>
        <h3 className="text-lg text-gray-600 flex justify-center mb-12">
            under consideration!
            <br />
            return later for publishing new posts
        </h3>
          <button onClickCapture={logout}>logout</button>
        </div>
    </div>
  )
}
