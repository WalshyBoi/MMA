import React from 'react';
import Reactable from 'reactable';
import {AllFighters} from './Data'
import {allFeatherWeights} from './Data'
import {allLightWeights} from './Data'
import {allWelterWeights} from './Data'
import './app.css' ;
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import {Router, Route, browserHistory, Link} from 'react-router';
import {PieChart} from 'react-easy-chart';
import {LineChart} from 'react-easy-chart';
import { Timeline } from 'react-twitter-widgets'


var Table = Reactable.Table,
    Thead = Reactable.Thead,
    Th = Reactable.Th;


class FighterBio extends React.Component{
  render() {
   return(
   <div className="Bio">
   <li>
      <img src={require("./pics/mma.png")} />

   </li>
   </div>


   )

  }
}



const NavBarConstant = React.createClass({
  handleSelect(eventKey) {
    event.preventDefault();
  
  },

  render() {
    return (
      <div id="navbar">
      <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
       
        <NavItem eventKey="1"><Link to="/">Home</Link></NavItem>
        <NavItem eventKey="2"><Link activeClassName="active" to="/featherweight">Feather Weight</Link></NavItem>
        <NavItem eventKey="3"><Link activeClassName="active" to="/lightweight">Light Weight</Link></NavItem>
        <NavItem eventKey="4"><Link activeClassName="active" to="/welterweight">Welter Weight</Link></NavItem>
        <NavItem eventKey="5"><Link activeClassName="active" to="/heavyweight">Heavy Weight</Link></NavItem>
       
      </Nav>
      </div>
    );
  }
});


export class Pound4Pound extends React.Component {
  render() {
    return(
      <div>
      <NavBarConstant />

      
    </div>
    );
    }
  }



 export class FeatherWeight extends React.Component {
   render() {
    return(
      <div>
      <NavBarConstant />
      
      
     <div id="fighter">
      <Fighter data={allFeatherWeights} />
      </div>
    </div>
    );
    }
  }

 class LineChartMaker extends React.Component{
  render(){
    return(
  
   <LineChart
    axisLabels={{x: 'Total Revenue', y: 'January'}}
    margin={{top: 10, right: 30, bottom: 50, left: 70}}
    yType={'time'}
    axes
    grid
    width={500}
    height={500}
    data={[
      [
        { x: 10, y: '1-Jan-15' },
        { x: 20, y: '10-Jan-15' },
        { x: 40, y: '21-Jan-15' },
        { x: 80, y: '31-Jan-15' }
      ], [
        { x: 0, y: '1-Jan-15' },
        { x: 15, y: '10-Jan-15' },
        { x: 20, y: '21-Jan-15' },
        { x: 25, y: '31-Jan-15' }
      ]
    ]}
  />
  );
}

 }
 export class LightWeight extends React.Component {
  render() {
    return(
      <div>
      <NavBarConstant />
      <div id = "lineFighter"><Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'TheNotoriousMMA'
    }}
    options={{
      username: 'TheNotoriousMMA',
      height: '400'
    }}
    onLoad={() => console.log('Timeline is loaded!')}
  /></div>
      <div id="fighter">
      <Fighter data={allLightWeights} />
      </div>
    </div>
    );
    }
  }
 
 export class Fighter extends React.Component {
  render() {

    const { data, filterText } = this.props;
    console.log(data)
    const namesList = data.filter(fighter =>{
     
      return fighter.name.toLowerCase().indexOf(filterText) >= 0
    })
    .map(fighter =>{
    
    return(
      
      <li key={fighter.id} className="thumbnailfighter">
                 
                

 
                <h1> <div id="fightertitle">{fighter.name}</div></h1>
                
                
                <img src={require(fighter.img)} />
                <div id="outer"><p>Win/Loss</p>
                
                <div id="pie"><PieChart size={200}
    labels
    data={[
      {key: 'Win', value: fighter.win, color: '#2a6d3b'},
      {key: 'Loss', value: fighter.lose, color: '#a0092c'}
    ]}
    styles={{
      '.chart_text': {
        fontSize: '1em',
        fill: '#fff'
      }
    }}
  /></div></div>

              </li>

    )

    })
    return(
     
    <div id="grid"><p>filterText value is {this.props.filterText}</p><ul>{namesList}</ul></div>
    
    );
    }
  }

  export class NamesList extends React.Component{

    render() {

      const { data } = this.props;
      console.log(data)
      const namesList = data.map(fighter =>{

        return(
        
        <li key={fighter.id} className="thumbnailfighter">

        <h1> <div id="fightertitle">{fighter.name}</div></h1>

        </li>

        )

      })
      return(

      <ul>{namesList}</ul>
      
      );
      
    }  
}







 export class WelterWeight extends React.Component {
  render() {
    return(
      <div>
      <NavBarConstant />
      <Fighter data={allWelterWeights} />
      
    </div>
    );
    }
  }

 export class HeavyWeight extends React.Component {
  render() {
    return(
      <div>
      <NavBarConstant />
      
    </div>
    );
    }
  }
       

export class FighterList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  filterUpdate(value){
   this.setState({
    filterText: value
   })
  }



  render() {
    console.log('filterText state from parent component', this.state.filterText)
    return (
	<div>
	   <NavBarConstant />
      <Search 
       filterText={this.state.filterText}
       filterUpdate={this.filterUpdate.bind(this)}
       />

       <Fighter data={allWelterWeights} 
        filterText={this.state.filterText}
        />
	
	  </div>
    )
  }
}

export class Search extends React.Component{

filterUpdate(){
  const val = this.myValue.value
  this.props.filterUpdate(val)
}
render(){
console.log('filter value',this.props.filterText)
return(
  <form>
  <input
   type="text"
   ref={ (value) => this.myValue = value }
   placeholder="Enter Fighter Name..."
   onChange={this.filterUpdate.bind(this)}
  />
  </form>

)

}


}