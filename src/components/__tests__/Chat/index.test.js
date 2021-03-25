import React from 'react';
import { render } from '@testing-library/react';

import Chat from '../../Chat';

describe('Testing Chat component', () => {
  it('should render correctly', () => {
    const wrapper = render(<Chat />);

    expect(wrapper).toMatchSnapshot();
  });
});
