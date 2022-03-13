import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import { Form, FormGroup, Input, CardGroup, CardDeck } from 'reactstrap';

function Main() {
  const [selectedCode, setSelectedCode] = useState('Worldwide');
  const [selectedCountry, setSelectedCountry] = useState({});
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountriesData() {
      await fetch('https://disease.sh/v3/covid-19/countries')
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
  }, []);

  console.log('Countries:', countries);

  const onCountryChange = async (event) => {
    const selectedCode = event.target.value;

    const url =
      selectedCode === 'worldwide'
        ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${selectedCode}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSelectedCode(selectedCode);
        setSelectedCountry(data);
        console.log('Country selected: ', selectedCode);
        console.log('Country data: ', data);
      });
  };

  console.log('Country selected: ', selectedCode);

  return (
    <div>
      <div className='row m-4'>
        <div className='col-md-9'>
          <h3 className='text-center'>Coronavirus Data by Country</h3>
          <div className='row align-items-baseline'>
            <div className='col-md-6'>
              <h4 className='text-center offset-md-3'>
                {selectedCountry.country}
              </h4>
            </div>
            <Form className='col text-center'>
              <FormGroup className='py-3'>
                <Input
                  type='select'
                  id='selectCountry'
                  name='selectCountry'
                  onChange={onCountryChange}
                  value={selectedCode}
                >
                  <option value='worldwide'>Worldwide</option>
                  {countries.map((country) => {
                    return (
                      <option value={country.value}>{country.name}</option>
                    );
                  })}
                </Input>
              </FormGroup>
            </Form>
          </div>

          <div className='row'>
            <div className='col-md-4'>
              <CountryCard
                title={'Coronavirus Cases'}
                cases={selectedCountry.cases}
                todayCases={selectedCountry.todayCases}
                casesPerOneMillion={selectedCountry.casesPerOneMillion}
              />
            </div>
            <div className='col-md-4'>
              <CountryCard
                title={'Recovered'}
                cases={selectedCountry.recovered}
                todayCases={selectedCountry.todayRecovered}
                casesPerOneMillion={selectedCountry.recoveredPerOneMillion}
              />
            </div>
            <div className='col-md-4'>
              <CountryCard
                title={'Deaths'}
                cases={selectedCountry.deaths}
                todayCases={selectedCountry.todayDeaths}
                casesPerOneMillion={selectedCountry.deathsPerOneMillion}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;