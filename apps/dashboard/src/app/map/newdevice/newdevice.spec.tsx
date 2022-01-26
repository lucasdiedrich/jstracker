import { render } from '@testing-library/react';

import Newdevice from './newdevice';

describe('Newdevice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Newdevice />);
    expect(baseElement).toBeTruthy();
  });
});
