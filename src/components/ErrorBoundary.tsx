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
        return <><h2 className="text-danger">Something went wrong!</h2><h4>Random Number : {this.props.random} (Less than 5)</h4><button className="border-1" onClick={()=>{this.setState({hasError:false},()=>this.props.generate())}}>Re-Generate</button></>;
      }
  
      return this.props.children; 
    }
  }