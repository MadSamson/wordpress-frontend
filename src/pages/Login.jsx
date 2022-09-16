import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
 const navigate = useNavigate();
 const [username, setUsername] = useState("")
 const [password, setPassword] = useState("")
 function handleOnSubmit(e) {
  e.preventDefault();
  let url = process.env.REACT_APP_API_URL
  const payload = {username, password}

  fetch(`${url}/token`, {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify(payload),
  })
   .then((res) => res.json())
   .then((data) => {
    const token = data.token;
    localStorage.setItem("blabla", token);
	token && navigate("/Admin");
   });
   
 }

 return (
  <div>
	<form onSubmit={handleOnSubmit}>
		<input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username'/>
		<br />
		<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
		<br />
		<button type="submit">login</button>
	</form>
 
  </div>
 );
}