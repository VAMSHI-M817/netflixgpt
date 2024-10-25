import { useRef, useState } from "react"
import Header from "./Header"
import { validateData } from "../utils/Validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/Firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [showErrorMsg, setShowErrorMsg] = useState(null)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }


    const handleSIgnIn = () => {
        const loginMessage = validateData(email.current.value, password.current.value)
        setShowErrorMsg(loginMessage)
        if (loginMessage) return;

        if (!isSignInForm) {
            //signUp Logic

            //CREATING USER API FROM FIREBASE
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    //-------UPDATE PROFILE API FROM FIREBASE-------
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/149988360?v=4"
                    }).then(() => {
                        // Profile updated!
                        //USED AUTH.CURRENTUSER
                        const { uid, displayName, email, photoURL } = auth.currentUser                        
                        dispatch(addUser({ uid: uid, name: displayName, email: email, photoURL: photoURL }))  
                        navigate("/browse")
                    }).catch((error) => {
                        // An error occurred
                        setShowErrorMsg(error.message)
                    }); 


                    console.log(user);
                    navigate("/browse")
                    alert("Signed Up Successfully")

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setShowErrorMsg(errorMessage + "-" + errorCode)
                });
        } else {
            //signIn Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse")
                    alert("Signed In Succesfully")


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setShowErrorMsg(errorMessage + "-" + errorCode)
                });
        }
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

                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="p-8 sm:p-12 lg:p-20 bg-black flex flex-col w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 gap-4"
                >
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-start">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </p>
                    {
                        !isSignInForm && (<input
                            ref={name}
                            type="text"
                            placeholder="Enter Username"
                            className="py-3 px-4 bg-slate-600 text-white"
                        />)
                    }
                    <input
                        ref={email}
                        type="email"
                        placeholder="Enter Email"
                        className="py-3 px-4 bg-slate-600 text-white"
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder="Enter Password"
                        className="py-3 px-4 bg-slate-600 text-white"
                    />
                    <p className="block font-bold text-red-500">
                        {showErrorMsg}
                    </p>
                    <button
                        onClick={handleSIgnIn}
                        className="bg-red-600 p-3 sm:p-4 rounded text-lg sm:text-xl font-bold text-white"
                    >
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>

                    <p className="text-white text-center font-bold">OR</p>

                    <a href="#">
                        <p className="text-white text-lg sm:text-xl text-center">
                            Forgot password
                        </p>
                    </a>

                    <p onClick={toggleSignInForm} className="text-white text-lg sm:text-xl cursor-pointer">
                        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
                    </p>
                </form>
            </div>
        </div>


    )
}

export default Login
