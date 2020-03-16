import React, { Component } from 'react';
import axios from 'axios'
 
class ContactAdd extends Component {
  constructor(props){
    super(props)
    this.state=({
      Name:'',
      Phone:'',
      Email:'',
    })
  }
  setName=e=> {
    this.setState({
    Name:e.target.value
  })}
  setTel=e=> {  this.setState({
    Phone:e.target.value
  })}
  setEmail=e=> {  this.setState({
    Email:e.target.value
  })}
  addcontact = () => {
    if (this.state.name !== '' && (this.state.Phone !== '' || this.state.Email !== '')) {
    axios.post("http://localhost:4000/add_note",{
     Name:this.state.Name, Phone:this.state.Phone,Email:this.state.Email
    })
  }
else { alert('Required fields!! Name or tel or email') }
}
       render() {
        return (
           <form >
        <h2>
          ADD contact Page
        </h2>
        <br/>
        <br/>
        <span className="subtitle">NAME:</span>
        <br/>
        <input type="text" onChange={this.setName}  />
        <br/>
        <span className="subtitle">Tel:</span>
        <br/>
        <input type="text" onChange={this.setTel}  />
        <br/>
        <br/>
        <span className="subtitle">EMAIL:</span>
        <br/>
        <input type="email" onChange={this.setEmail}  />
        <br/>
        <br/>
        <br/>
   <button onClick={this.addcontact} >Submit</button> 
     </form>
      );
    }
}
export default ContactAdd