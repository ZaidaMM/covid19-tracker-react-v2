import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

function Main() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountriesData() {
      await fetch('https://corona.lmao.ninja/v2/countries')
        .then((res) => res.json())
        .then((json) => {
          const countries = json.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    }
    getCountriesData();
    console.log('Countries:', countries);
  }, []);

  return (
    <div>
      <div className='row m-4'>
        <div className='col-md-9'>
          <h3 className='text-center'>Coronavirus Data by Country</h3>
          <div className='row align-items-baseline'>
            <div className='col-md-6'>
              <h4 className='text-center offset-md-3'>Worldwide</h4>
            </div>
            <Form className='col text-center'>
              <FormGroup className='py-3'>
                <Input type='select' id='selectCountry' name='selectCountry'>
                  {countries.map((country) => {
                    return (
                      <option value={country.value}>{country.name}</option>
                    );
                  })}
                </Input>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
