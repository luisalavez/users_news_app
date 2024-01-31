import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import UserList from "./components/Users/UserList";
import NewsList from "./components/News/NewsList";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import UserView from "./components/Users/UserView";
import NewsView from "./components/News/NewsView";
import Create from "./components/Users/Create";
import { Toaster } from "react-hot-toast";
import { ROUTES } from "./lib/data";

function App() {
  return (
    <main className="min-w-[350px]">
      <Router>
        <Navbar />
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.USERS} index element={<UserList />} />
            <Route path={ROUTES.CREATE_USER} index element={<Create />} />
            <Route path={ROUTES.VIEW_USER} element={<UserView/>} />
            <Route path={ROUTES.NEWS} element={<NewsList />} />
            <Route path={ROUTES.VIEW_NEWS} element={<NewsView />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </main>
  );
}

export default App;
