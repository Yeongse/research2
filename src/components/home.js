import "./components.css";
import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render(){
    return(
      <div className="all-wrapper">
        <div className="script">
          <h1>選択行動に関する実験</h1>
        </div>
        <ul className="introduction">
              <li>このWebページを使って実験を行います</li>
              <li>詳細については説明書をご覧ください</li>
              <li>一度実験を開始したら画面を切り替えずにそのまま続けて下さい</li>
              <li>準備ができましたら下の「実験開始」をクリックして下さい</li>
        </ul>
        <div className="start-button">
          <Link to="/online" className="home-link">実験開始</Link>
        </div>
      </div>
    )
  }
}

export default Home;