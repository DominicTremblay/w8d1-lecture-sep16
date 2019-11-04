import React from 'react';
import { render, prettyDOM } from '@testing-library/react';
import Filters from 'components/Filters';
import '@testing-library/jest-dom/extend-expect';

describe('Filters', () => {
  test('it renders without crashing', () => {
    render(<Filters />);
  });

  test('it renders with a filter', () => {
    const { debug, getByLabelText } = render(
      <Filters filters={{ Single: true }} />,
    );

    const checkbox = getByLabelText('Single');

    // console.log(prettyDOM(checkbox));

    expect(checkbox).toHaveAttribute('checked');
  });
});
