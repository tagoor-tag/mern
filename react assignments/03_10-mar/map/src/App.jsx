import React from 'react';
import "./App.css"
import Cart from './compount/Cart/Cart';
import Table from './compount/Table/Table';
import Card2 from './compount/Cart2/Card2';
import Card3 from './compount/Card3/Card3';
import Job from './compount/Job-Postings/Job';


function App() {
  
      return(
        <div id='compount-container'>
          <Cart/>
          <Table/>
          <Card2/>
          <Card3/>
          <Job/>
        </div>
      )
  
}

export default App;