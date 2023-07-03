/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import Login from './pages/Login/Login';
import Create from './pages/Create/Create';
import Sign from './pages/Sign/Sign';
import Profile from './pages/Profile/Profile';
import Business from './pages/Business/Business';
import ViewProfile from './pages/ViewProfile/ViewProfile';
export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
       
        <Route path="/login" component={Login}/>
        <Route path="/create" component={Create}/>
        <Route path="/sign" component={Sign}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/business" component={Business}/>
        <Route path="/viewprofile" component={ViewProfile}/>
        <Route component={NotFoundPage} />
      </Switch>
   
      <GlobalStyle />
    </BrowserRouter>
  );
}
