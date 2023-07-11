import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import PlaceHolder from "./pages/PlaceHolder/PlaceHolder.jsx";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/placeholder", element: <PlaceHolder /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
