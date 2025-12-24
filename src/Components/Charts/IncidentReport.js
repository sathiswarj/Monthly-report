import HorizontalBarChart from "./HorizontalChart";

const incidentData = [
  { name: 'Neonatal intensive care unit', open: 20, closed: 7 },
  { name: 'Radiology', open: 6, closed: 8 },
  { name: 'Nursing Department', open: 10, closed: 9 },
  { name: 'Trauma and Emergency care', open: 6, closed: 4 },
  { name: 'Oncology', open: 2, closed: 3 },
];

const IncidentReport = () => {
  return (
    <div className="max-w-8xl mx-auto">
     <HorizontalBarChart 
        title="Incident Reported - 12"
        data={incidentData}
        openColor="#56ABF8"
        closedColor="#B8D9F8"
        xAxisLabel="Total No.of Incidents"
      />
    </div>
  );
};

export default IncidentReport;