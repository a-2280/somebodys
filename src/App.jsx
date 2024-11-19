import Header from "./components/Header";
import Contact from "./components/Contact";
import Body from "./components/Body";

function App() {
  return (
    <div className="h-screen w-screen p-4 flex flex-col justify-around">
      <Header />
      <Body />
      <Contact />
    </div>
  );
}

export default App;
