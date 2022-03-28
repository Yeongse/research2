import React from "react";
import "./components.css";

class Room6 extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
      return(
        <div className="room-wrapper">
            <div className="table-wrapper">
                <table border="1">
                    <tr>
                        <td>エネルギー</td>
                        <td>{this.props.energy}</td>
                    </tr>
                    <tr>
                        <td>広さ</td>
                        <td>{this.props.extent}</td>
                    </tr>
                    <tr>
                        <td>駅との距離</td>
                        <td>{this.props.distance}</td>
                    </tr>
                    <tr>
                        <td>風呂のタイプ</td>
                        <td>{this.props.bathType}</td>
                    </tr>
                    <tr>
                        <td>フロア</td>
                        <td>{this.props.height}</td>
                    </tr>
                    <tr>
                        <td>築年数</td>
                        <td>{this.props.old}</td>
                    </tr>
                </table>
            </div>
            <p className="button" onClick={this.props.click}>{this.props.label}</p>
        </div>
      )
    }
}  
export default Room6;