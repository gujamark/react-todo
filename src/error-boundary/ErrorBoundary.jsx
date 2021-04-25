import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.error) {
      return <h1> Error </h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
