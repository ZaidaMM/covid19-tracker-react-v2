import React from 'react';
import { Table } from 'reactstrap';
import numeral from 'numeral';

function StatsTable({ countries }) {
  return (
    <div className='statsTable'>
      <div className='row'>
        <div className='col align-items-center'>
          <p className=' text-small'>
            {' '}
            <b>Live Cases by Country</b>
          </p>
          <Table className='tableCard d-flex '>
            <tbody>
              {countries.map(({ country, cases }) => (
                <tr className='d-flex justify-content-between'>
                  <td key={country}>{country}</td>
                  <td className='text-right '>{numeral(cases).format(0.0)} </td>
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
