import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const math = require("mathjs");


var X1;
var Xl;
var Xr;
var Fx;
var fx1,fxl,fxr;
var x,e;

const mainDiv = {
    display: "flex",
    width: "100%",
    margin: "0 auto",
};

const DIV = {
    width: "100%",
    margin: "0 auto",
};


class Falseposition extends Component{

    Solution(){
        Fx = document.getElementById("fx").value;
        Xl = document.getElementById("xl").value;
        Xr = document.getElementById("xr").value;
        

        if(Fx !== "" && Xl !== "" && Xr !== ""){
            do{
                fxr = math.evaluate(Fx,{x:Xr});
                fxl = math.evaluate(Fx,{x:Xl});
                X1 = ((Xl*fxr)-(Xr*fxl))/(fxr-fxl);
                fx1 = math.evaluate(Fx,{x:X1});
                e = Math.abs(fx1);


                if(Number(fx1*fxr)>0){
                    Xr = X1;
                }else{
                    Xl = X1;
                }

                console.log("X1")
            }while(e>=0.000001)
            
            document.getElementById("showH").innerHTML="Result : ";
            document.getElementById("showX").innerHTML=X1;
        }

    }


    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={DIV}>
                        <h4>False-Position</h4>
                        <Form>
                            <Form.Group className="mb-3">
                                <div> 
                                    <Form.Control id="fx" type="text"  placeholder="f(x)" style={{width:"20%", margin:"auto auto"}} ></Form.Control>
                                    <Form.Control id="xl" type="number" step="1" placeholder="xl" style={{width:"20%",margin:"auto auto"}} ></Form.Control>
                                    <Form.Control id="xr" type="number" step="1" placeholder="xr" style={{width:"20%",margin:"auto auto"}} ></Form.Control>
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

export default Falseposition;