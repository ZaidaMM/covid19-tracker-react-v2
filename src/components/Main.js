import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import StatsTable from './StatsTable';
import Chart from './Chart';
import Map from './Map';
import { Form, FormGroup, Input } from 'reactstrap';
import { sortData } from '../utilities/utils';
import 'leaflet/dist/leaflet.css';
// import { Link } from 'react-router-dom';

function Main() {
  const [selectedCode, setSelectedCode] = useState('worldwide');
  const [selectedCountry, setSelectedCountry] = useState({});
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [statsTableData, setStatsTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState(['51.4934', '-0.0098']);
  const [mapZoom, setMapZoom] = useState(2);

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
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            code: country.countryInfo.iso2,
            cases: country.cases,
            newToday: country.casesToday,
            lat: country.countryInfo.lat,
            long: country.countryInfo.long,
          }));
          setMapCountries(data);
          setStatsTableData(data);
          const sortedData = sortData(data, 'cases');
          setCountries(countries);
          console.log(sortedData);
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
        setMapCenter([
          selectedCountry.countryInfo.lat,
          selectedCountry.countryInfo.long,
        ]);
        setMapZoom(8);

        console.log('Map Center: ', mapCenter);
        console.log([selectedCountry.countryInfo.lat]);
        console.log([selectedCountry.countryInfo.long]);
        console.log('Country selected: ', selectedCode);
        console.log('Country data: ', data);
      });
  };

  return (
    <div className='mainBody m-4 '>
      <div className='row '>
        <div className='col-md-9 '>
          <h3 className='text-center'>Coronavirus Data by Country</h3>
          <div className='row align-items-baseline '>
            <div className='col-md-6'>
              <h4 className='text-center offset-md-3 unstyled bold'>
                {selectedCountry.country
                  ? selectedCountry.country
                  : 'Worldwide'}
              </h4>
              {/* <Link to='/SelectedCountryStats'>
                <h4 className='text-center offset-md-3 unstyled lead'>
                  {selectedCountry.country}
                </h4>
              </Link> */}
            </div>
            <Form className='col text-center'>
              <FormGroup className='py-3'>
                <Input
                  type='select'
                  id='selectCountry'
                  name='selectCountry'
                  onChange={onCountryChange}
                  value={selectedCode}
                  key={selectedCountry.code}
                >
                  <option value='worldwide'>Worldwide</option>
                  {countries.map((country) => {
                    return (
                      <option value={country.name} key={country.name}>
                        {country.name}
                      </option>
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
          <div className='row'>
            <div className='col m-3 leafletContainer'>
              <Map
                mapCountries={mapCountries}
                center={mapCenter}
                zoom={mapZoom}
              />
            </div>
          </div>
        </div>
        <div className='col-md-3 mx-auto my-3 py-4 sidebar'>
          <StatsTable countries={statsTableData} />
          <Chart />
        </div>
      </div>
    </div>
  );
}
export default Main;
