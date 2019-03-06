import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { SortingState, IntegratedSorting } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'username', title: 'Username' },
        { name: 'email', title: 'Email' },
        { name: 'phone', title: 'Phone' },
        { name: 'website', title: 'Website' }
      ],
      rows: props.data
    };
  }

  render() {
    const { rows, columns } = this.state;

    return (
      <Paper>
        <Grid rows={rows} columns={columns}>
          <SortingState defaultSorting={[{ columnName: 'city', direction: 'asc' }]} />
          <IntegratedSorting />
          <Table />
          <TableHeaderRow showSortingControls />
        </Grid>
      </Paper>
    );
  }
}
