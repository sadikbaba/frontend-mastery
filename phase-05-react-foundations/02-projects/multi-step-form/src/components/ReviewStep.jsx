function ReviewItem({ label, value }) {
  return (
    <p className="review-item">
      <span className="review-label">{label}: </span>
      <span className="review-value">{value}</span>
    </p>
  );
}

function ReviewStep({ formData, onNext, onBack }) {
  function handleSubmit(e) {
    e.preventDefault();
    onNext();
  }

  return (
    <section>
      <h2>Review</h2>
    

      <form onSubmit={handleSubmit}>
        <div className="review-container">
          <ReviewItem label="Name" value={formData.name} />
          <ReviewItem label="Email" value={formData.email} />
          <ReviewItem label="Experience" value={formData.experience} />
          <ReviewItem label="Stack" value={formData.stack} />
          <ReviewItem label="Preferred Role" value={formData.preferredRole} />
          <ReviewItem label="Work Preference" value={formData.workPreference} />
        </div>

        <div className="button-container">
          <button type="button" onClick={onBack} className="back-button">
            Back
          </button>
          <button type="submit" className="continue-button">
            Complete Onboarding
          </button>
        </div>
      </form>
    </section>
  );
}

export default ReviewStep;
