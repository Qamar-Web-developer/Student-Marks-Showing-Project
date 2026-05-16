import React from 'react'
import Card from './Card'
import ShimmerEffect from './ShimmerEffect';





export default function CardContainer({ query1,query2 ,query3}) {
   
    const urls = [];
for (let i = 1; i <= query3; i++) {
    let rollNo = String(i).padStart(3, '0');
    urls.push(` https://cms.must.edu.pk:8082/Chartlet/MUST${query1}-${query2}-${rollNo}AJK/FanG_Chartlet_GPChart.Jpeg`)
}
   
    const arry = urls.map((data, i) => {

        return <Card name={data} key={i} rollNo={i + 1} query1={query1} query2={query2} />

    })
    if(!arry.length){
        return <ShimmerEffect />
    }
    return (
        <div className="countries-container">
            {arry}
        </div>
    )
}
