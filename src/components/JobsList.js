import React, { useState, useEffect } from 'react';
import axios from 'axios';

//TODO: Important info: my Heroku site: https://cryptic-mesa-04188.herokuapp.com/ |
const JobsList = props => {

    const proxy = 'https://cryptic-mesa-04188.herokuapp.com/';

    useEffect(() => {
        axios.get('https://cryptic-mesa-04188.herokuapp.com/localhost:3000/api/v1/jobs.json') //need to get this from localhost:3000
            .then(response => setJobs(response.data))
    }, []);

    const [jobs, setJobs] = useState([]);

    return (
        <div>
            <div className="jobs-list">
                {jobs.map((job, index) => (
                    <div key={index}>
                        {job.company} | {job.position} | {job.description}
                    </div>
                ))}
            </div>
        </div>
    )
};
export default JobsList;