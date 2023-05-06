import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Image from 'mui-image';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vTUQmMnyMZ_FGRwEEuXWyOJ6g9a0nNDOvv3HPrINRU4EH7dyvPGhhOC9YEmJLYvo4Mt_i5tuABY8EL6/pub?output=csv', {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
        console.log(results.data);
      },
    });
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.timestamp}>
          {item.wish} {item.yourName} - Rating {item.adresseeName}
          <Image src={replaceOpenWithUcExport(item.imageOfYou)} duration={0} />
        </li>
      ))}
    </ul>
  );
};

function replaceOpenWithUcExport(url) {
  return url.replace('open?', 'uc?export=view&');
}

export default App;
