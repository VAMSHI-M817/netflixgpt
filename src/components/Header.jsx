import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate()
  const user = useSelector((store) => store.user)



  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")

    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });

  }

  return (
    <div className="flex justify-between px-4 items-center w-full bg-gradient-to-b from-black z-10">
      <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" width={200} />

      {
        user && (<div className="flex gap-2">
          <button
            onClick={handleSignOut}
            type="button"
            className="bg-red-600 text-white p-2">
            Sign Out
          </button>
          <img alt="avatar" src={user?.avatar} width={100} />

        </div>)
      }

    </div>
  )
}

export default Header
