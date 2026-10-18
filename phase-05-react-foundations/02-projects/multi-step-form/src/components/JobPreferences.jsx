function setFormDataHelper(e, formData, key, setFormData) {
  setFormData({
    ...formData,
    [key]: e.target.value,
  });
}

function JobPreferences({ formData, setFormData, onNext, onBack }) {
  function handleSubmit(e) {
    e.preventDefault();
    onNext();
  }

  return (
    <>
      <section>
        <h2>Job Preferences</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="preferredRole">Preferred Role</label>
          <input
            id="preferredRole"
            type="text"
            value={formData.preferredRole}
            onChange={(e) =>
              setFormDataHelper(e, formData, "preferredRole", setFormData)
            }
            placeholder="Preferred Role"
            className="form-input"
            required
          />
          <label htmlFor="workPreference">Work Preference</label>
          <select
            id="workPreference"
            value={formData.workPreference}
            onChange={(e) =>
              setFormDataHelper(e, formData, "workPreference", setFormData)
            }
            className="form-options"
            required
          >
            <option value="">Choose work preference</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="On-site">On-site</option>
          </select>

          <div className="button-container">
            <button type="button" onClick={onBack} className="back-button">
              Back
            </button>
            <button type="submit" className="continue-button">
                Review Profile
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default JobPreferences;
