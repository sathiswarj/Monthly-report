import React from 'react'
import CardDetail from './CardDetail'
const IncidentReport = () => {

    const IncidentData = [
  {
    id: 1,
    title: "Incident Reported per department",
    department: "Anesthesiology",
    incidentDetails: [
      { id: 1, name: "Incidents Reported", count: 5 },
      { id: 2, name: "Incidents Open", count: 20 },
      { id: 3, name: "Total Downtime", count: "7 min 22 sec" }
    ],
    assets: [
      {
        id: 1,
        assetName: "Strecher",
        assetCode: "A001234",
        startDate: "21-08-2025",
        clearDate: "26-08-2025"
      },
      {
        id: 2,
        assetName: "Strecher",
        assetCode: "A001234",
        startDate: "21-08-2025",
        clearDate: "26-08-2025"
      },
      {
        id: 3,
        assetName: "Strecher",
        assetCode: "A001234",
        startDate: "21-08-2025",
        clearDate: "26-08-2025"
      },
      {
        id: 4,
        assetName: "CT scan",
        assetCode: "A001234",
        startDate: "18-06-2025",
        clearDate: "19-06-2025"
      }
    ]
  }
];


 const IncidentDepartment = [
  {
    id: 1,
 
    department: "Radiology",
    
    assets: [
      {
        id: 1,
        assetName: "Strecher",
        assetCode: "A001234",
        startDate: "21-08-2025",
        clearDate: "26-08-2025"
      },
      {
        id: 2,
        assetName: "Strecher",
        assetCode: "A001234",
        startDate: "21-08-2025",
        clearDate: "26-08-2025"
      },
      {
        id: 3,
        assetName: "Strecher",
        assetCode: "A001234",
        startDate: "21-08-2025",
        clearDate: "26-08-2025"
      },
      {
        id: 4,
        assetName: "CT scan",
        assetCode: "A001234",
        startDate: "18-06-2025",
        clearDate: "19-06-2025"
      }
    ]
  }
];
  return (
    <>
      <CardDetail 
       data={IncidentData}
       departmentData={IncidentDepartment}
      />
    </>
  )
}

export default IncidentReport