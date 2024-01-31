import { useParams } from "react-router-dom";
import { numericValue } from "../../lib/validation";
import { ZodError } from "zod";

import useNewsStore from "../../stores/NewsStore";
import H1 from "../UI/H1";

export default function NewsView() {
  const { id } = useParams();

  let errorMessage = "";
  let idSearch: number = 0;

  try {
    idSearch = numericValue.parse(id);
  } catch (error) {
    if (error instanceof ZodError) errorMessage = error.errors[0].message;
  }

  const { author, title, description } = useNewsStore((state) =>
    state.getNews(idSearch)
  );

  return (
    <>
      <H1>News View</H1>
      {errorMessage && (
        <p className="text-red-500 font-medium p-3">{errorMessage}</p>
      )}
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>

        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Author:</span> {author}
        </p>

        <p className="text-gray-700">{description}</p>
      </div>
    </>
  );
}
