import React from 'react';
import './App.css';
import Expenses from './Component/Expenses';

function App() {
  let expence = [
    {
      id: '1',
      date: new Date(2022, 2, 2),
      title: "Mahi",
      price: 200
    },
    {
      id: '2',
      date: new Date(2021, 12, 12),
      title: "abc1",
      price: 300
    },
    {
      id: '3',
      date: new Date(2020, 5, 15),
      title: "MahiKolhe",
      price: 500
    }
  ];
  return (
    <div>
      <Expenses item={expence} />
    </div>
  );
}

export default App;
