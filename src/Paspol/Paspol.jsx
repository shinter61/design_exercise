import React from 'react';
import './Paspol.scss';
import image1 from '../../public/image/paspol1.jpg';
import image2 from '../../public/image/paspol2.jpg';
import image3 from '../../public/image/paspol3.jpg';
import image4 from '../../public/image/paspol4.jpg';
import image5 from '../../public/image/paspol5.jpg';

let m = 1
let n = 0

export default class Paspol extends React.Component {
  constructor() {
    super();
    this.state = {
      imageId: 0
    };
  }
  componentDidMount() {
    this.interval = this.slideShow()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  fadeout = () => {
    if (m < 0) {
      clearTimeout()
      m = 1;
      return
    }
    m -= 0.01;
    document.getElementById('slideshowPrev').style.opacity = m;
    setTimeout(() => {this.fadeout()}, 20);
  }

  fadein = () => {
    if (n > 1) {
      clearTimeout()
      n = 0;
      return
    }
    n += 0.01;
    document.getElementById('slideshowNext').style.opacity = n;
    setTimeout(() => {this.fadein()}, 20);
  }

  slideShow = () => {
    const imageArr = [image1, image2, image3, image4, image5]
    let num = this.state.imageId
    if (num !== 4) {
      this.setState({ imageId: this.state.imageId + 1 });
    } else {
      this.setState({ imageId: 0 });
    }
    document.getElementById('slideshowPrev').src = imageArr[num]
    if (num !== 4) {
      num++
    } else {
      num = 0
    }
    document.getElementById('slideshowNext').src = imageArr[num]
    this.fadeout()
    this.fadein()
    setTimeout(() => {this.slideShow()}, 5000);
  }


  render() {
    return (
      <div className='paspol'>
        <div className='abovePage'>
          <div className='header'>
            <div className='title'>
              <p id='title'>PAS-POL</p>
              <p>旅のものづくりブランド</p>
            </div>
            <ul>
              <li>TOP</li>
              <li>PRODUCT</li>
              <li>ABOUT</li>
              <li>NEWS</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className='imageSlideShow'>
            <img id='slideshowPrev' src={image1} style={{opacity: 1}}/>
            <img id='slideshowNext' src={image2} style={{opacity: 0}}/>
          </div>
          <div className='declaration'>
            <div className='brief-text'>
              <p id='tabi'>旅に出よう。</p>
              <p>僕たちが作りたいのは
              <br/>持っているだけで旅に出たくなるモノ。
              <br/>持っているだけでわくわくするモノ。</p>
              <p>それは新しい時代の “パスポート”
              <br/>僕たちが作るものは、
              <br/>そんな、存在でありたい。</p>
              <p>そして、人と人が繋がる
              <br/>こんな時代だからこそ、
              <br/>僕たちは、みんなでひとつのモノを
              <br/>作ることを追求したい。</p>
              <p id='company-name'>「 PAS-POL 」</p>
              <p>それは、自分と世界を繋げる
              <br/>旅のモノづくりブランド</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}