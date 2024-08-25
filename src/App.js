import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import LandingPage from "./pages/landing_page";
import AboutPage from "./pages/about_page";
import NewsPage from "./pages/news";
import CGHRMCTRPage from "./pages/cghrmctr";
import TransparencySeal from "./pages/transparency_seal";
import Layout from "./components/layout";
// import LayoutTr from "./components/layout-tr";
import OrgchartPage from "./pages/orgchart_page";
import ScoreCard from "./pages/scorecard";
import MultiSectorPage from "./pages/multi_sector";
import MediaPage from "./pages/media/index.js";
import StrategyManagementPage from "./pages/strat_management/index.js";
import COPage from "./pages/leadership/co/index.js";
import CEPage from "./pages/leadership/ce/index.js";
import DeputyPage from "./pages/leadership/deputy/index.js";
import OSM from "./pages/osm_page/index.js";
// import MeasureAndTargetProfilePage from "./pages/tutorials/measure_and_target_profile/index.js";
// import PerformanceScoreCard from "./pages/tutorials/performance_scoreboard/index.js";
// import PerformanceScorecardChardUpdatePage from "./pages/tutorials/performance_scorecard_chart_updating/index.js";
// import OperationReviewPage from "./pages/tutorials/operation_review/index.js";
// import StrategyReviewPage from "./pages/tutorials/strategy_review/index.js";
import TutorialsPage from "./pages/media/tutorials/index.js";
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
              <Layout>
                <CGHRMCTRPage />
              </Layout>
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
              <Layout>
                <ScoreCard />
              </Layout>
            }
          />
          <Route
            path="/multi-sector"
            element={
              <Layout>
                <MultiSectorPage />
              </Layout>
            }
          />
          <Route
            path="/media"
            element={
              <Layout>
                <MediaPage />
              </Layout>
            }
          />
          <Route
            path="/strat-management"
            element={
              <Layout>
                <StrategyManagementPage />
              </Layout>
            }
          />
          <Route
            path="/leadership/co"
            element={
              <Layout>
                <COPage />
              </Layout>
            }
          />
          <Route
            path="/leadership/ce"
            element={
              <Layout>
                <CEPage />
              </Layout>
            }
          />
          <Route
            path="/leadership/deputy"
            element={
              <Layout>
                <DeputyPage />
              </Layout>
            }
          />
          <Route
            path="/media/tutorials"
            element={
              <Layout>
                <TutorialsPage />
              </Layout>
            }
          />
          <Route
            path="/osm"
            element={
              <Layout>
                <OSM />
              </Layout>
            }
          />
          {/* <Route
            path="/tutorials/performance-scorecard"
            element={
              <Layout>
                <PerformanceScoreCard />
              </Layout>
            }
          />
          <Route
            path="/tutorials/measure-and-target-profile"
            element={
              <Layout>
                <MeasureAndTargetProfilePage />
              </Layout>
            }
          />
          <Route
            path="/tutorials/performance-scorecard-chat-updating"
            element={
              <Layout>
                <PerformanceScorecardChardUpdatePage />
              </Layout>
            }
          />
          <Route
            path="/tutorials/operation-review"
            element={
              <Layout>
                <OperationReviewPage />
              </Layout>
            }
          />
          <Route
            path="/tutorials/strategy-review"
            element={
              <Layout>
                <StrategyReviewPage />
              </Layout>
            }
          /> */}
        </Routes>
      </HashRouter>
    </div>
  );
}

// {
//   label: "PERFORMANCE SCORECARD",
//   path: "/tutorials/performance-scorecard",
// },
// {
//   label: "MEASURE AND TARGET PROFILE",
//   path: "/tutorials/measure-and-target-profile",
// },
// {
//   label: "PERFORMANCE SCORECARD CHART UPDATING",
//   path: "/tutorials/performance-scorecard-chat-updating",
// },
// {
//   label: "OPERATION REVIEW",
//   path: "/tutorials/operation-review",
// },
// {
//   label: "STRATEGY REVIEW",
//   path: "/tutorials/strategy-review",
// },
export default App;
