import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const barData = [
    { name: 'Incidents', open: 35, closed: 20 },
    { name: 'Work Order', open: 5 },
    { name: 'Check outs', open: 10, closed: 7 },
];

const MixBarChart = () => {
  return (
   <div className='w-full'>
      <div className='w-full h-56 sm:h-64 lg:h-72 bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-6'> 
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barData}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 5,
            }}
            barSize={20}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 11 }}
              interval={0}
              angle={-15}
              textAnchor="end"
              height={50}
            />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip 
              contentStyle={{ fontSize: '12px' }}
              cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
            />
            <Legend 
              verticalAlign="top" 
              align="right"
              layout="horizontal"
              iconType="circle"
              wrapperStyle={{ 
                paddingBottom: '10px',
                fontSize: '11px'
              }}
              iconSize={8}
            />
            <Bar dataKey="open" stackId="a" fill="#56ABF8" />
            <Bar dataKey="closed" stackId="a" fill="#1E3A8A" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MixBarChart;