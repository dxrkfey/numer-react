import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import * as ReactDOM from "react-dom/client";
import ApexChart from "./ApexChart";
import axios from "axios";
const math = require("mathjs")


var xData = []
var yData = []
var RealyEachX = []
var apidata = {"data":null};
const mainDiv = {
    display: "flex",
    width: "100%",
    margin: "0 auto",
};

const DIV = {
    width: "100%",
    margin: "0 auto",
};


class Linear extends Component{

async getapi(){
    const result = await axios.get('http://localhost:4000/realserve')
    apidata.data = result.data
    console.log(apidata.data)
    const form = ReactDOM.createRoot(document.getElementById("form"));
    form.render(
                    <div id="form">
                        <Form>
                            <Form.Group className="mb-3">
                                <div> 
                                    <Form.Control id="size" type="number"  placeholder="N" style={{width:"10%", margin:"auto auto"}} defaultValue={apidata.data[0].size}  ></Form.Control>
                                </div>
                                <div id = "inputValue"></div>
                                <Form.Control id="getX" type="number" value={apidata.data[0].x} placeholder="X" style={{width:"10%", margin:"auto auto"}}></Form.Control>
                            </Form.Group>
                        </Form>
                        </div>

    )
    var N = apidata.data[0].size
        var inputM = '';
        for (var i=0;i<N;i++){
            console.log(apidata.data[i+1].x)
            console.log(apidata.data[i+1].y)
           inputM += '<input type="number" id="X'+i+0+'" placeholder="X'+i+'" value='+apidata.data[i+1].x+' style="width:50px"/>';
           inputM += '<input type="number" id="X'+i+1+'" placeholder="Y'+i+'" value='+apidata.data[i+1].y+' style="width:50px"/>';
           inputM += '<br>'
        }
        document.getElementById("inputValue").innerHTML = inputM;
}
componentDidMount(){
}
GetMatrix(){
        var N = document.getElementById("size").value;
        var inputM = '';
        for (var i=0;i<N;i++){
           inputM += '<input type="number" id="X'+i+0+'" placeholder="X'+i+'" style="width:50px"/>';
           inputM += '<input type="number" id="X'+i+1+'" placeholder="Y'+i+'" style="width:50px"/>';
           inputM += '<br>'
        }
        document.getElementById("inputValue").innerHTML = inputM;

    }

    Solution(){
        const showchart = ReactDOM.createRoot(document.getElementById("showchart"));
        //console.log("1")
        var n = document.getElementById("size").value
        var m = 1;
        var X = document.getElementById("getX").value;
        xData = []
        yData = []
        RealyEachX = []

        //set matrix
        var mat = new Array(n);
        for(let i = 0; i < n; i++){
            mat[i] = new Array(2);
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < 2; j++) {
                var NUM = document.getElementById("X"+i+j+"").value
                var num = Number(NUM)
                mat[i][j] = num
                if(j === 0 )
                    xData.push(num)
                else
                    yData.push(num)
            }
        }


        //calculate to get matrix
        //matrixA
        var matA = new Array(m);
        for(let i = 0; i < 2; i++){
            matA[i] = new Array(m);
        }
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 2; j++){
                //find ค่า
                if(i === 0 && j === 0){
                    matA[i][j] = n
                }
                else{
                    var sum = 0;
                    for (var k = 0; k < mat.length; k++){
                        sum += math.pow(mat[k][0],i+j)
                    }
                    matA[i][j] = sum
                    //console.log("x^"+(i+j)+"= "+sum)
                }
            }
        }
        console.table(matA)
    
        var matB = []
        //matrixB
        for (var i = 0; i < 2; i++){
            var sum = 0;
            for (var k = 0; k < mat.length; k++){
                sum += math.pow(mat[k][0],i) * mat[k][1]
            }
            matB[i] = sum
            //console.log("x^"+(i+j)+"= "+sum)
        }
        console.table(matB)

        var Ainv = math.inv(matA);
        var a = math.multiply(Ainv,matB)
        console.table(a)
        

        var print = '';
         var ppp ='';

         for(var i=0;i<2;i++){
            print += "a"+i+" = "+ a[i]+'<br>';
            ppp = "result = " + (a[0]+(a[1]*X));
         }

         var fx = a[0]+(a[1]*X)

         for(let i = 0; i < mat.length; i++){
            var sumYeachX = 0
            for (var j = 0; j < a.length; j++){
                sumYeachX += a[j] * math.pow(mat[i][0],j)
            }
            RealyEachX.push(sumYeachX)
        }


         document.getElementById("a").innerHTML = print;
         document.getElementById("gx").innerHTML = "g(x) = a0 + a1(x)";
         document.getElementById("gxx").innerHTML = ppp;


         showchart.render(
            <div>
                <ApexChart data ={{datax: xData, datay :yData, realy: RealyEachX}}/>
            </div>
        )

        
    }



    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={DIV}>
                        <h4>Linear Regression</h4>
                        <Button onClick={this.getapi}>getapi</Button>
                        <div id="form">
                        
                        <Form>
                         
                            <Form.Group className="mb-3">
                                <div> 
                                    <Form.Control id="size" type="number"  placeholder="N" style={{width:"10%", margin:"auto auto"}} onChange={this.GetMatrix} ></Form.Control>
                                </div>
                                
                                <Form.Control id="getX" type="number"  placeholder="X" style={{width:"10%", margin:"auto auto"}}></Form.Control>
                                
                            </Form.Group>
                        </Form>
                        </div>
                        <div id = "inputValue"></div>
                        <Button onClick={this.Solution}>Submit</Button> 
                        <div id="gx"></div>
                        <div id="a"></div>
                        <div id="gxx"></div>
                        
                       <div id="showchart">
                        <ApexChart data ={{datax: xData, datay :yData, realy: RealyEachX}}/>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Linear;