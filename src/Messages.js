import React, { Component } from 'react'
import "./message.css"
import Features from './Components/Features';
import Card from './Components/Card';

export default class Messages extends Component {
 
    constructor()
    {
        super()
        this.state = {
            messages: [],
            chars_left: '',  
            new_message:'',
            isClicked: false, 
            
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)      
    }

    handleSubmit(event) {   
        event.preventDefault();        
        var max_chars = 140   
        if(this.state.new_message.length !== 0)
       { 
            this.setState({
            messages: [...this.state.messages, this.state.new_message],
            chars_left: max_chars,
            new_message: ""
        })
              
     }
}

      handleChange(event) {
        var input = event.target.value;
        var max_chars = 140
        this.setState({
            new_message: event.target.value,
        	chars_left: max_chars - input.length
        })        
    }

    render() {
        var sortedMessages = [...this.state.messages]
        let showFeatures = false
        if(this.state.new_message.length !== 0)
            {
                showFeatures = true
            }       
        return (
            <div>      
                <form onSubmit={this.handleSubmit}>                                
                <div className="container">  
                    <input 
                           type="text"    
                           value={this.state.new_message}                     
                           placeholder="Type Here!!!" 
                           className="input" 
                           maxlength="140"
                           onChange={this.handleChange}/>  
                            {showFeatures && <div>
                            <Features/>
                            <button type="submit" className="submit" ><strong>Submit</strong></button>   
                            <p className="characters">{this.state.chars_left}</p>  
                    </div> }                   
                </div>
                </form> 
                {sortedMessages.reverse().map((item, i) =>                                   
                    <Card content = {item} key={i}/>                  
                )}              
            </div>          
        )
    }
}
