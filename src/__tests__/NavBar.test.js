import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';
import NavBar from '../components/NavBar';

const toggleDrawer = jest.fn();


test('loads and displays', () => {    
    const { getByText, getByTestId } = render(<NavBar toggleDrawer={toggleDrawer} sideNavOpen={false}/>); 
    expect(getByText('Everyday Thai')).toBeInTheDocument();

    fireEvent.click(getByTestId('menu-button'));
    expect(toggleDrawer).toHaveBeenCalledTimes(1);
})