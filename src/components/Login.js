import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_small.jpg" alt="logo" />
        </div>
        <form className="w-3/12 absolute p-12 bg-black bg-opacity-80 rounded-md my-36 mx-auto left-0 right-0 text-white">
            <h1 className="font-bold text-3xl py-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            <input
              type="text" 
              placeholder='Email Address' 
               className="p-3 my-3 w-full bg-[#3938386d] border placeholder:text-gray-400 rounded-md text-white" />
               {!isSignInForm && (
                <input
                type="text" 
                placeholder="Full Name"
                className="p-3 my-3 w-full bg-[#3938386d] border placeholder:text-gray-400 rounded-md text-white" />
               )}
            
            <input 
              type="password" 
              placeholder='Password' 
              className="p-3 my-3 w-full bg-[#3938386d] border placeholder:text-gray-400 rounded-md text-white"  
            />
           <button 
             className="p-3 my-3 w-full bg-red-600 rounded-md hover:bg-red-700 font-semibold">
             {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            {isSignInForm ? (
              <p className="text-gray-400 cursor-pointer">New to Streamfy? 
                <span 
                  className="text-white"
                  onClick={toggleSignInForm}
                > Sign up now.</span>
              </p>
              ) : (
              <p
               className="text-gray-400 cursor-pointer">Already have an account? 
                <span 
                  className="text-white"
                  onClick={toggleSignInForm}
                > Sign in now.</span>
              </p>
            )}
        </form>
    </div>
  )
}

export default Login;