import { Link } from "react-router-dom";
import { useUsersStore } from "../../stores/UsersStore";
import H1 from "../UI/H1";
import UserItem from "./UserItem";
import useLanguageStore from "../../stores/LanguageStore";
import { LANGACTIONS, ROUTES } from "../../lib/data";

export default function UserList() {
  const UserList = useUsersStore((state) => state.UserList);
  const language = useLanguageStore((state) => state.language);
  const translations = useLanguageStore((state) => state.translations);

  return (
    <>
      <H1>Users</H1>
      <hr />
      <Link className="button" to={ROUTES.CREATE_USER}>
        {translations[language][LANGACTIONS.CREATE]}
      </Link>
      {UserList.map(({ id, firstName, lastName }) => (
        <UserItem key={id} id={id} firstName={firstName} lastName={lastName} />
      ))}
    </>
  );
}
