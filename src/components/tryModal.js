import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import key1 from'../img/key1.jpg'
import '../css/tryModal.css'

class TryModal extends React.Component{


render(){
    const { isOpen, close } = this.props;

    console.log(isOpen)
    const modalheader={
     
        margin: 0,
        padding: 0,
        width: "100%",
        height: 355,
        display: "block"
    
    }
    return(<div>
     {isOpen?(<div className="modal1">

      <div className="modal-header" >
       
                          
                            <div className="item" col-md="11">
                              
                            </div>
                            <div className="item" col-md="1">
                                <button className="close" onClick={close}>&times;</button>
                            </div>


      </div>

      <div>
   <img src={key1}></img>



  </div>

   <div className="modal-body">
<h3 style={{textAlign:"center"}}>시승신청</h3>
<form action>
<Row className="bottom_layout">

<Col className="item" md="6">
<div>
     <p>어떤 자동차에 관심이 있나요? *</p>
           </div>
           <div>
            <select name="car"  style={{width:250,height:30,margin:20}}>
               <option value="CONTINENTAL">LINCOLN CONTINENTAL</option>
               <option value="MKZ">LINCOLN MKZ</option>
               <option value="NAUTILUS">LINCOLN NAUTILUS</option>
               <option value="MKC">LINCOLN MKC</option>
            </select>
            </div>
          
           
           <div><p>이름</p><input type="text" name="name"  style={{width:250,height:30,margin:20}}></input> </div>
          
            <div> <p>이메일</p><input type="email" style={{width:250,height:30,margin:20}}></input></div>
          </Col>
          
<Col className="item" md="6">
<div>
     <p>어떤 자동차에 관심이 있나요? *</p>
           </div>
           <div>
            <select name="car"  style={{width:250,height:30,margin:20}}>
               <option value="CONTINENTAL">LINCOLN CONTINENTAL</option>
               <option value="MKZ">LINCOLN MKZ</option>
               <option value="NAUTILUS">LINCOLN NAUTILUS</option>
               <option value="MKC">LINCOLN MKC</option>
            </select>
            </div>
          
           
           <div><p>이름</p><input type="text" name="name"  style={{width:250,height:30,margin:20}}></input> </div>
          
            <div> <p>이메일</p><input type="email" style={{width:250,height:30,margin:20}}></input></div>
          </Col>

</Row>
</form>

</div>
     </div>):null}
   </div>
    
   
    )
  }
}


export default TryModal;
