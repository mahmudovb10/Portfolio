import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import HomePage from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen transition-colors duration-300">
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
