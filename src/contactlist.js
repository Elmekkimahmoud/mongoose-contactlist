import React, { Component } from 'react';
import axios from 'axios'
import {Link } from 'react-router-dom'
class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            contacts:[]
         }
    }


componentDidMount(){
    console.log("Compnenet DID MOUNT")
    axios.get("http://localhost:4000/find_notes/")
    .then(res => {this.setState({contacts:res.data})
      console.log(this.state.contacts)
})
}
componentDidUpdate (PrevProps,PrevState) {
    if(PrevState.contacts.length !==this.state.contacts.length) {
     console.log("UPDATED")
     axios.get("http://localhost:4000/find_notes/")
    }
}
delete1=(id)=>{
    axios.delete("http://localhost:4000/delete_note/"+id)
    .then(res =>{
        console.log(res.data);
        this.setState({
            contacts: this.state.contacts.filter(el=>el._id!==id)
        })
    })
   
}
    render() { 
        console.log(this.state.contacts)
        console.log("Render")
        return ( 
            <div className='contact-list'>
                {this.state.contacts&&this.state.contacts.map((el) =>{
                    return(
                        <div className="contact-info" key={el._id}>
                            <p><span>Name:  </span>  <span>{el.Name}</span></p>
                            <p><span>Phone:  </span>  <span>{el.Phone}</span></p>
                            <p><span>Email:  </span>  <span>{el.Email}</span></p>
                            <p>
                            <button onClick={()=>{this.delete1(el._id)}}>Supprimer</button>
                               
                               <Link to={`/update/${el._id}`}> <button>Edit</button></Link>
                            </p>
                        </div>
                    )
                } )}
             </div>
            
         );
    }
}
 
export default ContactList;