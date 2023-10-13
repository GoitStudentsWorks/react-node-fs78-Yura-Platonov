import { lazy } from "react";
import { Suspense } from "react"
import { HashRouter, Route, Routes } from "react-router-dom";


const Header = lazy(() => import('./header/header'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <HashRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<h1>My account</h1>} />
              <Route path="/calendar" element={<h1>Calendar</h1>} />
              <Route path="/statistics" element={<h1>Statistics</h1>} />
            </Routes>
          </main>
        </HashRouter>
      </Suspense>
    </>
  );
};