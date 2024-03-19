import { useSelector } from "react-redux";

const UserList = () => {
    const users = useSelector(state => state.users)

    return (
        <div>
            <h1>yo liste</h1>
        </div>
    )
}

export default UserList