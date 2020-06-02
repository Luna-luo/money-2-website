import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Nav from 'components/Nav';
import Layout from 'components/Layout';





function App() {
  let router =
    <Router>
        <Switch>
          <Route path="/tags">
            <Tags/>
          </Route>
          <Route path="/money">
            <Money/>
          </Route>
          <Route path="/statistics">
            <Statistics/>
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>;
  return router;
}

function Tags() {
  return(
    <Layout>
      <h2>标签页面</h2>
    </Layout>
  );
}

function Money() {
  return(
    <Layout>
      <h2>记账页面</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页面</h2>
    </Layout>
  );
}

function NoMatch() {
  return (
    <div>页面不存在你丫输错了吧</div>
  )
}

export default App;
