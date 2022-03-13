import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardGroup } from 'reactstrap';

function CountryCard({ title, cases, todayCases, casesPerOneMillion }) {
  const numFormatter = (num) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(0) + 'k'; // convert to k for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(0) + 'm'; // convert to m for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  };
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
