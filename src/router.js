import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },

    {
        path: "/register",
        // element: <Home />,
    },

    {
        path: "/login",
        // element: <Home />,
    },
]);

export default router;