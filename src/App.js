import './index.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from "./pages/home";
import LevelStart from "./components/LevelStart";
import ErrorPage from "./components/ErrorPage";
import Levels from "./components/Levels";


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
        path: "/level/:level/content",
        element: <Levels/>,
    },
    // {
    //     path: "/level/2/content",
    //     element: <Skills/>,
    // },
    // {
    //     path: "/level/3/content",
    //     element: <Showcase/>,
    // },
    // {
    //     path: "/level/4/content",
    //     element: <Experience/>,
    // },
    // {
    //     path: "/level/5/content",
    //     element: <Edu/>,
    // },
]);

function App() {
    return (<>
        <RouterProvider router={router} />
</>);
}

export default App;
