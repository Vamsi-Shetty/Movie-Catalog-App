import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password
        }
        try {
            const response = await axios.post('http://localhost:3001/api/v1/signup', newUser);
            console.log(response.data);
            alert("Signup successful. Please Login")
        } catch (error) {
            console.error('Error registering user:', error);
        }
    }
  return (
    <div className="text-center flex flex-col justify-center items-center h-screen md:h-auto">
        <div className="">
            <h1 className="font-bold">Create an account</h1>
        </div>
        <div className="text-left">
            <form onSubmit={handleSignUp}>
                <label>Email</label><br />
                <input
                className="border-2 my-2 p-1 rounded-md"
                type="email" 
                placeholder="Enter Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                /><br />
                <label>Password</label><br />
                <input
                className="border-2 my-2 p-1 rounded-md"
                type="text" 
                placeholder="Enter Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                /><br />
                <input
                className="w-full bg-black text-white p-4 rounded-md flex justify-center items-center gap-4"
                 type="submit" 
                 value="Sign Up" />
            </form>
        </div>
        
        <h2>Already have an account? {" "} <Link className="underline" to='/login'>Login</Link>
        </h2>
    </div>
  )
}

export default Signup