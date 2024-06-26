import { useState } from "react";
import Layout from "./Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import User from "./components/user/User";
import Github,{githubInfoLoader} from "./components/github/Github";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/" element={<User />}>
          <Route path=":username" element={<User />} />
        </Route>
        <Route loader={githubInfoLoader} path="github" element={<Github />} />
        <Route
          path="*"
          element={
            <div className="text-center text-3xl text-white py-5 bg-gray-800">
              Not found
            </div>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
