import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any necessary actions with the form data here,
    // such as sending it to a server or processing it in some way.
    console.log(formData);
  };
  const createPrompt =() =>{
    alert("Your OTP has been sent");
  }
  
    const[disabled, setDisabled]=useState(true);
    const onClick = () => {
        setDisabled(false);
      };
      const [show, setShow] = useState(true);

      const hideButton = () => {
        setShow(false);
      };
      const [data, setData] = useState(null);

      useEffect(() => {
        const url= "http://localhost:5000/sendotp";

        axios.post(url).then(res => setData(res.data)).catch(err => console.log("err")
        )
      }, [])
      console.log(data);
    
  

  return (
    <div className="App">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <button onClick={createPrompt}>SEND OTP</button>
        
        

       
        <br />
        <input className='EmailOTP'placeholder='Enter your OTP'></input>
        <button  onClick={()=>{
        onClick(); hideButton()}}>Verify</button>
        <br/>
        
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <button onClick={createPrompt}>SEND OTP</button>
        <br />
        <input className='EmailOTP'placeholder='Enter your OTP'></input>
        <button  onClick={()=>{
        onClick(); hideButton()}}>Verify</button>
        <br/>
        <button disabled={disabled} type="submit">Submit</button>
      </form>
    </div>
  );
}


export default App;
