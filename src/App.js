import logo from './logo.svg';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { Row } from 'react-bootstrap';








const mycontex = createContext();



function App() {

    var products =[
       {name : 'Photoshop',price :'$20'},
       {name : 'illustrator' , price :'$10'},
       {name : 'figma' , price :'$10'},
       {name : 'Visual Code' , price :'$10'},
       {name : ' Code' , price :'$10'}

    ]
   const [likeColor,setColor] = useState();
    const handleLikeColor =()=>{
      const color = likeColor ? '' : 'primary';
      setColor(color);
    }

  return (
    <div className="App">
      <header className="App-header">

        <button > sign in</button>


        <AccessAlarmIcon></AccessAlarmIcon>
        <ThumbUpOutlinedIcon onClick={handleLikeColor} color={likeColor}></ThumbUpOutlinedIcon>
        <Count></Count>
        <User></User>
        {
          products.map(pd => <Product sell={pd}></Product>)

        }


      </header>
    </div>
  );
}
function User(){
  const [ users,setUser] = useState([]);
  useEffect(()=>{

    fetch (`https://jsonplaceholder.typicode.com/users`)
    .then (res => res.json())
    .then (data =>
      { console.log(data)
        setUser(data)});
  },[])

  return (
    <div style={{color :'white'}}>
      Dynamic USer:
     <ul> {
        users.map( people =>  <li>{people.name}</li>)
      }
      </ul>
    </div>
  )
}
function Count(){
  const[ count,setCount]= useState(0);
   const handleIncrease = () => setCount(count+1);


  return(
<div> 
  <h3>Count : {count}</h3>
  <button onMouseMove ={() => setCount(count-1)}> click</button>
 <button onClick={handleIncrease}> click</button> 
</div>

  );
}

function Product (props){
 const productStyle ={
  display : 'flex-wrap',
  backgroundColor :'lightgray',
  borderRadius : '5px',
  width : '200px',
  height : '200px',
  margin : '2px',
  color : 'black'

 }
 const { name, price } = props.sell;

 console.log(props);
 return (
<Row xs={4} md={4} className="g-4">
  {Array.from({ length: 2 }).map((_, idx) => (
    <div style={productStyle}>
        <div >
    <h3>{name}</h3>
    <h2>{price}</h2>
    <button>Buy now</button>

   </div>
   </div>
  ))}

  </Row>



);

 }

export default App;
