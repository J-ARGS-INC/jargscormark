import { createBrowserRouter } from "react-router-dom";
import Container from "../components/Container";
import Homepage from "../pages/Homepage";
import Services from "../pages/Services";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Container />,
        children: [
            {
                path: "",
                element: <Homepage />
            },
            {
                path: "services",
                element: <Services />
            }
        ]
    }
])