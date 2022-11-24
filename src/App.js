import './App.css'; 
import{useEffect , useState} from 'react'
import Axios from 'axios';







function App() {

  const [data , setData]=useState([])
  



useEffect(()=>{
  Axios.get('https://plotter-task.herokuapp.com/columns')
  .then(res=> console.log(res.data) )
  .catch(err=> console.log(err))
},[])
const postData = (e)=> {

  e.preventDefault();
  Axios.post('https://plotter-task.herokuapp.com/data',{

    "measures": ["Cost"],
    "dimension": "Product"
    
})

  .then(res=> console.log ('basant',res))
  .catch(err=> console.log(err))
  

}

const arr = data.map((data ,id)  => {
  return(
    <table  key={id}>

    <tbody>
    
    <tr >
         
          <td>{data.name}</td>
          <td>{data.function}</td>
          
        </tr>
        </tbody>
        </table>
  )

})

  return (
    <div className="App">
      
      <div className="slide">
        <h4>Coulms</h4>
        <hr/>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
         Product
             </a>
             <a href="https://google.com" target="_blank" rel="noopener noreferrer">
         Reverue
             </a>
             <a href="https://google.com" target="_blank" rel="noopener noreferrer">
         Year
             </a>
             <a href="https://google.com" target="_blank" rel="noopener noreferrer">
         Country
             </a>
             <a href="https://google.com" target="_blank" rel="noopener noreferrer">
         Cost
             </a>
             <a href="https://google.com" target="_blank" rel="noopener noreferrer">
         Units gold
             </a>



      </div>


        
        {arr}
        
    </div>
  
  );

}

export default App;
