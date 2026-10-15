import JobCard from "./JobCard.jsx";

function JobList({ jobs, onDeleteJob, onUpdateJobStatus , onEditJob}) {
  return (
    <>
      <ul>
        {jobs.map((job) => {
          return (
            <JobCard
              key={job.id}
              job={job}
              onDeleteJob={onDeleteJob}
              onUpdateJobStatus={onUpdateJobStatus}
              onEditJob={onEditJob}
            />
          );
        })}
      </ul>
    </>
  );
}

export default JobList;
