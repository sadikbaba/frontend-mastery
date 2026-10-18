function setFormDataHelper(e, formData, key, setFormData) {
  setFormData({
    ...formData,
    [key]: e.target.value,
  });
}

function PersonalDetails({ formData, setFormData, onNext }) {
  function handleSubmit(e) {
    e.preventDefault();
    onNext();
  }
  return (
    <section>
      <h2>Personal Details</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormDataHelper(e, formData, "name", setFormData)}
          placeholder="Name"
          className="form-input"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormDataHelper(e, formData, "email", setFormData)}
          placeholder="Email"
          className="form-input"
        />

        <button type="submit" className="continue-button">
          Continue
        </button>
      </form>
    </section>
  );
}

export default PersonalDetails;
