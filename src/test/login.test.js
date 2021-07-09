import { shallow, mount } from 'enzyme';
import Login from '../pages/login';
import React from "react";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

describe('Login Headers Tag test', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  })

  test('render h1 tag text', () => {
    expect(wrapper.find('h1').text()).toContain("EMPLOYEE PAYROLL");
  })

  test('render h2 tag text', () => {
    expect(wrapper.find('h2').text()).toContain("LOGIN");
  })

});

describe('Login Elements availabity test', () => {

  test('check elements available', () => {
    const { getByTestId } = render(<Login />);
    const logo = getByTestId('avatar');
    const form = getByTestId('form');
    const email = getByTestId('email');
    const password = getByTestId('password');
    const button = getByTestId('button');

    expect(logo).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  test('check elements value', () => {
    const { getByTestId } = render(<Login />);
    const email = getByTestId('email');
    const password = getByTestId('password');
    const button = getByTestId('button')

    expect(email).toHaveTextContent('Email Address');
    expect(password).toHaveTextContent('Password');
    expect(button).toHaveTextContent('Login');
  });

});

