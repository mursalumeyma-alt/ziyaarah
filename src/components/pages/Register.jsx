
import {useState} from "react";
import  Input from "../common/Input";
import Button from "../common/Button";
import { registerUser } from "../../services/authService";
import useAuthStore from "../../store/authStore";

function Register() {
    const[error,setError]= useState("");
    const setAuth =useAuthStore((state)=> state.setAuth);
  
   

  const handleSubmit = async (e) => {
  e.preventDefault();
  const from = e.target;
  console.log(from);
  const fullName =from.fullName.value.trim();
  const email= from.email.value.trim();
  const password = from.password.value;
  const confirmPassword = from.confirmPassword.value;
  /*
  if (fullName|| !email ||!password || !confirmPassword) {

    setError("Please fill in all fields.");
    return;
  }

if (!email.includes ("@")) {
    setError("Please enter a valid email address.");
    return;
  }
  if (password.length < 6) {
    setError("Password must be at least 6 characters long.");
    return;
  }
  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }
    */
  try {
   console.log(fullName, email, password);
    const data = await registerUser(fullName, email, password);
    console.log(data);
    setAuth(data.token, {
        fullName,
        email
    });

    alert("Registration successful!");
    window.location.href = "/dashboard";
  } catch (error) {
    setError(error.message);
  }
};

   

    return (
        <div className="auth-page">
            <div className="auth-card">

                <div className="auth-header">
                    <h1>🕌 ziyarah</h1>
                   <p>Your Spiritual Journey Companion</p> 
                   </div>

                   <div className="form-header">
                    <h2>Create Your Account</h2>
                    <p>Join our community and start your spiritual journey today!</p>
                </div>


                <form onSubmit={handleSubmit}>
                    <Input
                        label="Full Name"
                        name="fullName"
                        placeholder="Enter your full name"
                        type="text"

                    />
                    <Input
                        label="Email"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                    />
                 
                    <Input
            label="Password"
            name="password"
            placeholder="Create a password"
            type="password"
          />

                    <Input
                        label="Confirm Password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        type="password"
                    />


          {error && <p className="form-error">{error}</p>}

                    <Button type="submit">
                    Create Account
                    </Button>
                </form>
                <p className="auth-switch">
                    Already have an account?{""}
                    <a href="/login">Sign in</a>
                </p>
            </div>
        </div>
    );
}


export default Register;