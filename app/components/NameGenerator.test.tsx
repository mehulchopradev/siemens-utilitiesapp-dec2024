import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NameGenerator from './NameGenerator';

import { generateFibonacciSeries } from '../utils/series';

describe('Name generator test suite', () => {

  // test cases
  test('the working of the fibo series utility function', () => {
    // test steps
    const n = 8; // test data
    const expected = [0, 1, 1, 2, 3, 5, 8, 13]; // expected 
    const actual = generateFibonacciSeries(n); // actual
    expect(actual).toEqual(expected); // assertion
  });

  test('NameGenerator component displays the props passed to it on various ui elements', () => {
    render(<NameGenerator firstName="John" lastName="Doe" />);

    // assertion
    expect(screen.getByTestId('firstName')).toHaveValue('John');
    expect(screen.getByTestId('lastName')).toHaveValue('Doe');
    expect(screen.getByTestId('fullName')).toHaveTextContent('JOHN DOE');
  });

  test('NameGenerator component updates the ui elements when the input fields are changed', () => {
    render(<NameGenerator firstName="" lastName="" />);

    // action
    const firstNameInput = screen.getByTestId('firstName');
    const lastNameInput = screen.getByTestId('lastName');

    fireEvent.input(firstNameInput, { target: { value: 'mehul' } });
    fireEvent.input(lastNameInput, { target: { value: 'chopra' } });

    // assertion
    expect(screen.getByTestId('fullName')).toHaveTextContent('MEHUL CHOPRA');
    expect(screen.getByTestId('firstName')).toHaveValue('mehul');
    expect(screen.getByTestId('lastName')).toHaveValue('chopra');
  });
});