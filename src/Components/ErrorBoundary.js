import React from "react";
export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {    // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
      componentDidCatch(error, errorInfo) {
          console.error(error, errorInfo);
    }
    render() {
        if (this.state.error) {
            return <h1>Caught an error.</h1>
        }
        return <button onClick={this.handleClick}>Click Me</button>
    }
}