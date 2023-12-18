import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const math = require("mathjs");


var fx1,fx0;
var X = [];
var X1,X0,e,x;

const mainDiv = {
    display: "flex",
    width: "100%",
    margin: "0 auto",
};

const DIV = {
    width: "100%",
    margin: "0 auto",
};


class Secant extends Component{
    Solution(){
    var Fx = document.getElementById("fx").value;
        X0 = document.getElementById("x").value;

        if(Fx !== "" && X !== ""){
            X1 = Math.random();
            do{
                fx0 = math.evaluate(Fx,{x:X0});
                fx1 = math.evaluate(Fx,{x:X1});
            var df = (X1-X0)/(fx1-fx0);
                X = X1 -fx1*df;
                X0 = X1;
                X1 = X;
                e = Math.abs(math.evaluate(Fx,{x:X}));
            }while(e>0.000001)
            document.getElementById("showH").innerHTML="Result : ";
            document.getElementById("showX").innerHTML=X;
        } 
    }


    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={DIV}>
                        <h4>Secant</h4>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Secant;