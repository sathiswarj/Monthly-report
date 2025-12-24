import React from 'react'
import { ArrowRight } from 'lucide-react'

const CardDetail = ({data, departmentData}) => {
  return (
    <>
      <div className='max-w-8xl mx-auto mt-4 sm:mt-6 lg:mt-8 px-4 sm:px-6'>
        {data && data.map((item) => (
          <div key={item.id} className='bg-white rounded-xl shadow-lg overflow-hidden mb-4 sm:mb-6'>
             <div className='bg-gradient-to-r from-[#4BA3E8] to-[#6BB8F0] px-4 sm:px-6 lg:px-8 py-4 sm:py-6'>
              <div className='flex flex-col sm:flex-row justify-between items-start gap-4'>
                <div className='flex-1'> 
                  <h2 className='text-lg sm:text-xl font-semibold text-white mb-2'>{item.title}</h2>
                  <p className='text-white text-sm sm:text-base lg:text-lg'>
                    <span className='font-medium'>Department:</span> {item.department}
                  </p>
                </div>
                <div className='text-left sm:text-right text-white flex-shrink-0'>
                  {item.incidentDetails && item.incidentDetails.map((detail) => (
                    <div key={detail.id} className='mb-1'>
                      <span className='font-medium text-sm sm:text-base'>{detail.name}:</span>{' '}
                      <span className='text-base sm:text-lg font-semibold'>{detail.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50'>
              {item.assets && item.assets.map((asset) => (
                <div key={asset.id} className='bg-white rounded-lg shadow p-4 relative hover:shadow-md transition-shadow'>
                  <button 
                    className='absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 sm:p-2 transition-colors'
                    aria-label='View details'
                  >
                    <ArrowRight className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700' />
                  </button>
                  
                  <div className='space-y-2 sm:space-y-3 pr-8'>
                    <div className='flex flex-col sm:flex-row sm:gap-2'>
                      <p className='text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap'>Asset name:</p>
                      <p className='text-sm sm:text-base text-gray-700 break-words'>{asset.assetName}</p>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:gap-2'>
                      <p className='text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap'>Asset code:</p>
                      <p className='text-sm sm:text-base text-gray-700 break-words'>{asset.assetCode}</p>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:gap-2'>
                      <p className='text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap'>Start Date:</p>
                      <p className='text-sm sm:text-base text-gray-700'>{asset.startDate}</p>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:gap-2'>
                      <p className='text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap'>Clear Date:</p>
                      <p className='text-sm sm:text-base text-gray-700'>{asset.clearDate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {departmentData && departmentData.map((dept) => (
          <div key={dept.id} className='bg-white rounded-xl shadow-lg overflow-hidden mb-4 sm:mb-6'>
             <div className='bg-gradient-to-r from-[#4BA3E8] to-[#6BB8F0] px-4 sm:px-6 lg:px-8 py-3 sm:py-4'>
              <p className='text-white text-sm sm:text-base lg:text-lg'>
                <span className='font-medium'>Department:</span> {dept.department}
              </p>
            </div>

             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50'>
              {dept.assets && dept.assets.map((asset) => (
                <div key={asset.id} className='bg-white rounded-lg shadow p-4 relative hover:shadow-md transition-shadow'>
                  <button 
                    className='absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 sm:p-2 transition-colors'
                    aria-label='View details'
                  >
                    <ArrowRight className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700' />
                  </button>
                  
                  <div className='space-y-2 sm:space-y-3 pr-8'>
                    <div className='flex flex-col sm:flex-row sm:gap-2'>
                      <p className='text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap'>Asset name:</p>
                      <p className='text-sm sm:text-base text-gray-700 break-words'>{asset.assetName}</p>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:gap-2'>
                      <p className='text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap'>Asset code:</p>
                      <p className='text-sm sm:text-base text-gray-700 break-words'>{asset.assetCode}</p>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:gap-2'>
                      <p className='text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap'>Start Date:</p>
                      <p className='text-sm sm:text-base text-gray-700'>{asset.startDate}</p>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:gap-2'>
                      <p className='text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap'>Clear Date:</p>
                      <p className='text-sm sm:text-base text-gray-700'>{asset.clearDate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CardDetail