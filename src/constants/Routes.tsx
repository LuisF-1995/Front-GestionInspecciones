import Home from "@/pages";
import Company from "@/pages/company/Company";
import { createBrowserRouter } from "react-router-dom";

export const company = {
    path: "company",
    element: <Company/>
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children: [
            company
        ]
    }
])