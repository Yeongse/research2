// 賃貸物件の選択問題を対象で, 意思決定に使われる属性は
// エネルギー(energy), 広さ(extent), 駅までの距離(distance), 風呂タイプ(bathType)
// 階数(height), 築年数(old), コンロの数(stoveNum), 部屋の向き(direction)
// 水道代(waterBill), 治安(security), 住人の年齢層(age), 住人の女性割合(womenRate)
// ペット(pet), 喫煙(smoke)

import React from "react";
import "./components.css";
import Room4 from "./room4.js";
import Room6 from "./room6.js";
import Room8 from "./room8.js";
import Room10 from "./room10.js";
import Room12 from "./room12.js";
import Result from "./result.js"

const pairs = [
  [2, 5], 
  [1, 0], 
  [0, 2], 
  [1, 3], 
  [4, 5], 
  [0, 3], 
  [1, 4], 
  [1, 2],
  [0, 5], 
  [4, 0], 
  [1, 5], 
  [3, 4],
  [2, 3],
  [4, 2], 
  [3, 5]
];

class Online extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      phase:0,
      results: "",
      levels: {
        energy: ["オール電化", "ガスを使用"], 
        extent: ["6.2畳", "6.5畳", "7.1畳", "8畳"],
        distance: ["徒歩5分","徒歩10分", "徒歩15分", "徒歩20分"], 
        bathType: ["ユニットバス", "セパレート"],
        height: ["1階", "3階", "5階", "7階"],
        old: ["0年", "築10年", "築15年", "築20年"],
        stoveNum: ["1個", "2個", "3個"],
        direction: ["東", "西", "南", "北"],
        waterBill: ["従量課金", "料金固定"],
        security: ["オートロックなし", "オートロックあり"],
        age: ["20歳", "40歳", "50歳", "60歳"],
        womenRate: ["30%", "50%", "70%"]
      }, 
      profile_4: [
        [0, 1, 3, 0], 
        [1, 3, 3, 0], 
        [1, 3, 2, 0], 
        [1, 0, 0, 1], 
        [1, 2, 0, 1], 
        [0, 1, 0, 1]
      ], 
      profile_6: [
        [1, 0, 0, 1, 0, 2], 
        [0, 2, 2, 0, 3, 0], 
        [1, 0, 1, 0, 0, 3], 
        [1, 2, 2, 1, 1, 1], 
        [1, 3, 0, 1, 3, 2], 
        [0, 3, 2, 1, 2, 2],
      ], 
      profile_8: [
        [1, 3, 3, 0, 3, 1, 0, 2], 
        [0, 3, 3, 0, 3, 2, 1, 2], 
        [0, 0, 3, 0, 0, 1, 2, 2], 
        [0, 0, 0, 1, 1, 1, 1, 3], 
        [1, 2, 0, 1, 3, 3, 2, 0], 
        [0, 1, 3, 1, 0, 2, 0, 1],
      ], 
      profile_10: [
        [1, 2, 3, 0, 2, 3, 2, 0, 0, 1], 
        [0, 1, 2, 0, 0, 3, 0, 3, 0, 0], 
        [1, 0, 0, 0, 3, 2, 1, 1, 1, 1], 
        [1, 3, 0, 0, 2, 0, 2, 0, 0, 0], 
        [0, 2, 2, 1, 1, 0, 0, 2, 0, 1], 
        [0, 2, 0, 0, 0, 3, 0, 1, 1, 0]
      ], 
      profile_12: [
        [1, 3, 0, 1, 3, 2, 1, 0, 1, 1, 3, 2], 
        [0, 2, 0, 1, 0, 2, 1, 3, 1, 0, 2, 2], 
        [0, 2, 2, 1, 3, 2, 0, 3, 0, 1, 0, 0], 
        [0, 1, 3, 1, 3, 1, 2, 1, 0, 1, 3, 2], 
        [1, 1, 3, 0, 0, 2, 1, 1, 1, 0, 2, 2], 
        [0, 0, 2, 1, 0, 1, 2, 0, 1, 0, 1, 0]
      ]
    };
    this.addChoiceA = this.addChoiceA.bind(this);
    this.addChoiceB = this.addChoiceB.bind(this);
    this.addChoiceNone = this.addChoiceNone.bind(this);
  }

  addChoiceA(){
    this.setState({phase:this.state.phase+1, results:this.state.results+"A"});
  }
  addChoiceB(){
    this.setState({phase:this.state.phase+1, results:this.state.results+"B"});
  }

  addChoiceNone(){
    this.setState({phase:this.state.phase+1, results:this.state.results+"N"});
  }

  createTwoRooms(){
    if(this.state.phase < 15){
      let energy1 = this.state.levels.energy[this.state.profile_4[pairs[this.state.phase%15][0]][0]];
      let extent1 = this.state.levels.extent[this.state.profile_4[pairs[this.state.phase%15][0]][1]];
      let distance1 = this.state.levels.distance[this.state.profile_4[pairs[this.state.phase%15][0]][2]];
      let bathType1 = this.state.levels.bathType[this.state.profile_4[pairs[this.state.phase%15][0]][3]];
      let energy2 = this.state.levels.energy[this.state.profile_4[pairs[this.state.phase%15][1]][0]];
      let extent2 = this.state.levels.extent[this.state.profile_4[pairs[this.state.phase%15][1]][1]];
      let distance2 = this.state.levels.distance[this.state.profile_4[pairs[this.state.phase%15][1]][2]];
      let bathType2 = this.state.levels.bathType[this.state.profile_4[pairs[this.state.phase%15][1]][3]];

      return(
        <div className="all-wrapper">
          <h1 className="script">第{this.state.phase+1}問</h1>
          <div className="compare-wrapper">
            <Room4 energy={energy1} extent={extent1} distance={distance1} bathType={bathType1} label={"A"} click={this.addChoiceA} />
            <Room4 energy={energy2} extent={extent2} distance={distance2} bathType={bathType2} label={"B"} click={this.addChoiceB} />
          </div>
          <p className="third-button" onClick={this.addChoiceNone}>どちらでもない</p>
        </div>
      )
    }

    else{
       if(this.state.phase < 30){
        let energy1 = this.state.levels.energy[this.state.profile_6[pairs[this.state.phase%15][0]][0]];
        let extent1 = this.state.levels.extent[this.state.profile_6[pairs[this.state.phase%15][0]][1]];
        let distance1 = this.state.levels.distance[this.state.profile_6[pairs[this.state.phase%15][0]][2]];
        let bathType1 = this.state.levels.bathType[this.state.profile_6[pairs[this.state.phase%15][0]][3]];
        let height1 = this.state.levels.height[this.state.profile_6[pairs[this.state.phase%15][0]][4]];
        let old1 = this.state.levels.old[this.state.profile_6[pairs[this.state.phase%15][0]][5]];
        let energy2 = this.state.levels.energy[this.state.profile_6[pairs[this.state.phase%15][1]][0]];
        let extent2 = this.state.levels.extent[this.state.profile_6[pairs[this.state.phase%15][1]][1]];
        let distance2 = this.state.levels.distance[this.state.profile_6[pairs[this.state.phase%15][1]][2]];
        let bathType2 = this.state.levels.bathType[this.state.profile_6[pairs[this.state.phase%15][1]][3]];
        let height2 = this.state.levels.height[this.state.profile_6[pairs[this.state.phase%15][1]][4]];
        let old2 = this.state.levels.old[this.state.profile_6[pairs[this.state.phase%15][1]][5]];

        return(
          <div className="all-wrapper">
            <h1 className="script">第{this.state.phase+1}問</h1>
            <div className="compare-wrapper">
              <Room6 energy={energy1} extent={extent1} distance={distance1} bathType={bathType1} height={height1} old={old1} label={"A"} click={this.addChoiceA} />
              <Room6 energy={energy2} extent={extent2} distance={distance2} bathType={bathType2} height={height2} old={old2} label={"B"} click={this.addChoiceB} />
            </div>
            <p className="third-button" onClick={this.addChoiceNone}>どちらでもない</p>
          </div>
        )
       }

       else{
         if(this.state.phase < 45){
          let energy1 = this.state.levels.energy[this.state.profile_8[pairs[this.state.phase%15][0]][0]];
          let extent1 = this.state.levels.extent[this.state.profile_8[pairs[this.state.phase%15][0]][1]];
          let distance1 = this.state.levels.distance[this.state.profile_8[pairs[this.state.phase%15][0]][2]];
          let bathType1 = this.state.levels.bathType[this.state.profile_8[pairs[this.state.phase%15][0]][3]];
          let height1 = this.state.levels.height[this.state.profile_8[pairs[this.state.phase%15][0]][4]];
          let old1 = this.state.levels.old[this.state.profile_8[pairs[this.state.phase%15][0]][5]];
          let stoveNum1 = this.state.levels.stoveNum[this.state.profile_8[pairs[this.state.phase%15][0]][6]];
          let direction1 = this.state.levels.direction[this.state.profile_8[pairs[this.state.phase%15][0]][7]];
          let energy2 = this.state.levels.energy[this.state.profile_8[pairs[this.state.phase%15][1]][0]];
          let extent2 = this.state.levels.extent[this.state.profile_8[pairs[this.state.phase%15][1]][1]];
          let distance2 = this.state.levels.distance[this.state.profile_8[pairs[this.state.phase%15][1]][2]];
          let bathType2 = this.state.levels.bathType[this.state.profile_8[pairs[this.state.phase%15][1]][3]];
          let height2 = this.state.levels.height[this.state.profile_8[pairs[this.state.phase%15][1]][4]];
          let old2 = this.state.levels.old[this.state.profile_8[pairs[this.state.phase%15][1]][5]];
          let stoveNum2 = this.state.levels.stoveNum[this.state.profile_8[pairs[this.state.phase%15][1]][6]];
          let direction2 = this.state.levels.direction[this.state.profile_8[pairs[this.state.phase%15][1]][7]];

          return (
            <div className="all-wrapper">
              <h1 className="script">第{this.state.phase+1}問</h1>
              <div className="compare-wrapper">
                <Room8 energy={energy1} extent={extent1} distance={distance1} bathType={bathType1} height={height1} old={old1} stoveNum={stoveNum1} direction={direction1} label={"A"} click={this.addChoiceA} />
                <Room8 energy={energy2} extent={extent2} distance={distance2} bathType={bathType2} height={height2} old={old2} stoveNum={stoveNum2} direction={direction2} label={"B"} click={this.addChoiceB} />
              </div>
              <p className="third-button" onClick={this.addChoiceNone}>どちらでもない</p>
            </div>
           )
         }

         else{
          if(this.state.phase < 60){
            let energy1 = this.state.levels.energy[this.state.profile_10[pairs[this.state.phase%15][0]][0]];
            let extent1 = this.state.levels.extent[this.state.profile_10[pairs[this.state.phase%15][0]][1]];
            let distance1 = this.state.levels.distance[this.state.profile_10[pairs[this.state.phase%15][0]][2]];
            let bathType1 = this.state.levels.bathType[this.state.profile_10[pairs[this.state.phase%15][0]][3]];
            let height1 = this.state.levels.height[this.state.profile_10[pairs[this.state.phase%15][0]][4]];
            let old1 = this.state.levels.old[this.state.profile_10[pairs[this.state.phase%15][0]][5]];
            let stoveNum1 = this.state.levels.stoveNum[this.state.profile_10[pairs[this.state.phase%15][0]][6]];
            let direction1 = this.state.levels.direction[this.state.profile_10[pairs[this.state.phase%15][0]][7]];
            let waterBill1 = this.state.levels.waterBill[this.state.profile_10[pairs[this.state.phase%15][0]][8]];
            let security1 = this.state.levels.security[this.state.profile_10[pairs[this.state.phase%15][0]][9]];
            let energy2 = this.state.levels.energy[this.state.profile_10[pairs[this.state.phase%15][1]][0]];
            let extent2 = this.state.levels.extent[this.state.profile_10[pairs[this.state.phase%15][1]][1]];
            let distance2 = this.state.levels.distance[this.state.profile_10[pairs[this.state.phase%15][1]][2]];
            let bathType2 = this.state.levels.bathType[this.state.profile_10[pairs[this.state.phase%15][1]][3]];
            let height2 = this.state.levels.height[this.state.profile_10[pairs[this.state.phase%15][1]][4]];
            let old2 = this.state.levels.old[this.state.profile_10[pairs[this.state.phase%15][1]][5]];
            let stoveNum2 = this.state.levels.stoveNum[this.state.profile_10[pairs[this.state.phase%15][1]][6]];
            let direction2 = this.state.levels.direction[this.state.profile_10[pairs[this.state.phase%15][1]][7]];
            let waterBill2 = this.state.levels.waterBill[this.state.profile_10[pairs[this.state.phase%15][1]][8]];
            let security2 = this.state.levels.security[this.state.profile_10[pairs[this.state.phase%15][1]][9]];

            return (
              <div className="all-wrapper">
              <h1 className="script">第{this.state.phase+1}問</h1>
              <div className="compare-wrapper">
                <Room10 energy={energy1} extent={extent1} distance={distance1} bathType={bathType1} height={height1} old={old1} stoveNum={stoveNum1} direction={direction1} waterBill={waterBill1} security={security1} label={"A"} click={this.addChoiceA} />
                <Room10 energy={energy2} extent={extent2} distance={distance2} bathType={bathType2} height={height2} old={old2} stoveNum={stoveNum2} direction={direction2} waterBill={waterBill2} security={security2} label={"B"} click={this.addChoiceB} />
              </div>
              <p className="third-button" onClick={this.addChoiceNone}>どちらでもない</p>
            </div>
            )
          }
          else{
            if(this.state.phase < 75){
              let energy1 = this.state.levels.energy[this.state.profile_12[pairs[this.state.phase%15][0]][0]];
              let extent1 = this.state.levels.extent[this.state.profile_12[pairs[this.state.phase%15][0]][1]];
              let distance1 = this.state.levels.distance[this.state.profile_12[pairs[this.state.phase%15][0]][2]];
              let bathType1 = this.state.levels.bathType[this.state.profile_12[pairs[this.state.phase%15][0]][3]];
              let height1 = this.state.levels.height[this.state.profile_12[pairs[this.state.phase%15][0]][4]];
              let old1 = this.state.levels.old[this.state.profile_12[pairs[this.state.phase%15][0]][5]];
              let stoveNum1 = this.state.levels.stoveNum[this.state.profile_12[pairs[this.state.phase%15][0]][6]];
              let direction1 = this.state.levels.direction[this.state.profile_12[pairs[this.state.phase%15][0]][7]];
              let waterBill1 = this.state.levels.waterBill[this.state.profile_12[pairs[this.state.phase%15][0]][8]];
              let security1 = this.state.levels.security[this.state.profile_12[pairs[this.state.phase%15][0]][9]];
              let age1 = this.state.levels.age[this.state.profile_12[pairs[this.state.phase%15][0]][10]];
              let womenRate1 = this.state.levels.womenRate[this.state.profile_12[pairs[this.state.phase%15][0]][11]];

              let energy2 = this.state.levels.energy[this.state.profile_12[pairs[this.state.phase%15][1]][0]];
              let extent2 = this.state.levels.extent[this.state.profile_12[pairs[this.state.phase%15][1]][1]];
              let distance2 = this.state.levels.distance[this.state.profile_12[pairs[this.state.phase%15][1]][2]];
              let bathType2 = this.state.levels.bathType[this.state.profile_12[pairs[this.state.phase%15][1]][3]];
              let height2 = this.state.levels.height[this.state.profile_12[pairs[this.state.phase%15][1]][4]];
              let old2 = this.state.levels.old[this.state.profile_12[pairs[this.state.phase%15][1]][5]];
              let stoveNum2 = this.state.levels.stoveNum[this.state.profile_12[pairs[this.state.phase%15][1]][6]];
              let direction2 = this.state.levels.direction[this.state.profile_12[pairs[this.state.phase%15][1]][7]];
              let waterBill2 = this.state.levels.waterBill[this.state.profile_12[pairs[this.state.phase%15][1]][8]];
              let security2 = this.state.levels.security[this.state.profile_12[pairs[this.state.phase%15][1]][9]];
              let age2 = this.state.levels.age[this.state.profile_12[pairs[this.state.phase%15][1]][10]];
              let womenRate2 = this.state.levels.womenRate[this.state.profile_12[pairs[this.state.phase%15][1]][11]];
              
              return (
                <div className="all-wrapper">
                <h1 className="script">第{this.state.phase+1}問</h1>
                <div className="compare-wrapper">
                  <Room12 energy={energy1} extent={extent1} distance={distance1} bathType={bathType1} height={height1} old={old1} stoveNum={stoveNum1} direction={direction1} waterBill={waterBill1} security={security1} age={age1} womenRate={womenRate1} label={"A"} click={this.addChoiceA} />
                  <Room12 energy={energy2} extent={extent2} distance={distance2} bathType={bathType2} height={height2} old={old2} stoveNum={stoveNum2} direction={direction2} waterBill={waterBill2} security={security2} age={age2} womenRate={womenRate2} label={"B"} click={this.addChoiceB} />
                </div>
                <p className="third-button" onClick={this.addChoiceNone}>どちらでもない</p>
              </div>
              )
            }
          }
         }  
       }
    }
  }

  render(){
    console.log(this.state.results);
    if(this.state.phase < 75){
      return this.createTwoRooms();
    }
    else{
      return <Result results={this.state.results} />
    }
  }
}

export default Online;