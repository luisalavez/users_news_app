import { Link } from "react-router-dom";
import { useUsersStore } from "../../stores/UsersStore";
import H1 from "../UI/H1";
import UserItem from "./UserItem";


export default function UserList() {
  const UserList  = useUsersStore((state) => state.UserList);

  return (
    <>
        <H1>Users</H1>
        <hr/>
        <Link className="button" to="/users/create">Create User</Link>
        {UserList.map(({id, firstName, lastName }) => (
            <UserItem key={id} id={id} firstName={firstName} lastName={lastName}/>
        ))}
    </>
  )
}
