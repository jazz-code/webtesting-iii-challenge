import React from 'react';
import * as rtl from '@testing-library/react';
import Dashboard from "./Dashboard";

it('shows the controls and display', () => {
  const wrapper = rtl.render(<Dashboard />);
});

