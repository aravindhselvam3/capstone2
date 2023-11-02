import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../UserContext';

function Tasks() {
  const [entries, setEntries] = useState([]);
  const { user } = useUser();
  const fetchEntriesFromServer = async () => {
    try {
      const response = await axios.get('https://capstonebackend-6l2d.onrender.com/api/getEntries'); 
      const data = response.data;
      setEntries(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  useEffect(() => {
    
    fetchEntriesFromServer();
  }, []);
  
  return (
    <div>
      <h1>Tasks Submissions</h1>
      <div className="sc-dmqHEX dPUVXQ" bis_skin_checked="1">
              <div className="sc-jTrPJq gFWlwy" bis_skin_checked="1"></div>
            </div>
      {entries.map((entry, index) => (
        <div key={index} className="Body_body__content__1jKgz" bis_skin_checked="1">
          <div style={{ padding: '0px 20px' }} bis_skin_checked="1">
            
            <div className="baseContainer" bis_skin_checked="1">
              <div className="flexCont" bis_skin_checked="1">
                <div bis_skin_checked="1">
                  <div className="title weight-500" bis_skin_checked="1">{user}</div>
                  <div className="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor" bis_skin_checked="1">
                    <div className="mx-1" bis_skin_checked="1">{entry.course}</div>
                    <div className="mx-1" bis_skin_checked="1"></div>
                    <div className="" bis_skin_checked="1">{entry.topic}</div>
                  </div>
                </div>
                <div bis_skin_checked="1">
                  <div className="mx-1 secondaryGreyTextColor" bis_skin_checked="1">submitted on {entry.submissionDate}</div>
                  <div className="ml-3 mr-1 d-flex align-self-end justify-content-end" bis_skin_checked="1">
                    <div className="secondaryGreyTextColor mx-1 px-1 rounded" bis_skin_checked="1">{entry.gradeStatus}</div>
                    <div className="tasktag px-2 rounded" bis_skin_checked="1">{entry.taskType}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Tasks