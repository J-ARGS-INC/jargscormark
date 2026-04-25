import { createBrowserRouter, Navigate } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Solutions from "../pages/Solutions";
import Industries from "../pages/Industries";
import CaseStudies from "../pages/CaseStudies";
import AIAgents from "../pages/AIAgents";
import ConsultingProcess from "../pages/ConsultingProcess";
import About from "../pages/About";
import Contact from "../pages/Contact";
import BookConsultation from "../pages/BookConsultation";
import LoopedAI from "../pages/LoopedAI";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        children: [
            { path: "", element: <Home /> },
            { path: "services", element: <Services /> },
            { path: "solutions", element: <Solutions /> },
            { path: "industries", element: <Industries /> },
            { path: "case-studies", element: <CaseStudies /> },
            { path: "ai-agents", element: <AIAgents /> },
            { path: "consulting-process", element: <ConsultingProcess /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            { path: "book-consultation", element: <BookConsultation /> },
            { path: "looped-ai", element: <LoopedAI /> },
            // Legacy redirects
            { path: "ai-services", element: <Navigate to="/services" replace /> },
            { path: "ai-solutions", element: <Navigate to="/solutions" replace /> },
            { path: "insights", element: <Navigate to="/case-studies" replace /> },
        ],
    },
]);
