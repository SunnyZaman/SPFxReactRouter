import { IReactRouterTestProps } from './IReactRouterTestProps';
import { Link, HashRouter } from "react-router-dom";
import Router from './Router';
import React from 'react';

export default function ReactRouterTest(props: IReactRouterTestProps) {
  return (
    <HashRouter>
      <div>
        <Link to="/" style={{ marginRight: '5px' }}>
          Home
          </Link>
        <Link to="/about">
          Profile
          </Link>
      </div>
      <div>
        <Router />
      </div>
    </HashRouter>
  );
}
