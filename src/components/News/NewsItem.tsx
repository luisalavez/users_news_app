import { Link } from "react-router-dom";
import useLanguageStore from "../../stores/LanguageStore";
import { LANGACTIONS } from "../../lib/data";

type NewsItemProps = {
    id:number;
    author:string;
    title:string;
}

export default function NewsItem({id, author, title,}:NewsItemProps) {
  const language = useLanguageStore((state) => state.language);
  const translations = useLanguageStore((state) => state.translations);
  return (
    <section className="flex gap-2 rounded-lg my-1 border p-2 hover:bg-slate-300 transition-all">
      
      <div className="flex flex-col p-4 w-full sm:flex-row sm:justify-between">
        <p className="flex flex-col items-start">
          <span>
            <b>Title: </b>
            {title}
          </span>
          <span>
            <b>author: </b>
            {author}
          </span>
        </p>
        <Link className="button" to={`/news/${id}`}>{translations[language][LANGACTIONS.VIEW_NEWS]}</Link>
      </div>
    </section>
  )
}
