import { useEffect } from 'react';
import { useState } from 'react';
import { Navbar } from '../Components/Navbar';
import axios from 'axios';
import { nanoid } from 'nanoid';

export const Homescreen = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.covid19api.com/summary')
      .then((res) => setData(res.data.Global));
  }, []);

  useEffect(() => {
    axios
      .get('https://api.covid19api.com/summary')
      .then((res) => setData2(res.data.Countries));
  }, []);
  console.log(data);
  console.log(data2);

  return (
    <div>
      <Navbar />
      <h1 className="header">Total Covid Cases Worldwide</h1>
      <div className="header">
        <h2>Active : {data.TotalConfirmed}</h2>
        <h2>Recovered : {data.TotalRecovered}</h2>
        <h2>Deceased: {data.TotalDeaths}</h2>
      </div>
      <div className="graph">
        <h1>Graphical Representation</h1>
        <iframe
          title="graph"
          src="https://public.domo.com/cards/avnAV"
          width="60%"
          height="500"
        ></iframe>
      </div>
      <h1 className="header">Country-wise Data</h1>

      <div className='tab'>
        <table>
          <tr>
            <th>Name of the country</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Deceased</th>
          </tr>
          <tbody>
            {data2.map((e, i) => {
              return (
                <tr key={nanoid()}>
                  <td key={nanoid()}>{e.Country}</td>
                  <td key={nanoid()}>{e.TotalConfirmed}</td>
                  <td key={nanoid()}>{e.TotalRecovered}</td>
                  <td key={nanoid()}>{e.TotalDeaths}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
