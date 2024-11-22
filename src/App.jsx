import React from "react";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import { lazy } from "react";
const Home = lazy(() => import("./pages/home-page/home-page.jsx"));
const Services = lazy(() => import("./pages/services/services.jsx"));
const Service = lazy(() => import("./pages/service/service.jsx"));
const Studies = lazy(() => import("./pages/case-studies/case-studies.jsx"));
const Study = lazy(() => import("./pages/case-study/case-study.jsx"));
const About = lazy(() => import("./pages/aboout-us/about.jsx"));
const Careers = lazy(() => import("./pages/careers/careers.jsx"));
const Blog = lazy(() => import("./pages/blog/blog.jsx"));
const SinglePost = lazy(() => import("./pages/single-post/single-post.jsx"));
const Contacts = lazy(() => import("./pages/contacts/contacts.jsx"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "services",
          element: <Service />,
        },
        {
          path: "studies",
          element: <Studies />,
        },
        {
          path: "study",
          element: <Study />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "careers",
          element: <Careers />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "single-post",
          element: <SinglePost />,
        },
        {
          path: "contacts",
          element: <Contacts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
