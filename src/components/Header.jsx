import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO_URL } from "../utils/Constants";

const Header = () => {

  const navigate = useNavigate()
  const user = useSelector((store) => store.user)

  const dispatch = useDispatch()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")

    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });

  }


  useEffect(() => {
    //THIS API IS TO PERFORM USER STATUS UPDATE
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user
        dispatch(addUser({ uid: uid, name: displayName, email: email, photoURL: photoURL }))
        navigate("/browse")

      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });

    return () => unsubscribe

  }, [])

  return (
    <>
      <div className="absolute w-full px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
        <img src={LOGO_URL} className="w-24 md:w-32 lg:w-48" alt="Logo" />

        {user && (
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <button
              onClick={handleSignOut}
              type="button"
              className="bg-red-600 text-white px-4 py-2 text-xs md:text-sm lg:text-base rounded">
              Sign Out
            </button>
            <img
              className="rounded-full w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 max-sm:hidden"
              alt="avatar"
              src={user?.photoURL}
            />
          </div>
        )}
      </div>



    </>
  )
}

export default Header
