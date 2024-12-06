import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import { lazy, Suspense } from "react";
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
          path: "service",
          element: <Service />,
        },
        {
          path: "studies",
          element: <Studies />,
        },
        {
          path: "case-study",
          element: <Study />,
        },
        {
          path: "about-us",
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

  return (
    <Suspense
      fallback={
        <div className="main">
          <div className="up">
            <div className="loaders">
              <div className="loader"></div>
              <div className="loader"></div>
              <div className="loader"></div>
              <div className="loader"></div>
              <div className="loader"></div>
              <div className="loader"></div>
              <div className="loader"></div>
              <div className="loader"></div>
              <div className="loader"></div>
              <div className="loader"></div>
            </div>
            <div className="loadersB">
              <div className="loaderA">
                <div className="ball0"></div>
              </div>
              <div className="loaderA">
                <div className="ball1"></div>
              </div>
              <div className="loaderA">
                <div className="ball2"></div>
              </div>
              <div className="loaderA">
                <div className="ball3"></div>
              </div>
              <div className="loaderA">
                <div className="ball4"></div>
              </div>
              <div className="loaderA">
                <div className="ball5"></div>
              </div>
              <div className="loaderA">
                <div className="ball6"></div>
              </div>
              <div className="loaderA">
                <div className="ball7"></div>
              </div>
              <div className="loaderA">
                <div className="ball8"></div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
