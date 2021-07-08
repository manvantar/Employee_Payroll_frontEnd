import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router';
import Signup from '../pages/register'
import Login from '../pages/login'

describe('App test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  test('routing to login page', () => {
    const pathMap = wrapper.find(Route).reduce((pathMapp, route) => {
      const routeProps = route.props();
      pathMapp[routeProps.path] = routeProps.component;
      return pathMapp;
    }, {});
    expect(pathMap['/login']).toBe(Login);
  });

  test('routing to registration page', () => {
    const pathMap = wrapper.find(Route).reduce((pathMapp, route) => {
      const routeProps = route.props();
      pathMapp[routeProps.path] = routeProps.component;
      return pathMapp;
    }, {});
    expect(pathMap['/']).toBe(Signup);
  });

  test('routing to registration page', () => {
    const pathMap = wrapper.find(Route).reduce((pathMapp, route) => {
      const routeProps = route.props();
      pathMapp[routeProps.path] = routeProps.component;
      return pathMapp;
    }, {});
    expect(pathMap['/register']).toBe(Signup);
  });

})