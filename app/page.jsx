"use client"

import roupas from 'data/roupas';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Home() {
  const [apiData, setApiData] = useState('');

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

  return (
    <div>
      <p>daiub</p>
    </div>
  )
}
