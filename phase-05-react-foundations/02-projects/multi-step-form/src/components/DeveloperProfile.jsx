function setFormDataHelper(e, formData, key, setFormData) {
  setFormData({
    ...formData,
    [key]: e.target.value,
  });
}

function DeveloperProfile({ formData, setFormData, onNext, onBack }) {
  function handleSubmit(e) {
    e.preventDefault();
    onNext();
  }

  return (
    <section>
      <h2>Developer Profile</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="experience">Experience</label>
        <input
          id="experience"
          type="text"
          value={formData.experience}
          onChange={(e) =>
            setFormDataHelper(e, formData, "experience", setFormData)
          }
          placeholder="Experience"
          className="form-input"
          required
        />

        <label htmlFor="stack">Stack</label>
        <input
          id="stack"
          type="text"
          value={formData.stack}
          onChange={(e) => setFormDataHelper(e, formData, "stack", setFormData)}
          placeholder="Stack"
          className="form-input"
          required
        />

        <div className="button-container">
          <button type="button" onClick={onBack} className="back-button">
            Back
          </button>
          <button type="submit" className="continue-button">
            Continue
          </button>
        </div>
      </form>
    </section>
  );
}

export default DeveloperProfile;
