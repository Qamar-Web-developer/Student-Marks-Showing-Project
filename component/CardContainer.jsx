import React from 'react'
import Card from './Card'




const urls = [];
for (let i = 1; i <= 103; i++) {
    let rollNo = String(i).padStart(3, '0');
    urls.push(` https://cms.must.edu.pk:8082/Chartlet/MUSTFA23-BEE-${rollNo}AJK/FanG_Chartlet_GPChart.Jpeg`)
}

export default function CardContainer({ query }) {
    
    const arry = urls.map((data, i) => {

        return <Card name={data} key={i} rollNo={i + 1} />

    })

    return (
        <div className="countries-container">
            {arry}
        </div>
    )
}
