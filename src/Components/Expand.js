import React from 'react'
import "./expand.css"
import Retweets from './Retweets';
import Favorites from './Favorites';
import Followers from './Followers';

export default class Expand2 extends React.Component{
    constructor()
    {
        super()
        this.state = {
            isHovering: false,
            isClicked: false
        }
        this.handleMouseHover = this.handleMouseHover.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick(event) {
        this.setState({
            isClicked: !this.state.isClicked
        })
        event.preventDefault()
    }

    handleMouseHover() {
        this.setState({
          isHovering: !this.state.isHovering
        })
      }

    handleFeaturesClick(event){
        event.preventDefault()
    }
    render() {
        let text = this.state.isClicked ? "Collapse" : "Expand"
    
        return (
            <div className="expand"        
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}>
                <a href="#" onClick={this.handleClick} className="colour" >
                {text}</a>   
                {this.state.isHovering && <div className="thin">
                <a href="#" className="thin" onClick={this.handleFeaturesClick}>Reply</a>&nbsp;
                <a href="#" className="thin" onClick={this.handleFeaturesClick}>Retweet</a>&nbsp;
                <a href="#" className="thin" onClick={this.handleFeaturesClick}>Favorite</a>&nbsp;
            </div>}    
                {this.state.isClicked && <div className="newFeatures">
                <div className="first-div"><Retweets /></div> 
                <div className="second-div"><Favorites /></div>
                <div className="third-div"><Followers /></div></div>}                            
            </div>
    )
   } 
}
