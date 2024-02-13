import {
    createBrowserRouter,
  } from "react-router-dom";
import { ROUTES } from "./lib/data";
import UserList from "./components/Users/UserList";
import Create from "./components/Users/Create";
import UserView from "./components/Users/UserView";
import NewsList from "./components/News/NewsList";
import NewsView from "./components/News/NewsView";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import App from "./App";

export const router = createBrowserRouter([
    {
        path:ROUTES.HOME,
        element: <App/>,
        errorElement: <NotFound />,
        children:[
            {
                path:ROUTES.HOME, 
                element:<Home />
            },
            {
                path:ROUTES.USERS, 
                element:<UserList />
            },
            {
                path:ROUTES.CREATE_USER,
                element:<Create />
            },
            {
                path:ROUTES.VIEW_USER, 
                element:<UserView/>
            },
            {
                path:ROUTES.NEWS,
                element:<NewsList />,
            },
            {
                path:ROUTES.VIEW_NEWS, 
                element:<NewsView /> 
            },
        ]
    },
    
]);

