import useNewsStore from "../../stores/NewsStore";
import H1 from "../UI/H1";
import NewsItem from "./NewsItem";

export default function NewsList() {
  const NewsList = useNewsStore((state) => state.NewsList);

  return (
    <>
      <H1>News</H1>
      <hr />
      {NewsList.map(({ id, title, author }) => (
        <NewsItem key={id} id={id} title={title} author={author} />
      ))}
    </>
  );
}
