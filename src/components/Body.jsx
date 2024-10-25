import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/Firebase"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/UserSlice"


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/browse",
        element: <Browse />
    },
])


const Body = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        //THIS API IS TO PERFORM USER STATUS UPDATE
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, displayName, email, photoURL } = user
                console.log(photoURL);
                
                dispatch(addUser({ uid: uid, name: displayName, email: email, photoURL: photoURL }))

            } else {
                // User is signed out
                dispatch(removeUser())
            }
        });

    }, [])
    return (
        <div>

            <RouterProvider router={appRouter} />

        </div>
    )
}

export default Body
