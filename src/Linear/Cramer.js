import { isNumeric } from "mathjs";
import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const math = require("mathjs")


const mainDiv = {
    display: "flex",
    width: "100%",
    margin: "0 auto",
};

const DIV = {
    width: "100%",
    margin: "0 auto",
};

var A = [];
var B = [];
var Ainv = [];
//var Copy = [];
var X = [];

class Cramer extends Component{
    GetMatrix(){
        var size = document.getElementById("size").value;
        var inputM = '';
        for (var i=0;i<size;i++){
           for(var j=0;j<size;j++){
               inputM += '<input type="number" id="A'+i+j+'" style="width:50px"/>';
           }
           inputM += '<input type="number" id="B'+i+'" style="width:50px"/>';
           inputM += "<br>";
        }

        document.getElementById("showMatrixSize").innerHTML = "Matrix size : " + size + "x" +size;
        document.getElementById("inputMatrix").innerHTML = inputM;

    }

    Solution(){
        //console.log("1")
        var size = document.getElementById("size").value;
        for (var i=0;i<size;i++){
            A.push([]);
            B.push([]);
            //console.log("2")
            for(var j=0;j<size;j++){
                A[i].push(document.getElementById("A"+i+j+"").value);
                //console.log("3"+j)
            }
            //console.log("4"+i)
            B[i].push(document.getElementById("B"+i+"").value);
         }
        Ainv = math.inv(A);
         X = math.multiply(Ainv,B);
         //var C = [];
         //C = math.multiply(X,A);

         var print = '';
         var ppp ='';

         for(var i=0;i<size;i++){
            print += "X"+i+" = "+ X[i]+'<br>';
            ppp = "A"+"*"+"X"+" = "+math.multiply(A,X)+'<br>';
         }


         document.getElementById("X").innerHTML = print;
         document.getElementById("Z").innerHTML = ppp;
         /*console.log("5")
         for(var j=0;j<size;j++){
            for(var i=0;i<size;i++){
                Copy[i][j] = B[i];
                console.log("7"+i)
            }
            X += "X" + i + " = " + (math.det(Copy)/math.det(A)) + '<br>';
            console.log("8"+j)
         }
         console.log("9")
         document.getElementById("X").innerHTML = X;
         console.log("10")*/
    }



    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={DIV}>
                        <h4>Cramer's Rule</h4>
                        <Form>
                            <Form.Group className="mb-3">
                                <div> 
                                    <Form.Control id="size" type="number"  placeholder="Size of Matrix" style={{width:"10%", margin:"auto auto"}} onChange={this.GetMatrix} ></Form.Control>
                                </div>
                                <div id = "showMatrixSize"></div> 
                                <div id = "inputMatrix"></div>

                                <Button onClick={this.Solution}>Submit</Button> 
                            </Form.Group>
                        </Form>
                        <div id="X"></div>
                        <div id="Z"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cramer;