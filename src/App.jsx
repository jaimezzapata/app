import Login from "./components/views/auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/views/pages/Home";
import Profile from "./components/views/pages/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
