import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const products = [
  //   {
  //     name: 'Apple MacBook Air M1',
  //     price: '108000 BDT'
  //   },
  //   {
  //     name: 'Apple iPhone 13 Pro Max',
  //     price: '165000 BDT'
  //   },
  //   {
  //     name: 'Apple Watch 7th Gen',
  //     price: '37000 BDT'
  //   },
  //   {
  //     name: 'Apple iPad Pro 9th Gen',
  //     price: '109000'
  //   }
  // ];
  return (
    <div className="App">
      {/* {
        products.map(product =>
          <Products name = {product.name} price = {product.price}></Products>
        )
      } */}
      {/* <Products name ='Apple MacBook Air M1' price ='108000 BDT'></Products>
      <Products name ='Apple iPhone 13 Pro Max' price ='156000 BDT'></Products>
      <Products name ='Apple Watch 7th Gen' price ='37000 BDT'></Products> */}
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
// function Products(props) {
//   return (
//     <div className='product'>
//       <h3>Name: {props.name}</h3>
//       <h4>Price: {props.price}</h4>
//     </div>
//   )
// }
// function Counter() {
//   const [count, setCount] = useState(0);
//   const increaseCount = () => setCount(count + 1);
//   const decreaseCount = () => setCount(count - 1);;
//     // const newCount = count + 1;
//     // setCount(newCount);
//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
    return (
      <div>
        <h2>External Users</h2>
        {
          // users.map(user =>
          //     <ExternalUsers name = {user} username = {user} emai = {user}></ExternalUsers>
          //   )
          users.map(user => <User name = {user.name} email = {user.email} address = {user.address}></User>)
        }
      </div>
    )
}
function User(props) {
  return (
    <div className='user'>
      <h5>Name: {props.name}</h5>   
      <h5>Email: {props.email}</h5>   
      <h5>Address: {props.address.street}</h5>
    </div>
  )
}

export default App;
