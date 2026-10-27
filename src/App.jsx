import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-background h-dvh w-full relative overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary">
      <Auth></Auth>
    </div>
  );
}

export default App;
