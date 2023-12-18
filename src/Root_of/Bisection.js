//import { evaluate } from "mathjs";
import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const math = require("mathjs");



var Xm;
var Xl;
var Xr;
var Fx;
var fxm,fxr;
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


class Bisection extends Component{

    Solution(){
        Fx = document.getElementById("fx").value;
        Xl = document.getElementById("xl").value;
        Xr = document.getElementById("xr").value;
        

        if(Fx !== "" && Xl !== "" && Xr !== ""){
            do{
                Xm = (Xl+Xr)/2
                fxr = math.evaluate(Fx,{x:Xr});
                fxm = math.evaluate(Fx,{x:Xm});
                e = Math.abs(fxm);


                if(Number(fxm*fxr)>0){
                    Xr = Xm;
                }else{
                    Xl = Xm;
                }
            }while(e>=0.000001)
            
            document.getElementById("showH").innerHTML="Result : ";
            document.getElementById("showX").innerHTML=Xm;
        }

    }


    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={DIV}>
                      <h4>Bisection</h4>
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

export default Bisection;