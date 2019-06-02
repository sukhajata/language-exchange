import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';
import ContentWithNavBar from '../components/ContentWithNavBar';


test('loads and displays', () => {    
    const toggleDrawer = jest.fn();
    const { getByText, getByTestId } = render(<ContentWithNavBar location='search'/>); 
    
})