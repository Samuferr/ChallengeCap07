import NavBar from "componentes/NavBar";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
    <NavBar />
    <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/products">
            <Catalog />
        </Route>
    </Switch>
    </BrowserRouter>
);

export default Routes;