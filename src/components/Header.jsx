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
    <div className="flex justify-between px-4 items-center w-full bg-gradient-to-b from-black z-10">
      <img src={LOGO_URL} width={200} />

      {
        user && (<div className="flex gap-2">
          <button
            onClick={handleSignOut}
            type="button"
            className="bg-red-600 text-white p-2">
            Sign Out
          </button>
          <img
            className="rounded-full"
            alt="avatar" src={user?.photoURL} width={50} />

        </div>)
      }

    </div>
  )
}

export default Header
