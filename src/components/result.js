import React from "react";
import "./components.css";

class Result extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        // let resultArray = this.props.results.split("");
        return(
            <div className="all-wrapper">
                <h1 className="script">結果</h1>
                <div className="result-wrapper">
                    <p>{this.props.results}</p>
                </div>
            </div>
        )
    }
}  
export default Result;