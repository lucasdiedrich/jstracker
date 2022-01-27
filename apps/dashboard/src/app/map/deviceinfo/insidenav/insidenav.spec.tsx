import { render } from '@testing-library/react';

import Insidenav from './insidenav';

describe('Insidenav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Insidenav />);
    expect(baseElement).toBeTruthy();
  });
});
