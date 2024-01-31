import { useForm } from "react-hook-form";
import { userSchema } from "../../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserT } from "../../lib/types";
import { useUsersStore } from "../../stores/UsersStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LANGACTIONS, ROUTES } from "../../lib/data";
import useLanguageStore from "../../stores/LanguageStore";

type UserFormProps = UserT;

export default function UserForm({
  id,
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
}: UserFormProps) {
  const userStore = useUsersStore();
  const userExist = !!id;
  const navigate = useNavigate();
  const language = useLanguageStore((state) => state.language);
  const translations = useLanguageStore((state) => state.translations);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserT>({
    resolver: zodResolver(userSchema),
    defaultValues:{
      "id": id,
      "firstName": firstName.trim(),
      "lastName": lastName.trim(),
      "email": email,
      "phoneNumber": phoneNumber,
      "address": address.trim()
    }
  });

  const onSubmit = async (data: UserT) => {
    if (userExist) {
      userStore.updateUser(data);
    } else {
      const newUser = {
        ...data,
        id: userStore.generateId(),
      };
      userStore.addUser(newUser);
    }
    toast.success(userExist ? "User updated" : "user created", {
      position: "top-right",
      duration: 4000,
    });
    navigate(ROUTES.USERS);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <input type="text" {...register("id")} hidden />
      <input
        type="text"
        {...register("firstName")}
        placeholder="firstName"
        className="input-text px-4 py-2 rounded"
      />
      {errors.firstName && (
        <p className="text-red-500">{`${errors.firstName?.message}`}</p>
      )}
      <input
        type="text"
        {...register("lastName")}
        placeholder="lastName"
        className="input-text px-4 py-2 rounded"
      />
      {errors.lastName && (
        <p className="text-red-500">{`${errors.lastName?.message}`}</p>
      )}
      <input
        type="email"
        {...register("email")}
        placeholder="email"
        className="input-text  px-4 py-2 rounded"
      />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}
      <input
        type="text"
        {...register("phoneNumber")}
        placeholder="phoneNumber"
        className="input-text  px-4 py-2 rounded"
      />
      {errors.phoneNumber && (
        <p className="text-red-500">{`${errors.phoneNumber?.message}`}</p>
      )}
      <input
        type="text"
        {...register("address")}
        placeholder="address"
        className="input-text px-4 py-2 rounded"
      />
      {errors.address && (
        <p className="text-red-500">{`${errors.address?.message}`}</p>
      )}
      <button type="submit" disabled={isSubmitting} className="button">
      {translations[language][LANGACTIONS.SAVE]}
      </button>
    </form>
  );
}
