import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import * as ReactDOM from "react-dom";
import Windows from "./windows";

const mainDiv = {
    display: "flex",
    width: "100%",
    margin: "0 auto",
};
const DIV = {
    width: "100%",
    margin: "0 auto",
};
const Windowsstyle = {
    width:"30%",
    height:"30vh",
    border:"1px solid black",
    borderRadius:"5px",
    margin:"0 0 0 65vw",
    position:"fixed",
};
var ans='ans',Equation='Equation',X='X';
class Home extends Component {
    stat = {Num:null,Rootof:null};
    constructor() {
        super();
        console.log("contructor called");
    }
    componentDidMount() {
        console.log("componentDidMount called");
    }
    getValue() {
        var equation = document.getElementById("equation").value;
        var x = document.getElementById("InputX").value;
        Equation=equation;
        X=x;
        console.log("equation");
        console.log(x);
        ans=eval(equation);
        document.getElementById("showEquation").innerHTML=Equation;
        document.getElementById("showX").innerHTML=X;
        ReactDOM.createRoot(document.getElementById("window")).render(<Windows  ans={ans} Equation={Equation} X={X}/>);
    }
    createinputMatrics=()=>{
        var Size = document.getElementById("Matsize").value;
        var MatString='';
        for (var i=0; i<Size; i++) {
            for (var j=0; j<Size; j++) {
                MatString+="<input id='input"+i+j+"' type='number' step='1' placeholder='Number' style= 'width:20%;margin:0 auto;'/>"
            } MatString+="<input id='inputans"+i+j+"' type='number' step='1' placeholder='Number' style= 'width:20%;margin:0 auto;'/><br>";
        }
        console.log(MatString);
        document.getElementById("Matricsinput").innerHTML=MatString;
    }

    render() {
        console.log("render called")
        return (
            <div>
                <div style={mainDiv}>
                    <div style={DIV}>
                        <h3>This is Home</h3>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    input number
                                </Form.Label>
                                <div> 
                                    <Form.Control id="equation" type="text"  placeholder="equation" style={{width:"20%",margin:"0 auto"}} ></Form.Control>
                                    <Form.Control id="InputX" type="number" step="1" placeholder="Input x" style={{width:"20%",margin:"0 auto"}} ></Form.Control>
                                </div>
                                <Button onClick={this.getValue}>
                                    Submit
                                </Button> 
                                <div id="Matricsinput"></div>
                            </Form.Group>
                        </Form>
                        
                        <div id="showEquation"></div>
                        <div id="showX"></div>
                    </div>
                    <div id="window" style={Windowsstyle}><Windows  ans={ans} Equation={Equation} X={X}/></div>
                    
                </div>
            </div>
        );
    }
}
export default Home;