import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';
import { numFormatter } from '../utilities/utils';

const buildChartData = (data) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data['cases'][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data['cases'][date];
  }
  return chartData;
};

function Chart() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
      .then((response) => response.json())
      .then((json) => {
        console.log('Cases: ', json.cases);
        let chartData = buildChartData(json, 'cases');
        setData(chartData);

        console.log(chartData);
      });
  }, []);

  return (
    <div>
      <p className=' text-small'>
        {' '}
        <b>Total Daily New Cases</b>
      </p>
      {data.length && (
        <Line
          data={{
            datasets: [
              {
                data: data,
                backgroundColor: 'rgba(64, 224, 208, 0.1)',
                borderColor: 'rgba(64, 224, 208, 0.3)',
              },
            ],
          }}
          options={{
            maintainAspectRatio: true,
            tooltips: {
              mode: 'index',
              intersect: false,
              callbacks: {
                label: function (tooltipItem, data) {
                  return numeral(tooltipItem.value).format('+0,0');
                },
              },
            },
            legend: {
              display: false,
            },
            elements: {
              point: {
                radius: 0,
              },
            },

            scales: {
              xAxes: [
                {
                  type: 'time',
                  time: {
                    format: 'MM/DD/YY',
                    tooltipFormat: 'll',
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    callback: function (value) {
                      return numFormatter(value);
                    },
                  },
                },
              ],
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
