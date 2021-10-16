import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render Card component', () => {
  //* creating snap shots (Snapshot testing)
  //* incase another developer makes changes to the component
  expect(shallow(<Card />)).toMatchSnapshot();
})

// todo npm test -- --coverage