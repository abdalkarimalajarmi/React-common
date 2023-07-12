import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom";
import jobMatches from "./components/jobMatches";
import myJobs from "./components/myJobs";
import Applications from "./components/applications";
import savedSearches from "./components/savedSearches";
import personalInfo from "./components/personalInfo";
import accountSettings from "./components/accountSettings";
import CV from "./components/cv";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Body />} />
        <Route path="/jobMatches" element={jobMatches()} />
        <Route path="/myJobs" element={myJobs()} />
        <Route path="/applications" element={Applications()} />
        <Route path="/savedSearches" element={savedSearches()} />
        <Route path="/personalInfo" element={personalInfo()} />
        <Route path="/accountSettings" element={accountSettings()} />
        {/* <Route path="/cv" element={CV()} /> */}
      </Routes>
    </>
  );
}

export default App;

// <Router>
//   <Routes>
//     <p>dd</p>
//     {/* <Route path="/" element={Body()} />
//     <Route path="/jobMatches" element={jobMatches()} /> */}
//     {/* <Route path="/" element={} />
//   <Route path="/" element={} />
//   <Route path="/" element={()} />
//   <Route path="/" element={} />
//   <Route path="/" element={} />
//   <Route path="/" element={()} />
//   <Route path="/" element={} />
//   <Route path="/" element={} /> */}
//   </Routes>
// </Router>
