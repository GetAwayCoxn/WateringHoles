import { useContext } from "react"
import { UserContext } from "../App"

const Profile = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
          <h1>Profile for {user}</h1>
    </div>
  )
}

export default Profile
