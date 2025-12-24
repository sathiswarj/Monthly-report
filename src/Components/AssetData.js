import React from 'react'
import Frame from '../assets/Frame.png'
import Distance from '../assets/distance.png'
import PieChartInGrid from './Charts/PieChart'
import MixBarChart from './Charts/BarChart'
import Card from './Incident/Card'
import IncidentReport from './Charts/IncidentReport'
import WorkReport from './Charts/WorkReport'
import IncidentReportDetail from './Incident/IncidentReport'
import WorkReportDetail from './Incident/WorkReport'

const AssetData = () => {
  return (
    <>
      <div className='max-w-full  px-4 sm:px-6 py-4 bg-gray-50 min-h-screen'>
        
        <div className="bg-gray-50 p-4 sm:p-6 lg:p-8">
          <div className="max-w-8xl ">
            <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 sm:gap-6">
               <div className='w-full lg:w-[500px] bg-[#022A66] rounded-xl shadow-xl p-4 sm:p-6 flex flex-col justify-center flex-shrink-0'>
                <div className='flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6'>
                  <img src={Frame} alt='Institute' className='w-12 h-12 sm:w-14 sm:h-14 object-contain' />
                  <p className='text-white text-sm sm:text-base lg:text-lg leading-tight'>
                    Sri siddhartha institute of medical science
                  </p>
                </div>
                <div className='flex items-center gap-3 sm:gap-4'>
                  <img src={Distance} alt='Location' className='w-12 h-12 sm:w-14 sm:h-14 object-contain' />
                  <p className='text-white text-sm sm:text-base lg:text-lg'>Vijayanagar</p>
                </div>
              </div>
              
               <div className='w-full lg:flex-1'>
                <PieChartInGrid />
              </div>
              
               <div className='w-full lg:flex-1'>
                <MixBarChart />
              </div>
            </div>
          </div>
        </div>

        <div className='bg-gradient-to-r from-[#F44771] to-[#E8356D] max-w-full text-white py-4 px-4 rounded-xl shadow-xl font-semibold flex flex-col w-full sm:w-[500px] h-[100px] mt-4'>
          <span>Total Assets</span>
          <span className='ml-2 text-2xl'>1500</span>
        </div>

        <Card />

        <IncidentReport />
        <WorkReport />

        <IncidentReportDetail />
        <WorkReportDetail />
      </div>
    </>
  )
}

export default AssetData