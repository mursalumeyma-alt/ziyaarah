import {useState} from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { loginUser } from "../../services/authService";
import useAuthStore from "../../store/authStore";



function Login() {
    const [error, setError] = useState("");
    const setAuth = useAuthStore((state) => state.setAuth);

    const handleSubmit =async (e) => {
        e.preventDefault();
        const form =e.target;
        const email = form.email.value.trim();
        const password= form.password.value;

        if (!email || !password){
            setError("Please enter your email and password");
            return;
        }
try{ 
    setError("");
    const data =await loginUser(email,password);

    setAuth(data.token,{
        email,
    });
    window.location.herf ="/dashboard";
    }
    catch (error){
        setError(error.message);
    }
}
      
   

    return(
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <h1>🕌 Ziyaarah</h1>
                    <p>Your Spiritual Journey Companion</p>

                </div>
                <div className="form-header">
                    <h2>Welcome Back</h2>
                    <p>Continue your spiritual journey with us.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <Input
                        label="Email"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                    />
                    <Input
                        label="Password"
                        name="password"
                        placeholder="Enter your password"
                        type="password"
                    />

          {error && (
            <p className="form-error">{error}</p>
          )}
                
                 <div className="form-options">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="/forgot-password">Forgot Password?</a>
                </div>
                <Button type="submit">Sign In</Button>
                
                </form>
                <p className="auth-switch">
                    Don't have an account?{""}
                     <a href="/register" onClick={() => window.location.href = "/register"}>
  Create one
</a>
                </p>
            </div>
        </div>
    );
}
export default Login;