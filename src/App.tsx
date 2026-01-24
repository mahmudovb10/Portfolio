import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import HomePage from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Navbar />
      <main>
        <HomePage />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
