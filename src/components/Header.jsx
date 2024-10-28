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
      <div className="bg-transparent sticky top-0 flex items-center justify-between w-full">
        <img src={LOGO_URL} width={150} className="w-32 md:w-48" />

        {user && (
          <div className="flex items-center gap-2">
            <button
              onClick={handleSignOut}
              type="button"
              className="bg-red-600 text-white px-4 py-2 text-sm md:text-base">
              Sign Out
            </button>
            <img
              className="rounded-full w-8 h-8 md:w-12 md:h-12"
              alt="avatar"
              src={user?.photoURL} />
          </div>
        )}
      </div>


    </>
  )
}

export default Header
