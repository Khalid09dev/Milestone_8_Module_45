import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, username, email} = user;
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <h2>username: {username}</h2>
            <h2>email: {email}</h2>
        </div>
    );
};

export default UserDetails;