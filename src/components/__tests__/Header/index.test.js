import React from 'react';
import { render } from '@testing-library/react';

import Header from '../../Header';

describe('Testing Header component', () => {
  it('should render correctly', () => {
    const wrapper = render(<Header />);

    expect(wrapper);
  });
});
