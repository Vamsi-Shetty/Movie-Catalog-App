import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const baseURL = `https://movie-catalog-app.onrender.com/api/v1`

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password
        }
        try {
            const response = await axios.post(`${baseURL}/login`, newUser);
            console.log(response.data);
            navigate('/');
            
        } catch (err) {
            alert("Please check your credentials")
            // console.log('Error while logging in',err);
        }
    }
  return (
    <div className="text-center flex flex-col justify-center items-center h-screen md:h-auto">
        <div>
            <h1>Login to proceed</h1>
        </div>
        <div className="text-left">
            <form onSubmit={handleLogin}>
                <label>Email</label><br />
                <input
                type="email" 
                className="border-2 my-2 p-1 rounded-md"
                placeholder="Enter Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                /><br />
                <label>Password</label><br />
                <input
                type="text" 
                className="border-2 my-2 p-1 rounded-md"
                placeholder="Enter Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                /><br />
                <input
                 className="w-full bg-black text-white p-4 rounded-md flex justify-center items-center gap-4"
                 type="submit" 
                 value="Login" />
            </form>
            <h2>Don't have an account? {" "} <Link to='/signup' className="underline">Signup</Link></h2>
        </div>
    </div>
  )
}

export default Login;