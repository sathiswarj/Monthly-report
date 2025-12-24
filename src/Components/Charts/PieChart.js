import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const pieData = [
  { name: 'Working Assets', value: 400, fill: '#1E3A8A' },
  { name: 'Not working Assets', value: 300, fill: '#C26785' },
  { name: 'Discarded', value: 300, fill: '#56ABF8' },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200 text-xs sm:text-sm'>
        <p className='font-semibold text-gray-800'>{payload[0].name}</p>
        <p className='text-gray-600'>Value: {payload[0].value}</p>
        <p className='text-gray-500 text-xs'>
          {((payload[0].value / pieData.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(1)}%
        </p>
      </div>
    );
  }
  return null;
};

export default function PieChartInGrid() {
  return (
    <div className='w-full'>
      <div className='w-full h-64 sm:h-72 lg:h-72 bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-6 flex items-center'>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="60%"
              innerRadius="40%"
              paddingAngle={2}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip 
              content={<CustomTooltip />}
              position={{ x: 'auto', y: 'auto' }}
              allowEscapeViewBox={{ x: false, y: false }}
            />
            <Legend 
              verticalAlign="middle" 
              align="right"
              layout="vertical"
              iconType="circle"
              wrapperStyle={{ 
                paddingLeft: '10px',
                fontSize: '16px'
              }}
              iconSize={8}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}