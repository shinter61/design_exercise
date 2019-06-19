import React from 'react';
import './Paspol.scss';
import image1 from '../../public/image/paspol1.jpg';
import image2 from '../../public/image/paspol2.jpg';
import image3 from '../../public/image/paspol3.jpg';
import image4 from '../../public/image/paspol4.jpg';
import image5 from '../../public/image/paspol5.jpg';

export default class Paspol extends React.Component {
  constructor() {
    super();
    this.state = {
      imageId: 0
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.slideShow()}, 2000
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
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
    document.getElementById('slideshowPrev').style.opacity = 1;
    this.fadeInterval = setInterval(() => {this.fadeOut()}, 100)
    if (num !== 4){
      num++
    } else {
      num = 0
    }
    document.getElementById('slideshowNext').src = imageArr[num]
  }

  fadeOut = () => {
    if (document.getElementById('slideshowPrev').style.opacity === 0) {return}
    console.log(document.getElementById('slideshowPrev').style.opacity)
    document.getElementById('slideshowPrev').style.opacity = document.getElementById('slideshowPrev').style.opacity - 0.1
  }
  render(){
    return (
      <>
        <div className='abovePage'>
          <div className='imageSlideShow'>
            <img id='slideshowPrev' src={image1} />
            <img id='slideshowNext' src={image2} />
          </div>
        </div>
        <p>hello from paspol</p>
      </>
    );
  }
}