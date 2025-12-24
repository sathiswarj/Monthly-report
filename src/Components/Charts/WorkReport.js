import HorizontalBarChart from "./HorizontalChart"; 

const workOrderData = [
  { name: 'Neonatal intensive care unit', open: 20, closed: 7 },
  { name: 'Radiology', open: 6, closed: 8 },
  { name: 'Nursing Department', open: 10, closed: 9 },
  { name: 'Trauma and Emergency care', open: 6, closed: 4 },
  { name: 'Oncology', open: 2, closed: 3 },
];

const WorkReport = () => {
  return (
    <div>
         <HorizontalBarChart 
        title="Work Order Reported - 12"
        data={workOrderData}
        openColor="#1E3A8A"
        closedColor="#A5B4FC"
        xAxisLabel="Total No.of Work Orders"
      />
    </div>
  );
};

export default WorkReport;