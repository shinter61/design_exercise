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
    const newsContents = [1, 2, 3, 4, 5].map(i => {
      return (
        <li key={i}>
          <img/>
          <div className='article-content'>
            <h3>noteコラボ企画のお題「＃旅とわたし」の投稿が3000件突破！！</h3>
            <p>
              これは記事本文ですこれは記事本文ですこれは記事本文ですこれは記事本文ですこれは記事本文ですこれは記事本文です
              これは記事本文ですこれは記事本文ですこれは記事本文ですこれは記事本文ですこれは記事本文ですこれは記事本文です
              これは記事本文ですこれは記事本文ですこれは記事本文ですこれは記事本文ですこれは記事本文ですこれは記事本文です
              これは記事本文ですこれは記事本文ですこれは記事本文ですこれは記事本文ですこれは記事本文ですこれは記事本文です
              これは記事本文ですこれは記事本文ですこれは記事本文ですこれは記事本文ですこれは記事本文ですこれは記事本文です
            </p>
          </div>
        </li>
      )
    })
    return (
      <>
      <div className='paspol'>
        <div className='abovePage'>
          <div className='header'>
            <div className='title'>
              <p id='title'>PAS-POL</p>
              <p>旅のものづくりブランド</p>
            </div> { /* title */ }
            <ul>
              <li>TOP</li>
              <li>PRODUCT</li>
              <li>ABOUT</li>
              <li>NEWS</li>
              <li>CONTACT</li>
            </ul>
          </div> { /* header */ }
          <div className='imageSlideShow'>
            <img id='slideshowPrev' src={image1} style={{opacity: 1}} alt='背景画像です'/>
            <img id='slideshowNext' src={image2} style={{opacity: 0}} alt='背景画像です'/>
          </div> { /* imageSlideShow */ }
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
            </div> { /* brief-text */ }
          </div> { /* declaretion */ }
        </div> { /* abovePage */ }
        <div className='product-list'>
          <div className='product-header'>
            <div className='product-header-inner'>
              <h2>PRODUCT</h2>
              <p>MORE</p>
            </div> { /* product-header-inner */ }
          </div> { /* product-header */ }
          <ul>
            <div className='first-column'>
              <div className='column-inner'>
                <li>
                  <img id='product-1'/>
                  <h3>The world festival guide - 海外の音楽フェス完全ガイド -</h3>
                </li>
                <li>
                  <img id='product-2'/>
                  <h3>この世界で死ぬまでにしたいこと2000</h3>
                </li>
                <li>
                  <img id='product-3'/>
                  <h3>365日日本一周 絶景日めくりカレンダー</h3>
                </li>
              </div> { /* column-inner */ }
            </div> { /* first-column */ }
            <div className='second-column'>
              <div className='column-inner'>
                <li>
                  <img id='product-4'/>
                  <h3>Passport Notebooks series</h3>
                </li>
                <li>
                  <img id='product-5'/>
                  <h3>一人旅英会話Book</h3>
                </li>
                <li>
                  <img id='product-6'/>
                  <h3>日本の絶景ポストカード 春編</h3>
                </li>
              </div> { /* column-inner */ }
            </div> { /* second-column */ }
          </ul>
        </div> {/* product-list */}
        <div className='news'>
          <div className='news-header'>
            <div className='news-header-inner'>
              <h2>NEWS</h2>
              <p>MORE</p>
            </div> {/* news-header-inner */}
          </div> {/* news-header */}
          <div className='news-articles'>
            <ul>
              {newsContents}
            </ul>
          </div> {/* news-articles */}
        </div> {/* news */}
      </div> {/* paspol */}
      </>
    );
  }
}