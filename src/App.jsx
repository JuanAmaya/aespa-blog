import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Discography from "./pages/Discography";
import MusicVideos from "./pages/MusicVideos";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <NotFound />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/discography",
    element: <Discography />,
  },
  {
    path: "/musicvideos",
    element: <MusicVideos />,
  },
]);

function App() {
  return (
    <>
      <Header bannerENG={"AESPA"} bannerKOR={"에스파"} />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </>
  );
}

export default App;
