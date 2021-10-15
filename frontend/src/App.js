import { BrowserRouter as Router, Route  } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <h1>内容</h1>
      </main>
      <Footer/>
      </Router>
  );
}

export default App;
