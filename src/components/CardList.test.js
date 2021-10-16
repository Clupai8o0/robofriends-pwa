import { shallow } from "enzyme";
import React from "react";
import CardList from './CardList';

it("expect to render CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John',
      username: 'Jesus',
      email: 'heyjohn@gamil.com'
    }
  ]

  //* creating snap shots (Snapshot testing)
  //* incase another developer makes changes to the component
  expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
});