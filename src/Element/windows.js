import {React,Component} from "react";

class Windows extends Component {
    constructor() {
        super();
        console.log("contructor called");
    }
    componentDidMount() {
        console.log("componentDidMount called");
    }
    render() {
        console.log("render called")
        console.log("this.props.ans = "+this.props.ans);
        // console.log("this.props.num = "+this.props.num);
        // console.log("this.props.root = "+this.props.root);
        return (
            
            <div >
                <h3>This is Windows</h3>
                <h3>X = {this.props.X}</h3>
                <h3>{this.props.Equation}</h3>
                <h3>{this.props.ans}</h3>
            </div>
        );
    }
}
export default Windows;
