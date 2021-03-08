import React from 'react';
import { ContentWrapperElement, MainWrapperElement } from './elements';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header } from './Header/Header';
import { CountriesContainer } from '../../pages/Countries';

export const Main = () => {
  return (
    <MainWrapperElement>
      <Header />
      <ContentWrapperElement>
        <Router>
          <Switch>
            <Route path="/countries" exact component={CountriesContainer} />
          </Switch>
        </Router>
      </ContentWrapperElement>
    </MainWrapperElement>
  );
};
