import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import LandingPage from "./pages/landing_page";
import AboutPage from "./pages/about_page";
import NewsPage from "./pages/news";
import CGHRMCTRPage from "./pages/cghrmctr";
import TransparencySeal from "./pages/transparency_seal";
import Layout from "./components/layout";
import LayoutTr from "./components/layout-tr";
import OrgchartPage from "./pages/orgchart_page";
import ScoreCard from "./pages/scorecard";
import MultiSectorPage from "./pages/multi_sector";
import MediaPage from "./pages/media/index.js";
import StrategyManagementPage from "./pages/strat_management/index.js";
function App() {
  return (
    <div className=" h-screen w-screen font-montserrat">
      <HashRouter>
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
            path="/about-us"
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
          <Route
            path="/org-chart"
            element={
              <Layout>
                <OrgchartPage />
              </Layout>
            }
          />
          <Route
            path="/cghrmc-tr"
            element={
              <LayoutTr>
                <CGHRMCTRPage />
              </LayoutTr>
            }
          />
          <Route
            path="/transparency-seal"
            element={
              <Layout>
                <TransparencySeal />
              </Layout>
            }
          />
          <Route
            path="/scorecard"
            element={
              <LayoutTr>
                <ScoreCard />
              </LayoutTr>
            }
          />
          <Route
            path="/multi-sector"
            element={
              <LayoutTr>
                <MultiSectorPage />
              </LayoutTr>
            }
          />
          <Route
            path="/media"
            element={
              <LayoutTr>
                <MediaPage />
              </LayoutTr>
            }
          />
          <Route
            path="/strat-management"
            element={
              <LayoutTr>
                <StrategyManagementPage />
              </LayoutTr>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
