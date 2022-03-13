import React from 'react';
import { Table } from 'reactstrap';

function StatsTable({ countries, numFormatter }) {
  return (
    <div>
      <div className='row'>
        <div className='col justify-content-end'>
          <p className='lead'> Coronavirus Cases by Country</p>
          <Table
            striped
            hover
            className='d-flex justify-content-between table-card '
          >
            <tbody>
              {countries.map(({ country, cases }) => (
                <tr>
                  <td key={country}>{country}</td>
                  <td className='text-right '>{numFormatter(cases)} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
export default StatsTable;
