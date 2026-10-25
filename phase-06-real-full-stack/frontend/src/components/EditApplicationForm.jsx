import { LabelAndInput } from "./ApplicationForm.jsx";
import { updateApplication } from "../api/applicationsApi";
import "./css/EditApplicationForm.css";

function setFormDataHelper(setFormData, key, event, formData) {
  setFormData({
    ...formData,
    [key]: event.target.value,
  });
}

function EditApplicationForm({
  formData,
  setFormData,
  setCurrentView,
  onUpdated,
}) {
  async function handleSubmit(event) {
    event.preventDefault();

    const updatedApplication = await updateApplication(formData.id, formData);

    onUpdated(updatedApplication);
    setCurrentView("list");
  }

  return (
    <section className="edit-section">
      <h1 className="edit-title">Edit Application</h1>
      <p className="edit-description">
        Update the details for this job application.
      </p>
      <form className="edit-form" onSubmit={handleSubmit}>
        <LabelAndInput
          id="company"
          name="Company"
          value={formData.company}
          setFormData={setFormData}
          formData={formData}
          placeholder="Enter Company"
          setFormDataHelper={setFormDataHelper}
          inputClassName="edit-input"
        />

        <LabelAndInput
          id="role"
          name="Role"
          value={formData.role}
          setFormData={setFormData}
          formData={formData}
          placeholder="Enter Role"
          setFormDataHelper={setFormDataHelper}
          inputClassName="edit-input"
        />

        <LabelAndInput
          id="status"
          name="Status"
          value={formData.status}
          setFormData={setFormData}
          formData={formData}
          placeholder="Enter Status"
          setFormDataHelper={setFormDataHelper}
          inputClassName="edit-input"
        />

        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          value={formData.notes}
          onChange={(event) =>
            setFormDataHelper(setFormData, "notes", event, formData)
          }
          className="edit-textarea"
        />

        <div className="edit-buttons-container">
          <button
            type="button"
            onClick={() => setCurrentView("list")}
            className="back-button"
          >
            Back to list
          </button>
          <button type="submit" className="update-button">
            Update
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditApplicationForm;
