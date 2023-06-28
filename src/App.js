import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
function App() {
  const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);
  return <RouterProvider router={router} />;
}

export default App;
