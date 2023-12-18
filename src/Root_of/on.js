import { Component } from "react";
import { Form, FormControl, FormGroup } from "react-bootstrap";

var Fx,fx,X,x,X1,e;

class on extends Component{


    Solution(){
    Fx = document.getElementById("fx").value;
    X1 = document.getElementById("x").value;

    while(e>0.000001){
        x = X1;
        fx = eval(Fx);
        X1 = fx;
        e = Math.abs(fx);
    }
    console.log("X = "+X1);
    }
    render(){
        return(
            <div>
                <Form>
                    <Form.Group>
                        <div>
                        <Form.Control id = "fx" type = "text" placeholder="f(x)"></Form.Control>
                        <Form.Control id = "x" type = "number" placeholder="x"></Form.Control>
                        </div>
                    </Form.Group>
                    <Button onClick = {this.Solution}></Button>
                </Form>
            </div>
        )
    }
}