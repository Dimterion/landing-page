import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
    </main>
  );
};

export default App;
