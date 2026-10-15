function JobCard({ job, onDeleteJob, onUpdateJobStatus , onEditJob}) {
    return ( 
        <li>
            <h2>{job.company}</h2>
            <p>{job.role}</p>
            <p>{job.status}</p>
            <button onClick={() => onDeleteJob(job.id)}>Delete</button>
            <button onClick={() => onUpdateJobStatus(job.id, "Interviewing")}>Interview</button>
            <button onClick={() => onUpdateJobStatus(job.id, "Offer")}>Offer</button>
            <button onClick={() => onEditJob(job)}>Edit</button>
        </li>
    )
}

export default JobCard;
