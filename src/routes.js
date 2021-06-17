import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import MainProduto from './pages/produto/main';
import DetalhesProduto from './pages/produto/detalhes'; 

const Routes = () => (
 
    <BrowserRouter>
        <Switch>
            <Route exact path="/produto" component={MainProduto} />
            <Route path="/produto/:id" component={DetalhesProduto} />
        </Switch>
    </BrowserRouter>
)
 
export default Routes;
