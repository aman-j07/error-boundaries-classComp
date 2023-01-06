import React from "react";

interface IProps {
  children:React.ReactNode,
  generate:()=>void,
  random:number
}

interface IState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props:IProps) {
      super(props);
      this.state = { hasError: false};
    }
  
    static getDerivedStateFromError(error:unknown) {
      return { hasError: true};
    }
  
    componentDidCatch(error:unknown) {
      console.log(error)
    }
  
    render() {
      if (this.state.hasError) {
        return <><h1>Something went wrong</h1><button onClick={()=>{this.setState({hasError:false},()=>this.props.generate())}}>Reset</button></>;
      }
  
      return this.props.children; 
    }
  }