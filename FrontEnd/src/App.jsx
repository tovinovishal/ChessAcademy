import Login from "./pages/login.jsx"
import "./assets/css/login.css";
import Signup from "./pages/signup.jsx";
import {RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner.jsx";
import MediaCard from "./pages/Card.jsx";
import FAQ from "./components/FAQ.jsx";
import TableWithEditOptions from "./components/Table.jsx";
import ProfileForm from "./components/ProfileForm.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import CustomSide from "./components/CustomSide.jsx";
import Profile from "./pages/UserProfile.jsx";
import Landingpage from "./pages/Landing.jsx";
import Yoga from "./Courses/c1.jsx";
import Institute from "./pages/Institute.jsx";
import Dashboard from "./components/Chart.jsx";





const LazyAbout=lazy(()=> import("./pages/About.jsx"));
const LazyContact=lazy(()=> import("./pages/Contact.jsx"));

function App() {
  const router = createBrowserRouter([
    {
        path:'/',
        element:<Landingpage/>
    },
    {
      path:`/login`,
      element:<Login/>
    },
    {
      path:`/signup`,
      element:<Signup/>
    },
    {
      path:`/home`,
      element:<Suspense fallback={<Spinner/>}><Home/></Suspense>
    },
    {
      path:`/contact`,
      element:<Suspense fallback={<Spinner/>}><LazyContact/></Suspense>
    },
    {
      path:`/about`,
      element:<Suspense fallback={<Spinner/>}><LazyAbout/></Suspense>
    },
    {
      path:`/card`,
      element:<Suspense fallback={<Spinner/>}><MediaCard/></Suspense>
    },
   
    {
      path:`/faq`,
      element:<Suspense fallback={<Spinner/>}><FAQ/></Suspense>
    },
    {
      path:`/table`,
      element:<Suspense fallback={<Spinner/>}><TableWithEditOptions/></Suspense>
    },
    {
      path:`/pform`,
      element:<Suspense fallback={<Spinner/>}><ProfileForm/></Suspense>
    },
    {
      path:`/adminlogin`,
      element:<Suspense fallback={<Spinner/>}><AdminLogin/></Suspense>
    },
    {
      path:`/sidebar`,
      element:<CustomSide/>
    },
   
    {
      path:`/userprofile`,
      element:<Profile/>
    },
    {
      path:`/c1`,
      element:<Yoga/>
    },
    {
      path:`/institute`,
      element:<Institute/>
    },
    {
      path:`/chart`,
      element:<Dashboard/>
    }
  ])
  return (
    
    
    <>
      <RouterProvider router={router}/>
    </>
   
  )
}
export default App
