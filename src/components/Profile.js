import React, {useEffect , useState} from "react";

const Profile = () => {

    const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const userId = storedUser.id;

        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const userDetails = await response.json();

        setUserData(userDetails);
      } catch (error) {
        console.error('Error fetching user details:', error);
        // Handle error fetching user details
      }
    };

    // Call the fetchUserDetails function
    fetchUserDetails();
  }, []);
    return(
        <div className="login-div">
      {userData && (
        <div className="profile">
            <h1>Profile</h1>
            <img src={userData.image} alt="user-avatar"/>
          <p><b>User Id</b> : {userData.id}</p>
          <p><b>User Name</b> : {userData.username}</p>
        <p><b>Name</b> : {userData.firstName + userData.lastName}</p>
        <p><b>Email</b> : {userData.email}</p>
        <p><b>Gender</b> : {userData.gender}</p>
        </div>
      )}
        </div>
    )
}

export default Profile;