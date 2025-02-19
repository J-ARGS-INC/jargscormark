import { createBrowserRouter, Navigate } from "react-router-dom";
import Container from "../components/Container";
import Homepage from "../pages/Homepage";
import Services from "../pages/Services";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import BookACall from "../pages/BookACall";
import CaseStudies from "../pages/CaseStudies";
import CaseStudy from "../pages/CaseStudy";
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
                path: "grow_your_sales",
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
            },
            {
                path: "case_studies",
                element: <CaseStudies />
            },
            {
                path: "case_studies/:id",
                element: <CaseStudy />
            },
            {
                path: "*",
                element: <Navigate to={"/"} replace />

            }
        ]
    }
])