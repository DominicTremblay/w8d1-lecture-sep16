import React from 'react';
import {
  render,
  prettyDOM,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import LiveSearch from 'components/LiveSearch';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { data } from '../../lib/data';
jest.mock('axios');

describe('LiveSearch', () => {
  it('renders without crashing', () => {
    render(<LiveSearch />);
  });

  it('renders the corresponding data of an artist', async () => {
    const { getByPlaceholderText, getByText } = render(<LiveSearch />);

    const search = getByPlaceholderText(/search artists/i);

    fireEvent.change(search, { target: { value: 'Riles' } });
    axios.get.mockResolvedValue({ data });

    // console.log(prettyDOM(search));

    const result = await waitForElement(() => getByText('Vanity Plus Mind'));

    console.log(prettyDOM(result));

    expect(result).toBeInTheDocument();

    // console.log(prettyDOM(result));
  });
});
