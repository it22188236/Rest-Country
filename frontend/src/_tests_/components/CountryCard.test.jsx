// import '@testing-library/jest-dom';
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import CountryCard from './CountryCard';
// import { MemoryRouter } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// // ✅ Mock useNavigate from react-router-dom
// jest.mock('react-router-dom', () => {
//   const actual = jest.requireActual('react-router-dom');
//   return {
//     ...actual,
//     useNavigate: jest.fn(),
//   };
// });

// describe('CountryCard', () => {
//   const mockNavigate = jest.fn();

//   beforeEach(() => {
//     useNavigate.mockReturnValue(mockNavigate); // Mock the navigate function
//     mockNavigate.mockClear(); // Clear calls before each test
//   });

//   const countryMock = {
//     name: { common: 'Japan' },
//     region: 'Asia',
//     flags: { png: 'https://flagcdn.com/w320/jp.png' },
//   };

//   test('renders country information correctly', () => {
//     render(
//       <MemoryRouter>
//         <CountryCard country={countryMock} />
//       </MemoryRouter>
//     );

//     // Check text content
//     expect(screen.getByText('Japan')).toBeInTheDocument();
//     expect(screen.getByText(/Region:/i)).toBeInTheDocument();

//     // Check image alt text
//     expect(screen.getByAltText('Flag of Japan')).toBeInTheDocument();
//     expect(screen.getByRole('img')).toHaveAttribute('src', countryMock.flags.png);
//   });

//   test('navigates to country detail page on click', () => {
//     render(
//       <MemoryRouter>
//         <CountryCard country={countryMock} />
//       </MemoryRouter>
//     );

//     // Simulate click
//     fireEvent.click(screen.getByText('Japan'));

//     // Expect navigation with encoded country name
//     expect(mockNavigate).toHaveBeenCalledWith('/Japan');
//   });
// });
