import { Link } from "react-router-dom";
import useLanguageStore from "../stores/LanguageStore";
import { useState } from "react";
import { LanguageT } from "../lib/types";
import { LANGLINKS, ROUTES } from "../lib/data";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const translations = useLanguageStore((state) => state.translations);

  const handleLanguage = (lang: LanguageT) => {
    setLanguage(lang);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <header className="shadow-sm py-2">
      <nav className="m-auto flex max-w-5xl items-center justify-between">
        <div>
          <Link className="link" to={ROUTES.HOME}>
            {translations[language][LANGLINKS.HOME]}
          </Link>
          <Link className="link" to={ROUTES.USERS}>
            {translations[language][LANGLINKS.USERS]}
          </Link>
          <Link className="link" to={ROUTES.NEWS}>
            {translations[language][LANGLINKS.NEWS]}
          </Link>
        </div>
        <div className="relative">
          <button className="link" onClick={() => toggleDropdown()}>
            {language}
          </button>
          {showDropdown && (
            <div className="absolute mt-2 space-y-2 bg-white border rounded-md">
              <button
                className="block px-4 py-2 w-full text-left"
                onClick={() => handleLanguage("English")}
              >
                English
              </button>
              <button
                className="block px-4 py-2 w-full text-left"
                onClick={() => handleLanguage("Español")}
              >
                Español
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
