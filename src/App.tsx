import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main className="min-w-[350px]">
        <Navbar />
        <Toaster />
        <Outlet>
        </Outlet>
    </main>
  );
}

export default App;
