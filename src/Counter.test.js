import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders counter with initial value', () => {
  render(<Counter />);
  const counterElement = screen.getByText(/0/i);
  expect(counterElement).toBeInTheDocument();
});

test('increments counter', () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/incrementar/i);
  fireEvent.click(incrementButton);
  const counterElement = screen.getByText(/1/i);
  expect(counterElement).toBeInTheDocument();
});

test('decrements counter', () => {
  render(<Counter />);
  const incrementButton = screen.getByText(/incrementar/i);
  fireEvent.click(incrementButton); // incrementar para 1
  const decrementButton = screen.getByText(/decrementar/i);
  fireEvent.click(decrementButton);
  const counterElement = screen.getByText(/0/i);
  expect(counterElement).toBeInTheDocument();
});
