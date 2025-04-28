import React from 'react'
import "./Job.css"

function Job() {
    const jobs = [
        {
            id: 1, title: "Frontend Developer", company: "Tech Corp",
            location: "Remote"
        },
        {
            id: 2, title: "Data Scientist", company: "Data Inc", location:
                "New York, NY"
        },
        {
            id: 3, title: "UX Designer", company: "Design Co", location:
                "San Francisco, CA"
        }
    ];
    return (
        <div className='jobContainer'>
            {
                jobs.map((element)=>{
                    return(
                        <div className="job-card">
                            <h3>{element.title}</h3>
                            <p>{element.company}</p>

                            <div className="job-icon">
                                <p>1-5 Yrs</p>
                                <p>3.5-7 Lacs PA</p>
                                <p>{element.location}</p>
                            </div>
                            <p>We are looking for a passionate and motivated {element.title} with 1-5 years exprences {element.company} </p>
                            <button>Apply</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Job