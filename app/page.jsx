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
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const filteredData = apiData.filter(item => item.type.value == 'outfit' && item.name !== 'TBD' && item.name !== 'null' && item.introduction !== null);



  console.log(filteredData);

  const formattedData = (date) => {
    const format = date.slice(0, 10);
    return format.split('-').reverse().join('/');
  }

  const price = (item) => {
    if (item.rarity.displayValue == 'Legendary') {
      return "2000 v-bucks"//favor colocar o icon no lugar dessa escrita tenebrosa;
    }
   else if (item.rarity.displayValue == 'Rare') {
      return "1200 v-bucks" //favor colocar o icon no lugar dessa escrita tenebrosa;
    }
   else if (item.rarity.displayValue == 'Uncommon') {
      return "800 v-bucks" //favor colocar o icon no lugar dessa escrita tenebrosa;
    }
   else if (item.rarity.displayValue == 'Common') {
      return "500 v-bucks" //favor colocar o icon no lugar dessa escrita tenebrosa;
    }
    else {
      return "1500 v-bucks" //favor colocar o icon no lugar dessa escrita tenebrosa;
    }
  }
  return (
    <div>
      {

        // quando fazer o carregar é aqui que voce vai mexer blz?


        filteredData.map((item, index) => {
          if (index < 1699) {
            return (
              <div key={index}>
                <h1>{item.name}</h1>
                <img src={item.images.icon} width={256} height={256} />
                <p>{item.rarity.displayValue}</p>
                <p>{item.introduction.text}</p>
                <p>{formattedData(item.added)}</p>
                <p>{price(item)}</p>
              </div>
            );
          }
        })
      }
    </div>
  )
}
