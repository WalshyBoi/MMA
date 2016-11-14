import React from 'react';
import Reactable from 'reactable';
import allFighters from './Data'

var Table = Reactable.Table,
    Thead = Reactable.Thead,
    Th = Reactable.Th;


class FighterList extends React.Component {



  render() {
    return (<div className="table">
      <Table className="table"
        filterable={['name', 'weight', 'record']}
        noDataText="No matching records found"
        itemsPerPage={10}
        currentPage={0}
        sortable={true}
        data={allFighters}>
        <Thead>
          <Th column="name">Name</Th>
          <Th column="weight">Weight</Th>
          <Th column="record">Record</Th>
         
        </Thead>
      </Table>
	  </div>
    )
  }



}
export default FighterList;

  