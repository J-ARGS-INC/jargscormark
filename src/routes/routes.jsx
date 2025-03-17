import { createBrowserRouter, Navigate } from "react-router-dom";
import Container from "../components/Container";
import Homepage from "../pages/Homepage";
import Services from "../pages/Services";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import BookACall from "../pages/BookACall";
import Offers from "../pages/Offers";
import SocialMediaMarketing from "../pages/SocialMediaMarketing";

import CaseStudies from "../pages/CaseStudies";
import CaseStudy from "../pages/CaseStudy";
import Case_Study from "../pages/admin/CaseStudy";
import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import MetaAds from "../pages/MetaAds";
import BrandingWebsite from "../pages/BrandingWebsite";
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
                path: "offers",
                element: <Offers />
            },
            {
                path: "offers/social-media-marketing",
                element: <SocialMediaMarketing />,
            },
            {
                path: "offers/meta-ads",
                element: <MetaAds />,
            },
            {
                path: "offers/branding-website",
                element: <BrandingWebsite />,
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
    },
    {
        path: "/admin",
        children: [
            {
                path: "",
                element:
                    <Login />
            },
            {
                path: "dashboard",
                element:
                    <Dashboard />
                ,
                children: [
                    {
                        path: "",
                        element: <Case_Study />
                    }
                ]
            }

        ]
    }
])