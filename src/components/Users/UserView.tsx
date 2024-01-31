import { useParams } from "react-router-dom";
import H1 from "../UI/H1";
import { numericValue } from "../../lib/validation";
import UserForm from "./UserForm";
import { UserT } from "../../lib/types";
import { useUsersStore } from "../../stores/UsersStore";
import { ZodError } from "zod";

export default function UserView() {
  const { id } = useParams();

  let errorMessage = "";
  let idSearch: number = 0;

  try {
    idSearch = numericValue.parse(id);
  } catch (error) {
    if (error instanceof ZodError) errorMessage = error.errors[0].message;
  }

  const getUser = useUsersStore((state) => state.getUser(idSearch));

  const alertMessage = !getUser ?"User not exist but you can create one.":"";

  const userFile: UserT = getUser || {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  };

  return (
    <>
      <H1>User Information</H1>
      {alertMessage && (
        <p className="text-orange-400 font-medium p-3">{alertMessage}</p>
      )}
      {errorMessage && (
        <p className="text-red-500 font-medium p-3">{errorMessage}</p>
      )}
      {!errorMessage && <UserForm {...userFile} />}
    </>
  );
}
