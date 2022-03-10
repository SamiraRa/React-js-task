import React from 'react'
import ReactDOM from 'react-dom';
import { Container,  Row, Form, Button  } from "react-bootstrap";
import logo from './img/logo.png'
import './index.css';

ReactDOM.render(
  <Container class="container ">
  <Row>
  <header class="row">
 
  <div  class="col" >
  <img src={logo} alt="logo"></img>
  </div>
  <div class="col header-part">
 <h3>AWG INSURANCE BROKERS PTE LTD</h3>
 <p class="content">BUSINESS REGISTRATION NO: 199002234G GST NO: 199002234G 240 Macpherson Road #08-01, Pines Building, Singapore 348574 Tel: 65 6294 6688 / Fax: 65 6282 6188 / Email: awg@awginsurance.com</p>
 </div>
  
  </header>
  <hr class ="line"></hr>
<div>
<h2>INQUIRY FORM</h2>
</div>
  <div class="desc">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
  
  <div id="form-container">

  <Form >
  <div>
  <Form.Group className="mb-3" controlId="formGroupntype">
  <Form.Label>Insured Type</Form.Label>
  <input type="text" title="Dropdown" placeholder="Enter Insured type" />
  </Form.Group>
  </div>
   <div class="section-heading">
   <h4>INSURED PARTICLES</h4>
   </div>
   <div>
  <Form.Group className="mb-3" controlId="formGroupname">
    <Form.Label>Insured Name</Form.Label>
    <input type="text" placeholder="Enter Insured Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupNRIC">
    <Form.Label>NRIC</Form.Label>
    <input type="text" placeholder="Enter Insured NRIC" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email Address</Form.Label>
    <input type="email" placeholder="Enter Insured Email Address" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleinputInput1">
    <Form.Label>Contact No.</Form.Label>
    <input type="tel" placeholder="Enter Insured Contact No." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Date Of Birth</Form.Label>
    <input type="date" placeholder="Select Insured Date Of Birth" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupaddress">
    <Form.Label>Address</Form.Label>
    <input type="text" placeholder="Enter Insured Address" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupOccupation">
    <Form.Label>Occupation</Form.Label>
    <input type="email" placeholder="Enter Insured occupation" />
  </Form.Group>
  <Form.Group controlId="gender">
  <label>Gender</label>
  <br />
  <div>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        
      </div>
</Form.Group>
</div>
  <div class="section-heading">
   <h4>CLASS OF INSURANCE</h4>
   </div>
   <div>
   <Form.Group className="mb-3" controlId="formGroupntype">
    <Form.Label>Class Of Insurance</Form.Label>
    <input type="type" title="Dropdown" placeholder="Select Class Of Insurance" />
    </Form.Group>
    </div>
   <div class="section-heading">
   <h4>PERIOD OF INSURANCE</h4>
   </div>
   <div>
   <Form.Group className="mb-3" controlId="formGroupEmail">
   <Form.Label>Period Of Insurance:From</Form.Label>
   <input type="date" placeholder="Period Of Insurance:From" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
  <Form.Label>Period Of Insurance:To</Form.Label>
   <input type="date" placeholder="Period Of Insurance:To" />
  </Form.Group>
  </div>
   <div class="section-heading">
   <h4>OTHER INFORMATION(MAID DETAILS)</h4>
   </div>
   <div>
   <Form.Group className="mb-3" controlId="formGroupname">
   <Form.Label> Name</Form.Label>
   <input type="text" placeholder="Enter Maid Name" />
 </Form.Group>
 <Form.Group className="mb-3" controlId="formGroupname">
    <Form.Label>Passport No.</Form.Label>
    <input type="text" placeholder="Enter Maid Passport No" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupEmail">
  <Form.Label>Date Of Birth</Form.Label>
  <input type="date" placeholder="Select Your Date Of Birth" />
</Form.Group>
  <Form.Group className="mb-3" controlId="formGroupname">
    <Form.Label>Nationality</Form.Label>
    <input type="text" placeholder="Select Maid Nationality" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupname">
    <Form.Label>Work Permit No.</Form.Label>
    <input type="text" placeholder="Enter Maid Work Permit No." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupname">
    <Form.Label>Transmission No.</Form.Label>
    <input type="text" placeholder="Enter Maid Work Transmission No." />
  </Form.Group>
   </div>
   <div class="sub-button row">
   <Button type="Submit" class="btn1 rounded-pill col">Submit</Button>
  <a href="blank"class="btn2 col">Clear All</a>
   </div>
 

</Form>
  </div>
  
  </Row>

  </Container>,

  document.getElementById('root')
);
