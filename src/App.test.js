import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('should render without crashing', () => {
  shallow(<App />);
});
