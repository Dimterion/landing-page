import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Pricing from "./components/pricing";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Info />
    </main>
  );
};

export default App;
