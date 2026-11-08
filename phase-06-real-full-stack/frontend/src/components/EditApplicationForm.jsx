import { useState } from "react";
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
  onUpdated,
  onCancel,
}) {
  const [draft, setDraft] = useState(formData);

  async function handleSubmit(event) {
    event.preventDefault();

    const updatedApplication = await updateApplication(draft.id, draft);

    onUpdated(updatedApplication);
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
          value={draft.company}
          setFormData={setDraft}
          formData={draft}
          placeholder="Enter Company"
          setFormDataHelper={setFormDataHelper}
          inputClassName="edit-input"
        />

        <LabelAndInput
          id="role"
          name="Role"
          value={draft.role}
          setFormData={setDraft}
          formData={draft}
          placeholder="Enter Role"
          setFormDataHelper={setFormDataHelper}
          inputClassName="edit-input"
        />

        <LabelAndInput
          id="status"
          name="Status"
          value={draft.status}
          setFormData={setDraft}
          formData={draft}
          placeholder="Enter Status"
          setFormDataHelper={setFormDataHelper}
          inputClassName="edit-input"
        />

        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          value={draft.notes}
          onChange={(event) =>
            setFormDataHelper(setDraft, "notes", event, draft)
          }
          className="edit-textarea"
        />

        <div className="edit-buttons-container">
          <button
            type="button"
            onClick={onCancel}
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
