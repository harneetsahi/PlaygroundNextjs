import axios from "axios";

async function Profile() {
  // better way to do data fetching inn nextjs and to make use of server side rendering, make direct axios reqs here instead of wrapping it in useeffect

  const res = await axios.get("http://localhost:3000/api/profile", {
    headers: {
      authorzation: localStorage.getItem("token"), // have to also save token in login code
    },
  });

  return (
    <>
      <div>User Profile</div>
    </>
  );
}

export default Profile;
