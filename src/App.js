import React from 'react';
import Reactable from 'reactable';
import allFighters from './Data'
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


class Pound4Pound extends React.Component {
  render() {
    return(
      <div>
      <NavBarConstant />
      
    </div>
    );
    }
  }



  class FeatherWeight extends React.Component {
  render() {
    return(
      <div>
      <NavBarConstant />
      
    </div>
    );
    }
  }

  class LightWeight extends React.Component {
  render() {
    return(
      <div>
      <NavBarConstant />
      
    </div>
    );
    }
  }

  class WelterWeight extends React.Component {
  render() {
    return(
      <div>
      <NavBarConstant />
      
    </div>
    );
    }
  }

  class HeavyWeight extends React.Component {
  render() {
    return(
      <div>
      <NavBarConstant />
      
    </div>
    );
    }
  }
       

class FighterList extends React.Component {
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
        data={allFighters}>
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


ReactDOM.render((
    <Router history={browserHistory}>
    <Route path="/" component={FighterList}>
    <Route path="Home" component={FighterList} />
    </Route>
    <Route path="heavyweight" component={HeavyWeight} />
    <Route path="lightweight" component={LightWeight} />
    <Route path="welterweight" component={WelterWeight} />
    <Route path="featherweight" component={FeatherWeight} />
              
    </Router>
), document.getElementById('root'))