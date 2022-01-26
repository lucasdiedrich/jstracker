import { render } from '@testing-library/react';

import Deviceinfo from './deviceinfo';

describe('Deviceinfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Deviceinfo />);
    expect(baseElement).toBeTruthy();
  });
});
