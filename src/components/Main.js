import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import StatsTable from './StatsTable';
import { Form, FormGroup, Input, Table } from 'reactstrap';
import { sortData } from '../utilities/utils';

function Main() {
  const [selectedCode, setSelectedCode] = useState('worldwide');
  const [selectedCountry, setSelectedCountry] = useState({});
  const [countries, setCountries] = useState([]);
  const [statsTableData, setStatsTableData] = useState([]);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then((res) => res.json())
      .then((data) => {
        setSelectedCountry(data);
      });
  }, []);

  useEffect(() => {
    async function getCountriesData() {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((res) => res.json())
        .then((json) => {
          const countries = json.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
            cases: country.cases,
          }));

          const sortedData = sortData(json, 'cases');
          setStatsTableData(sortedData);
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
    <div className='container mt-4 '>
      <div className='row '>
        <div className='col-md-9 '>
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
                cases={numFormatter(selectedCountry.cases)}
                todayCases={numFormatter(selectedCountry.todayCases)}
                casesPerOneMillion={numFormatter(
                  selectedCountry.casesPerOneMillion
                )}
              />
            </div>
            <div className='col-md-4'>
              <CountryCard
                title={'Recovered'}
                cases={numFormatter(selectedCountry.recovered)}
                todayCases={numFormatter(selectedCountry.todayRecovered)}
                casesPerOneMillion={numFormatter(
                  selectedCountry.recoveredPerOneMillion
                )}
              />
            </div>
            <div className='col-md-4'>
              <CountryCard
                title={'Deaths'}
                cases={numFormatter(selectedCountry.deaths)}
                todayCases={numFormatter(selectedCountry.todayDeaths)}
                casesPerOneMillion={numFormatter(
                  selectedCountry.deathsPerOneMillion
                )}
              />
            </div>
          </div>
        </div>
        <div className='col-md-3 '>
          <StatsTable countries={statsTableData} numFormatter={numFormatter} />
          {/* <Chart /> */}
        </div>
      </div>
    </div>
  );
}
export default Main;
