import { useState } from "react";
import Header from "./components/Header.jsx";
import ColorSelector from "./components/Sidebar/ColorSelector.jsx";
import GradientType from "./components/Sidebar/GradientType.jsx";
import GradientAngle from "./components/Sidebar/GradientAngle.jsx";
import GradientPreview from "./components/MainContent/GradientPreview.jsx";
import CodeSnippet from "./components/MainContent/CodeSnippet.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-screen-2xl p-4 sm:p-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="space-y-5 lg:col-span-4">
            <ColorSelector />
            <GradientType />
            <GradientAngle />
          </aside>

          {/* Main Content */}
          <section className="lg:col-span-8 flex flex-col gap-6">
            <GradientPreview />
            <CodeSnippet />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
