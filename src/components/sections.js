import React from 'react';
import Slider from "react-slick";
import { Container, Row, Col, Button } from 'reactstrap';
import '../css/head.css'
import one from'../img/1.jpg'
import two from'../img/2.jpg'
import three from'../img/3.jpg'
import four from'../img/4.jpg'
import five from'../img/5.jpg'
import col_1 from'../img/col_1.jpg'
import car from'../img/car.jpg'
import handle from'../img/handle.jpg'
import ask from'../img/ask.jpg'
import key from'../img/key.jpg'
import still from'../img/still.jpg'
import post from'../img/post.jpg'

import TryModal from './tryModal'
import '../css/section.css'

class Section extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  openModal = () => {
    console.log('open')
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

render(){
  
  var settings = {
    // 아래 dots 줄 것인가
    dots: true,
    // 좌우 화살표 줄 것인가
    arrows: false,
    // 마지막 슬라이드에서 처음 슬라이스로
    infinite: true,
    speed: 2000,
    // 한 번에 스크롤 몇 개 보여줄 건가(대개 1을 사용함)
    slidesToShow: 1,
    // 스크롤 할 때마다 몇 장씩 넘길 것인가
    slidesToScroll: 1,
    // 자동 넘김을 할 것인가. 한다면 스피드는?
    autoplay: true,
    autoplaySpeed: 4000,
    // 화면에 올리면 슬라이더가 자동으로 넘어가지 않음
    pauseOnHover: true,
    // 슬라이더를 넘기지 않고 fade in/out 하는 식으로 트랜지션 됨
    fade: true,
    // 레이지 로딩할 거야?
    lazyLoad: false
    // dots를 감싸고 있는 
    
  };
    return(<div className="section">
      <Slider {...settings}>
        
          <img src={one}/>
        
        
        <img src={two}/>
       
       
        <img src={three}/>
        
        
        <img src={four}/>
        
       
        <img src={five}/>
        
        
      </Slider>
      <Container className="main1" >
         <Row>
          <Col className="item" md="6">
          <img  src={col_1} />
          <div className="carousel-caption" id="box-bottom-1">
            <h4>Sales Promotion</h4>
            <p>진행 중인 세일즈 프로모션</p>
            <a href="#" className="button1">자세히 보기 &gt;</a>
        </div>
          </Col>
          <Col className="item" md="6">
         <Row >
         <Col className="item" md="6">
         <img src={handle}/>
         <div className="carousel-caption" >
                <h4>Technology</h4>
                <p>링컨 인텔리전트 AWD</p>
                <a href="#" className="btn">자세히 보기 &gt;</a>
            </div>
           </Col>
           <Col className="item" md="6">
           <img src={ask}/>
           <div className="carousel-caption" >
                <h4>Pick up & Delivery</h4>
                <p>직접 찾아가는프리미엄서비스</p>
                <a href="#" className="btn2">자세히 보기</a>
            </div>
           </Col>
           <div className="item">
           <img src={car}/>
           <div className="carousel-caption" >
            <h4>Sales Promotion</h4>
            <p>진행 중인 세일즈 프로모션</p>
            <a href="#" className="btn3">자세히 보기 &gt;</a>
        </div>
           </div>
         </Row>
          </Col>
         
        </Row>
<Row className="bottom_layout">

<Col className="item" md="4">
          <img  src={still} />
          </Col>
          <Col className="item" md="4">
          <img  src={post} />
          </Col>
          <Col className="item" md="4">
          <img  src={key} />
          <div className="carousel-caption">
          <h3>시승신청</h3>
        <Button className="btn4" onClick={this.openModal}>바로
            가기</Button>
           
          </div>
          </Col>
</Row>


    </Container>
    <TryModal isOpen={this.state.isModalOpen} close={this.closeModal} />
   </div>
    
   
    )
  }
}


export default Section;
