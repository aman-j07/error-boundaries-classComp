import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false};
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true};
    }
  
    componentDidCatch(error) {
      console.log(error)
    }
  
    render() {
      if (this.state.hasError) {
        return <><h1>Something went wrong</h1><button onClick={()=>{this.setState({hasError:false},()=>this.props.generate())}}>Reset</button></>;
      }
  
      return this.props.children; 
    }
  }