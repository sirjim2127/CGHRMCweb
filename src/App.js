import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing_page";
import AboutPage from "./pages/about_page";
import NewsPage from "./pages/news";

import Layout from "./components/layout";
function App() {
  return (
    <div className=" h-screen w-screen font-montserrat">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <LandingPage />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <AboutPage />
              </Layout>
            }
          />
          <Route
            path="/news"
            element={
              <Layout>
                <NewsPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
