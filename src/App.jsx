import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./router/AppRouter";

import { Footer } from "./sections/Footer";
import { NavBar } from "./sections/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
