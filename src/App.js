import React from 'react';
import Reactable from 'reactable';
import {AllFighters} from './Data'
import {allFeatherWeights} from './Data'
import {allLightWeights} from './Data'
import {allWelterWeights} from './Data'
import {allHeavyWeights} from './Data'
import './app.css' ;
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import {Router, Route, browserHistory, Link} from 'react-router';
import {PieChart} from 'react-easy-chart';
import {LineChart} from 'react-easy-chart';
import { Timeline } from 'react-twitter-widgets'






const NavBarConstant = React.createClass({
  handleSelect(eventKey) {
    event.preventDefault();
  
  },

  render() {
    return (
      <div id="navbar">
      <Nav bsStyle="tabs"  onSelect={this.handleSelect}>
        
        <NavItem eventKey="1"><Link to="/">Home Of MMA</Link></NavItem>
        <NavItem eventKey="2"><Link activeClassName="active" to="/featherweight">Feather Weight</Link></NavItem>
        <NavItem eventKey="3"><Link activeClassName="active" to="/lightweight">Light Weight</Link></NavItem>
        <NavItem eventKey="4"><Link activeClassName="active" to="/welterweight">Welter Weight</Link></NavItem>
        <NavItem eventKey="5"><Link activeClassName="active" to="/heavyweight">Heavy Weight</Link></NavItem>
        
      </Nav>
      </div>
    );
  }
});







 export class FeatherWeight extends React.Component {
   render() {
    return(
      <div>
      <NavBarConstant />
      <div id="tweet"><blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">2014 I called this <a href="https://twitter.com/hashtag/DoubtMeNow?src=hash">#DoubtMeNow</a> <a href="https://t.co/ogaLUY3Eoh">https://t.co/ogaLUY3Eoh</a></p>&mdash; Conor McGregor (@TheNotoriousMMA) <a href="https://twitter.com/TheNotoriousMMA/status/798331554585919488">15 November 2016</a></blockquote>
        <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></div>
      
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
        <div id="tweet"><blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">2014 I called this <a href="https://twitter.com/hashtag/DoubtMeNow?src=hash">#DoubtMeNow</a> <a href="https://t.co/ogaLUY3Eoh">https://t.co/ogaLUY3Eoh</a></p>&mdash; Conor McGregor (@TheNotoriousMMA) <a href="https://twitter.com/TheNotoriousMMA/status/798331554585919488">15 November 2016</a></blockquote>
        <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></div>
       
        <Fighter data={allLightWeights} />
      
      </div>
      );
      }
    }
 
    export class Fighter extends React.Component {
      render() {

        const {data} = this.props;
        const namesList = data.map(fighter =>{

          return(

          <li key={fighter.id} className="thumbnailfighter">
          <h1> <div id="fightertitle">{fighter.name}</div></h1>


          <div id="fighterPic"><img src={require(fighter.img)} /></div>
          <div id="outer"><h2>Fighter Bio</h2>

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
            />
            <h3>"{fighter.nick}"</h3>

            <p>Height: {fighter.height}</p></div>
            <div id ="wiki">
            <a href={fighter.wiki}> 
            <img src={require("./pics/Social/Wiki.png")} /> 
            </a>
            <a href={fighter.twitter}> 
            <img src={require("./pics/Social/twitter.png")} />
            </a>
            </div>

            </div>
            </li>

            )

          })
          return(

          <div id="grid"><ul>{namesList}</ul></div>

          );
        }
      }



export class AllFighterComponent extends React.Component {
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
               

              </li>

    )

    })
    return(
     
    <div id="grid"><ul>{namesList}</ul></div>
    
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
      
      <div id="tweet2"><blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">Sometimes it is God&#39;s will to Cause us to Triumph. Weather we deserve or see it! I was blessed… <a href="https://t.co/4nut5NNw1k">https://t.co/4nut5NNw1k</a></p>&mdash; Tyron T-Wood Woodley (@TWooodley) <a href="https://twitter.com/TWooodley/status/797810031030894593">13 November 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></div>

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
      <Fighter data = {allHeavyWeights} />
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
      return (
  <div>
     <NavBarConstant />
      <Search 
       filterText={this.state.filterText}
       filterUpdate={this.filterUpdate.bind(this)}
       />

       <AllFighterComponent data={AllFighters} 

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

return(
  <div id="searchbar">
  <form>
  <input
   type="text"
   ref={ (value) => this.myValue = value }
   placeholder="Enter Fighter Name..."
   onChange={this.filterUpdate.bind(this)}
  />
  </form>
  </div>

)

}


}