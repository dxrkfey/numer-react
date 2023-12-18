import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const math = require("mathjs");

var Fx;
var e,X,X1;

const mainDiv = {
    display: "flex",
    width: "100%",
    margin: "0 auto",
};

const DIV = {
    width: "100%",
    margin: "0 auto",   
};


class NewtonRaphson extends Component{
    
    Solution(){
        Fx = document.getElementById("fx").value;
        X1 = document.getElementById("x").value;
        X=X1;
        var i = 0;
        
        if(Fx !== "" && X !== ""){
            do{
            var FX = math.parse(Fx);
            var dfx = math.derivative(FX,'x').evaluate({x:X});
            var y = math.evaluate(Fx,{x:X});
                X1  = X - (y/dfx);
                e = math.evaluate(Fx,{x:X1});
                X=X1;
                i++;

                if(i>50000){
                    document.getElementById("showE").innerHTML="Can't find answer";
                    break;
                }

                
            }while(e>=0.000001)
            document.getElementById("showH").innerHTML="Result : ";
            document.getElementById("showX").innerHTML=X;
        } 
    }


    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={DIV}>
                        <h4>Newton Raphson</h4>
                        <Form>
                            <Form.Group className="mb-3">
                                <div> 
                                    <Form.Control id="fx" type="text"  placeholder="f(x)" style={{width:"20%", margin:"auto auto"}} ></Form.Control>
                                    <Form.Control id="x" type="number" step="1" placeholder="x" style={{width:"20%",margin:"auto auto"}} ></Form.Control>
                                    
                                </div>
                                <Button onClick={this.Solution}>
                                    Submit
                                </Button> 
                            </Form.Group>
                        </Form>
                        <div id = "showH"></div> 
                        <div id = "showX"></div>
                        <div id = "showE"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewtonRaphson;