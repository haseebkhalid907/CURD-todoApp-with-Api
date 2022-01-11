import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";
import View from "./components/student/View.js";
import Edit from "./components/student/Edit.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/view/:id" component={View} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;