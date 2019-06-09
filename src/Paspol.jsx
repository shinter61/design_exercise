import React from 'react'
import style from './paspol.module.scss'

export default class Paspol extends React.Component {
  render() {
    return(
      <div>
        <div className="main_imgBox">
          <div className="main_img" id="image1"></div>
          <div className="main_img" id="image2"></div>
          <div className="main_img" id="image3"></div>
          <div className="main_img" id="image4"></div>
          <div className="main_img" id="image5"></div>
        </div>
        <div className="content">hello, world</div>
      </div>
    )
  }
}