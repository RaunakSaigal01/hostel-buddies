import React, { useEffect, useRef } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import lottie from "lottie-web";
import animationData from "../assets/city.json"; 

export default function LoginPage({ onLogin }) {
  const containerRef = useRef(null);
  useEffect(() => {
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = "auto";
  };
}, []);   

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    return () => anim.destroy(); 
  }, []);

  const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    
    const token = await user.getIdToken();

    
    const response = await fetch("https://hostel-buddies.onrender.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: user.displayName,
    email: user.email,
    uid: user.uid,
  }),
});

if (!response.ok) {
  const err = await response.json();
  throw new Error(err.error || "Failed to save user");
}

console.log("✅ User saved in backend");
  }
  return (

    <center className="login">
      <div className="login-page">
        <div className="Welcome">
            <h1>Welcome To Hostel Buddy</h1>
        </div>
        <div className="login-card">
      <button onClick={handleGoogleLogin} className="google-btn">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            
            alt="Google logo"
            style={{ width: "20px", marginRight: "8px" }}
            />
          Sign in with Google
        </button>
        </div>
      <div className="wrapper">
      <div className="img1"><img src="autumntree.gif" alt="" /></div>
      
      <div ref={containerRef} className="animation"/></div>
      <div className="img2"> <img src="autumntree.gif" alt="" /></div>
      </div>
      </center>
  );
}
