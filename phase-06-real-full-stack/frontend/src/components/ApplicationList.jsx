function ApplicationList({ applications }) {
  return (
    <>
      <ul>
        {applications.map((application) => (
          <li key={application.id}>
            <h1>{application.company}</h1>
            <p>{application.role}</p>
            <p>{application.status}</p>
            <p>{application.notes}</p>
            <p>{application.created_at}</p>
            <p>{application.updated_at}</p>
            <button type="button">Edit</button>
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ApplicationList;
