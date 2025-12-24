import React from 'react'

const Card = () => {

    const data =[
        {
            id:1,
            title:"Check outs",
            value:[
                {id:1, name:"Checked in", count:0},
                {id:2, name:"Checked out", count:25},
             ],
        },
        {
            id:2,
            title:"Incidents",
            value:[
                {id:1, name:"Incidents", count:"22 Reported"},
                {id:2, name:"Total Downtime", count:"12 mins 10 sec"},
                {id:3, name:"Closed", count:19},
                {id:4, name:"Open", count:3},
                {id:5, name:"Budget spent", count:"₹ 3,00,000"},
             ],
        },
        {
            id:3,
            title:"Work Order",
            value:[
                {id:1, name:"Work order", count:"17 requested"},
                {id:2, name:"Closed", count:14},
                {id:3, name:"Open", count:3},
                {id:4, name:"Budget spent", count:"₹ 3,00,000"},
             ],
        },

    ]
  return (
    <>
    <div className='max-w-8xl mx-auto mt-4 '>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {data.map((item)=>(
                <div key={item.id} className='bg-white shadow rounded-lg overflow-hidden'>
                    <h2 className='text-lg font-medium text-gray-900 bg-[#D4EBFF] px-6 py-4'>{item.title}</h2>
                    <ul className='px-6 pb-6 pt-2'>
                        {item.value.map((val)=>(
                            <li key={val.id} className='flex justify-between py-2 '>
                                <span className='font-semibold text-gray-700'>{val.name}</span>
                                <span className=' text-gray-900'>{val.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>  
            ))}
        </div>
    </div>
    
    </>
  )
}

export default Card