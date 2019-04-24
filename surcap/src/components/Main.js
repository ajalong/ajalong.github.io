import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SearchPage1 from "./searchPages/SearchPage1";
import SearchPage2 from "./searchPages/SearchPage2";
import SearchPage3 from "./searchPages/SearchPage3";

//Loops
//C2
import C2_1 from "./loops/C2/C2_1";
import C2_2 from "./loops/C2/C2_2";
import C2_3 from "./loops/C2/C2_3";
import C2_4 from "./loops/C2/C2_4";
//SM
import SM_1 from "./loops/SM/SM_1";
import SM_2 from "./loops/SM/SM_2";
import SM_3 from "./loops/SM/SM_3";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      {/* Home */}
      <Route exact path="/" component={Home} />
      {/* Search pages */}
      <Route path="/searchpage1" component={SearchPage1} />
      <Route exact path="/searchpage2" component={SearchPage2} />
      <Route path="/searchpage3" component={SearchPage3} />
      {/* Loops */}
      {/* C2 */}
      <Route path="/c2_1" component={C2_1} />
      <Route path="/c2_2" component={C2_2} />
      <Route path="/c2_3" component={C2_3} />
      <Route path="/c2_4" component={C2_4} />
      {/* SM */}
      <Route path="/sm_1" component={SM_1} />
      <Route path="/sm_2" component={SM_2} />
      <Route path="/sm_3" component={SM_3} />
    </Switch>
  </main>
);

export default Main;
