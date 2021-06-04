import { useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

// Components
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { ThankYou } from "./pages/ThankYou";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/thankyou" component={ThankYou} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
