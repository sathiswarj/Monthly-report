import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

const HorizontalBarChart = ({ title, data, openColor, closedColor, xAxisLabel }) => {
  const [isSmallDevice, setIsSmallDevice] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallDevice(window.innerWidth < 640);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className='w-full bg-gray-50 p-2 sm:p-4 lg:p-8 max-w-8xl mx-auto'>
      <div className='bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-6'> 
         <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4'>
          <h2 className='text-base sm:text-lg font-semibold'>{title}</h2>
          <div className='flex gap-3 sm:gap-4'>
            <div className='flex items-center gap-2'>
              <div className='w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full' style={{ backgroundColor: openColor }}></div>
              <span className='text-xs sm:text-sm'>Open</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full' style={{ backgroundColor: closedColor }}></div>
              <span className='text-xs sm:text-sm'>Closed</span>
            </div>
          </div>
        </div>
        
         <ResponsiveContainer width="100%" height={isSmallDevice ? 300 : 400}>
          <BarChart
            data={data}
            layout={isSmallDevice ? "horizontal" : "vertical"}
            margin={{
              top: 10,
              right: isSmallDevice ? 10 : 30,
              left: isSmallDevice ? -20 : 20,
              bottom: isSmallDevice ? 5 : 20,
            }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              horizontal={isSmallDevice ? true : false}
            />
            
            {isSmallDevice ? (
               <>
                <XAxis 
                  type="category" 
                  dataKey="name"
                  tick={{ fontSize: 10 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  type="number"
                  tick={{ fontSize: 10 }}
                />
              </>
            ) : (
               <>
                <XAxis 
                  type="number" 
                  label={{ value: xAxisLabel, position: 'bottom', offset: 0 }}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  width={150}
                  tick={{ fontSize: 12 }}
                />
              </>
            )}
            
            <Tooltip 
              contentStyle={{ fontSize: '12px' }}
              cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
            />
            
            <Bar 
              dataKey="open" 
              stackId="a" 
              fill={openColor} 
              radius={isSmallDevice ? [4, 4, 0, 0] : [0, 4, 4, 0]}
            >
              <LabelList 
                dataKey="open" 
                position="center" 
                fill="#fff" 
                fontSize={isSmallDevice ? 10 : 12} 
                fontWeight="bold"
                formatter={(value) => value > 0 ? value : ''}
              />
            </Bar>
            
            <Bar 
              dataKey="closed" 
              stackId="a" 
              fill={closedColor} 
              radius={isSmallDevice ? [4, 4, 0, 0] : [0, 4, 4, 0]}
            >
              <LabelList 
                dataKey="closed" 
                position="center" 
                fill="#1f2937" 
                fontSize={isSmallDevice ? 10 : 12} 
                fontWeight="bold"
                formatter={(value) => value > 0 ? value : ''}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HorizontalBarChart;