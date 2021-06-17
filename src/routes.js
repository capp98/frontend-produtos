import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import MainProduto from './pages/produto/main';
import DetalhesProduto from './pages/produto/detalhes'; 
import CriarProduto from './pages/produto/criar';
import EditarProduto from './pages/produto/editar';

const Routes = () => (
 
    <BrowserRouter>
        <Switch>
            <Route exact path="/produto" component={MainProduto} />
            <Route path="/produto/:id" component={DetalhesProduto} />
            <Route path="/criarProduto" component={CriarProduto} />
            <Route path="/editarProduto/:id" component={EditarProduto} />
        </Switch>
    </BrowserRouter>
)
 
export default Routes;
