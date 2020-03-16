import React, { Component } from 'react'
import axios from 'axios';

export default class Updatecontact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Name:'',
            Phone:'',
            Email:''
         }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    componentDidMount() {

    axios.get( 'http://localhost:4000/find_note/'+this.props.match.params.id)
    .then(res => this.setState({Name:res.data.Name,Phone:res.data.Phone,Email:res.data.Email}))
    }
 
    UpdateContact=()=>{
        let modifiedContact ={
            Name:this.state.Name,
            Phone:this.state.Phone,
            Email:this.state.Email
        }
        axios.put('http://localhost:4000/update_note/'+this.props.match.params.id,modifiedContact)
    }
    render() {
        return (
            <div className='editcont' >
                <input Name="Name" placeholder="Name" type="text" value={this.state.Name} onChange={(e) =>this.handleChange(e)} /><br/>
                <input name="Phone" placeholder="Phone" type="text" value={this.state.Phone} onChange={(e) =>this.handleChange(e)}/><br/>
                <input name="Email" placeholder="Email" type="text" value={this.state.Email} onChange={(e) =>this.handleChange(e)}/>
            <button onClick={this.UpdateContact}>modifier</button>
            
            </div>
        )
    }
}

