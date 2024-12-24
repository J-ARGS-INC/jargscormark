import { createBrowserRouter } from "react-router-dom";
import Container from "../components/Container";
import Homepage from "../pages/Homepage";
import Services from "../pages/Services";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import BookACall from "../pages/BookACall";
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
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact_us",
                element: <ContactUs />
            },
            {
                path: "book_a_call/:type",
                element: <BookACall />
            }
        ]
    }
])