import React, { Component, Fragment } from 'react';
import Menu from './Menu';
import List from './List';
import Print from './Print';
import ListItem from './ListItem';


class App extends Component {

  render() {
    const cities = ['Atlanta', 'New York', 'Chicago'];
    const countries = ['India', 'USA', 'UK'];
    return (
      <Fragment>

        <div id="1">First
          <Menu items={cities} />
        </div>

        <div id="2">Second
          <List>
            {
              countries.map((country, index) => {
                return <li key={index}>{country}</li>;
              })
            }
          </List>
        </div>

        <div id="3">Third
          <List>
            <List.Item>Cricket</List.Item>
            <List.Item>Football</List.Item>
            <List.Item>Tennis</List.Item>
          </List>
        </div>

        <div id="4">Forth
          <List>
            <ListItem>Ferrari</ListItem>
            <ListItem>Toyota</ListItem>
            <ListItem>Honda</ListItem>
          </List>
        </div>

        <div id="4">Fifth
          <List>
            <List.PrintItem />
          </List>
        </div>

      </Fragment>


    );
  }
}

export default App;
