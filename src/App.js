import React from 'react';
import Reactable from 'reactable';
import allFighters from './Data'
import './app.css' ;

var Table = Reactable.Table,
    Thead = Reactable.Thead,
    Th = Reactable.Th;

class Header extends React.Component{
	render(){
		return(
			
			<header>{this.props.header}</header>
		);
		
	}
	
}

class Fighter extends React.Component{
  render() {
   

  }
}

       

class FighterList extends React.Component {
  render() {
    return (
	<div>
	   <Header header={"Random"} />
	  
	<div className="table">
      <Table className="table"
        filterable={['name', 'weight', 'record']}
        noDataText="No matching records found"
        itemsPerPage={5}
        currentPage={0}
        sortable={true}
        data={allFighters}>
        <Thead>
          <Th column="name">Date</Th>
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
export default FighterList;
  