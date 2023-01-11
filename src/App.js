import './index.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from "./pages/home";
import LevelStart from "./components/LevelStart";
import ErrorPage from "./components/ErrorPage";
import Lvl1 from "./pages/Lvl1";
import Lvl2 from "./pages/Lvl2";
import Lvl3 from "./pages/Lvl3";
import Lvl4 from "./pages/Lvl4";
import Lvl5 from "./pages/Lvl5";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/level/:level",
        element: <LevelStart/>,
    },
    {
        path: "/level/1/content",
        element: <Lvl1/>,
    },
    {
        path: "/level/2/content",
        element: <Lvl2/>,
    },
    {
        path: "/level/3/content",
        element: <Lvl3/>,
    },
    {
        path: "/level/4/content",
        element: <Lvl4/>,
    },
    {
        path: "/level/5/content",
        element: <Lvl5/>,
    },
]);

function App() {
    return (<>
        <RouterProvider router={router} />
</>);
}

export default App;
