import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

function SelectedCountryStats() {
  return (
    <div className='selectedCountryStats text-center'>
      <CardGroup>
        <Card>
          <CardBody>
            <CardTitle tag='h5'>
              Selected Country Stats
              <Link to='/' className='card-link'>
                Back to home
              </Link>
            </CardTitle>
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
