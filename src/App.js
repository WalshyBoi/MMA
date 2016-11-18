import React from 'react';
import Reactable from 'reactable';
import {AllFighters} from './Data'
import {allFeatherWeights} from './Data'
import './app.css' ;
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import {Router, Route, browserHistory, Link} from 'react-router';

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
    alert(`selected ${eventKey}`);
  },

  render() {
    return (
      <div id="navbar">
      <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
       
        <NavItem eventKey="1"><Link to="/">Home</Link></NavItem>
        <NavItem eventKey="2"><Link to="/featherweight">Feather Weight</Link></NavItem>
        <NavItem eventKey="3"><Link to="/lightweight">Light Weight</Link></NavItem>
        <NavItem eventKey="4"><Link to="/welterweight">Welter Weight</Link></NavItem>
        <NavItem eventKey="5"><Link to="/heavyweight">Heavy Weight</Link></NavItem>
       
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
      
    </div>
    );
    }
  }

 export class LightWeight extends React.Component {
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
 
 export class Fighter extends React.Component {
  render() {

    const { data } = this.props;
    console.log(data)
    const namesList = data.map(fighter =>{
    
    return(
      
      <li key={fighter.id} className="thumbnailfighter">
                 
                 <img src={require(fighter.img)} />
                 
                <p>{fighter.name}</p>

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
  render() {
    return (
	<div>
	   <NavBarConstant />
      
	<div className="table">
      <Table className="table"
        filterable={['name', 'weight', 'record']}
        noDataText="No matching records found"
        itemsPerPage={5}
        currentPage={0}
        sortable={true}
        data={AllFighters}>
        <Thead>
          <Th column="name">
            <strong className="name-header">Name</strong>
          </Th>
          
          <Th column="weight">Weight</Th>
          <Th column="record">Record</Th>
		  <Th column="img">CountryIcon</Th>

        </Thead>
      </Table>
	  </div>
	  </div>
    )
  }
}

