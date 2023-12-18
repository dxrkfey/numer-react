import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const math = require("mathjs")


var Fx,fx;
var e,X=[],X1;

const mainDiv = {
    display: "flex",
    width: "100%",
    margin: "0 auto",
};

const DIV = {
    width: "100%",
    margin: "0 auto",
};


class Onepoint extends Component{
    Solution(){
        Fx = document.getElementById("fx").value;
        X1 = document.getElementById("x").value;
        if(Fx !== "" && X !== ""){
            var i = 0;
            X=X1;
            do{
                fx = math.evaluate(Fx,{x:X});
                e = Math.abs(fx);
                X = fx;
                i++;
                console.log("loop");

                if(i>100000){
                    document.getElementById("showE").innerHTML="LOOP";
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
                        <h4>One Point</h4>
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

export default Onepoint;
