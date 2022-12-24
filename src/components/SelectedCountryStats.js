import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardGroup } from 'reactstrap';

function SelectedCountryStats() {
  return (
    <div className='selectedCountryStats text-center'>
      <CardGroup>
        <Card>
          <CardBody>
            <CardTitle tag='h5'>Selected Country Stats</CardTitle>
            <hr />
            <CardText>
              10k <span className='small'> Cases Today</span>
            </CardText>
            <CardText>
              100k <span className='small'> Total Cases</span>
            </CardText>
            <CardText>
              1k
              <span className='small'> Cases p/1m pop.</span>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

export default SelectedCountryStats;
