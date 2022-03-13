import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardGroup } from 'reactstrap';
import { numFormatter } from '../utilities/utils';

function CountryCard({ title, cases, todayCases, casesPerOneMillion }) {
  return (
    <div>
      <CardGroup>
        <Card>
          <CardBody>
            <CardTitle tag='h5'>{title}</CardTitle>
            <hr />
            <CardText>
              {numFormatter(todayCases)} <span className='small'> Today</span>
            </CardText>
            <CardText>
              {numFormatter(cases)} <span className='small'> Total</span>
            </CardText>
            <CardText>
              {numFormatter(casesPerOneMillion)}{' '}
              <span className='small'> p/1m pop.</span>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

export default CountryCard;
