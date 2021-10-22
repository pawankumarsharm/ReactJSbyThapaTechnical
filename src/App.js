import React from 'react';
import {add,sub,mult,divi,mod} from './components/calc';
function App(){
  return(
    <>
 <ul>
     <li>The Sum of Two Numbers is : {add(40,4)}</li>
     <li>The Substartion of Two Numbers is : {sub(40,4)}</li>
     <li>The Multiplication of Two Numbers is : {mult(40,4)}</li>
     <li>The division of Two Numbers is : {divi(40,4)}</li>
     <li>The Modulus of Two Numbers is : {mod(40,4)}</li>
 </ul>
 </>
  );
}

export default App;