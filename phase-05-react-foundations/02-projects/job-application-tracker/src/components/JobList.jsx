import JobCard from "./JobCard.jsx";

function JobList({ jobs, onDeleteJob, onUpdateJobStatus }) {
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
            />
          );
        })}
      </ul>
    </>
  );
}

export default JobList;
