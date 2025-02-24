import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import PlanPurchasePage from "./Pages/PlanPurchase";

function App() {
   return (
      <>
         <Navbar />
         <BrowserRouter>
            <Switch>
               <Route exact path="/">
                  <Home />
               </Route>

               <Route path="/planPurchase">
                  <PlanPurchasePage />
               </Route>
            </Switch>
         </BrowserRouter>
         <Footer />
      </>
   );
}

export default App;
