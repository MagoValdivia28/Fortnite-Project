"use client"

import roupas from 'data/roupas';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Home() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await roupas();
        setApiData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const filteredData = apiData.filter(item => item.type.value == 'outfit' && item.name !== 'TBD' && item.name !== 'null');


  console.log(filteredData);
  return (
    <div>
      {
        filteredData.map((item, index) => {
          if (index < 1725) {
            return (
              <div key={index}>
                <p>{index}</p>
                <h1>{item.name}</h1>
                <img src={item.images.icon} width={256} height={256} />
              </div>
            );
          } else {
            console.log('erro');
            return null; // ou outro elemento que você queira renderizar
          }
        })
      }
    </div>
  )
}
