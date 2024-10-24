import { useState } from "react"
import Header from "./Header"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div className="relative min-h-screen flex flex-col">
            <Header />

            <div className="absolute w-full h-full top-0 left-0">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col justify-center items-center flex-grow z-20">

                <form className="p-20 bg-black flex flex-col w-3/12 gap-4">
                    <p className="text-4xl font-bold text-white text-start">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </p>
                    {
                        !isSignInForm && (<input
                            type="text"
                            placeholder="Enter Username"
                            className="py-4 px-4 font-bold"
                        />)
                    }
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="py-4 px-4 font-bold"
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="py-4 px-4 font-bold"
                    />
                    <button className="bg-red-600 p-4 rounded text-xl font-bold text-white">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p className="text-white text-center font-bold">OR</p>
                    {/* <button className="text-white text-center font-bold bg-white/20 px-4 py-4">
                        Use a sign-in code
                    </button> */}
                    <a href="#">
                        <p className="text-white text-xl text-center">
                            Forgot password
                        </p>
                    </a>

                    <p onClick={toggleSignInForm} className="text-white text-xl cursor-pointer">
                        {
                            isSignInForm ? "New to netflix? Sign Up Now":"Already Registered? Sign In Now"
                        }
                    </p>
                </form>
            </div>
        </div>

    )
}

export default Login
