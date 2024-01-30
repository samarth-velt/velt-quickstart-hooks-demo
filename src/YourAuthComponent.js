import { useIdentify} from "@veltdev/react";
import { useState } from "react";

export default function YourAuthComponent() {
  const userService = () => {
    let randomNum = Math.floor(Math.random() * 10);
    return {
      uid: "user" + randomNum,
      displayName: "User: " + randomNum,
      email: "user" + randomNum + "@velt.dev",
      photoURL: "https://i.pravatar.cc/30" + randomNum + `?u=user${randomNum}@velt.dev`
    };
  };

  // Fetch user data from user service
  let yourAuthenticatedUser = userService();
  const { uid, displayName, email, photoURL } = yourAuthenticatedUser;

  // Create the Velt user object
  let veltUser = {
    userId: uid,
    name: displayName,
    email: email,
    photoUrl: photoURL,
    groupId: "theoffice2",
  };

  //identify Velt user
  useIdentify(veltUser)

  let [user,setUser] = useState(veltUser)

  return <div className="user">User: {user?.userId}</div>;
}
