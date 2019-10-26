import React from 'react';
import './styles/app.scss';
import AddForm from './components/AddForm';
import OrderList from './components/OrderList';

function App() {
  return (
    <div className="App">
      <div>
        <AddForm></AddForm>
      </div>
      <div>
        <OrderList></OrderList>
      </div>      
    </div>
  );
}

export default App;
