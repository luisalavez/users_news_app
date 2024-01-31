import { Link } from "react-router-dom";
import useLanguageStore from "../../stores/LanguageStore";
import { LANGACTIONS } from "../../lib/data";

type UserItemProps = {
  id: number;
  firstName: string;
  lastName: string;
};

export default function UserItem({ id, firstName, lastName }: UserItemProps) {
  const language = useLanguageStore((state) => state.language);
  const translations = useLanguageStore((state) => state.translations);
  return (
    <section className="flex gap-2  rounded-lg my-1 border p-2 hover:bg-slate-300 transition-all">
      <img
        className="block m-2"
        width={50}
        height={50}
        src={"https://robohash.org/2806:250:12a:bc22:1c22:55f2:40:efd5.png"}
        alt={`phot-${id}`}
      />
      <div className="flex flex-col p-4 w-full sm:flex-row sm:justify-between">
        <p className="flex flex-col items-start">
          <span>
            <b>First Name: </b>
            {firstName}
          </span>
          <span>
            <b>Last Name: </b>
            {lastName}
          </span>
        </p>
        <Link className="button" to={`/users/${id}`}>
          {translations[language][LANGACTIONS.VIEW_USER]}
        </Link>
      </div>
    </section>
  );
}
