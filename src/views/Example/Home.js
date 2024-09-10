import React from "react";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/todo'); // Correctly accessing history from props
    }, 3000);
  }

  render() {
    return <div>Home Page</div>;
  }
}

export default withRouter(Home); // Wrap with withRouter
