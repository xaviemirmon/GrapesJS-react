import React from 'react';
import { Card, Text } from 'theme-ui';
 
class Listing extends React.Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0
    };
  }

  updateCounter() {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1
    });
  }

  componentDidMount() {
    setInterval(this.updateCounter.bind(this), 1000);
  }

  render() {
    const { props, state } = this;
    const { mlsid, children } = props;
    const { counter } = state;

    return (
      <div>
        <div>Mlsid: {mlsid}</div>
        <div>{children}</div>
        <div>Counter: {counter}</div>
        <Card>
          <Text>Card</Text>
        </Card>
      </div>
    );
  }
}

export default Listing;
