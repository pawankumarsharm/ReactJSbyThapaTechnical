import React from 'react';
import Card from './Card';
import SData from './SData';

const App = () => ( 
    <>
<h1 className="heading_style">List of Top 5 Netflix Series in 2021</h1>

{SData.map((val,Index) => {
    //console.log(index);
    return(
    <Card 
    key={val.id}
    imgsrc={val.imgsrc} 
    title={val.title} 
    sname={val.sname} 
    link ={val.link}
    />
);
})}
</>
);

export default App;