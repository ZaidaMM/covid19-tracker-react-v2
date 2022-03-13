import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardGroup } from 'reactstrap';

function CountryCard({ title, cases, todayCases, casesPerOneMillion }) {
  return (
    <div>
      <CardGroup>
        <Card>
          <CardBody>
            <CardTitle tag='h5'>{title}</CardTitle>
            <hr />
            <CardText>
              {todayCases} <span className='small'> Today</span>
            </CardText>
            <CardText>
              {cases} <span className='small'> Total</span>
            </CardText>
            <CardText>
              {casesPerOneMillion} <span className='small'> p/1m pop.</span>
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

export default CountryCard;
