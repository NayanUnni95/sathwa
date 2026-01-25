import "./DatePanel.css";

export default function DatePanel() {
  return (
    <div className="dp-scope">
      <div className="dp-container">
        <div className="dp-spacer" />
        <div className="dp-content">
          <div className="dp-badge-wrapper group">
            <div className="dp-play-btn group">
              <div className="dp-play-icon" />
            </div>
            <div className="dp-badge-text">
              <span className="dp-month font-japan-ramen">February</span>
              <span className="dp-dates font-japan-ramen">26, 27, 28</span>
            </div>
          </div>

          <div className="dp-dots">
            <div className="dp-dot dp-dot-red" />
            <div className="dp-dot dp-dot-border" />
            <div className="dp-dot dp-dot-border" />
            <div className="dp-dot dp-dot-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
