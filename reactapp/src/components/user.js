import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {Motion, spring,presets} from 'react-motion';
import "./user.scss"

  

 class User extends React.Component {
   state={
    toggle: false,
  
   }

   handleClick() {
    this.setState({toggle: !this.state.toggle})
   
  }
   render(){

    const c=['menu-btn']

    const style = {
      overflow: 'visible',
      cursor: 'pointer',
      // disable touch highlighting on devices
      WebkitTapHighlightColor: "rgba(0,0,0,0)",
    };

  

const {toggle}=this.state;

if(toggle){
  c.push('right')
}

// const menu=toggle? <ul className={c.join(' ')}>
// <li>Profile</li>
// <li>Messages</li>
// <li>News</li>
// <li>Music</li>
// <li className="last-li">Settings</li>

// </ul>:null

    return (
      <>
     
        <div className="app-wrapper">
        <header>
          <Container>
            <Row>
              <Col md={12} className="header">
              <img alt='sad' src='https://www.freepnglogos.com/uploads/total-logo-png/total-symbol-of-logo-5.png'/>
              </Col>
            </Row>
          </Container>
          
        </header>
        <div className="sub-header"> 
          <Container>
            <Row>
              <Col md={2} className="side">


              <svg className={'button'}
      viewBox="0 0 96 96"
      height="1em"
      onClick={this.handleClick.bind(this)}
      style={style}
    >
      <Motion 
        style={{
          x: spring(this.state.toggle ? 1 : 0, presets.wobbly ),
          y: spring(this.state.toggle ? 0: 1, presets.wobbly ),
        }}
      >
        {({ x, y }) =>
          <g 
            id="navicon" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="14" 
            strokeLinecap="round" 
            strokeLinejoin="round"
           >
            <line 
              transform={`translate(${x * 12}, ${x * -7}) rotate(${x * 45}, 7, 26)`} 
              x1="7" y1="26" x2="89" y2="26" 
             />
            <line 
              transform={`translate(${x * 12}, ${x * 7}) rotate(${x * -45}, 7, 70)`} 
              x1="7" y1="70" x2="89" y2="70" 
             />
            <line 
              transform={`translate(${x * -96})`} 
              opacity={y} 
              x1="7" y1="48" x2="89" y2="48"
             />
          </g>
        }
      </Motion>
    </svg>



{/* {menu} */}
    
    
                   <ul className={c.join(' ')}>
                     <li>Profile</li>
                     <li>Messages</li>
                     <li>News</li>
                     <li>Music</li>
                     <li className="last-li">Settings</li>

                   </ul>



                   <ul className={'menu'}>
                     <li>Profile</li>
                     <li>Messages</li>
                     <li>News</li>
                     <li>Music</li>
                     <li className="last-li">Settings</li>
  
                   </ul>
  
              </Col>
  
              <Col md={10} className="content">
                <Row>
                  <Col md={12}><img alt='asf' style={{height:"300px"}} src='http://www.imgworlds.com/wp-content/uploads/2015/12/generic.jpg'/></Col>
                  <Col md={12}>
                  <Row className="dmit">
                    <Col md={2}><img alt='as' src="https://wideinfo.org/wp-content/uploads/2019/06/Acute-Dog-Diarrhea-47066074.jpg"/></Col>
                    <Col md={10}><p style={{fontWeight:"bold",fontSize:"20px"}}>Dmitry K.</p>
                    
                      <ul className="inf">
                         <li>Date of Birth: 2 January</li>
                         <li>City: Minsk</li>
                         <li>Education: BSU</li>
                         <li>Web-Site: https://safksakfnk.com</li>
  
                      </ul>
                    
                    </Col>
                  </Row>
                  <Row className="fori">
                    <Col md={12}>
                      <p style={{fontSize:"20px",fontWeight:"bold"}}>Write Me</p>
                    </Col>
                    <Col md={12} >
                      <input className="inp" placeholder="text"/> <button className=" btn btn-success ">Send</button>
                    </Col>
                  </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
       
        
      </div>
        
    </>
    )
   }
}
export default User;
