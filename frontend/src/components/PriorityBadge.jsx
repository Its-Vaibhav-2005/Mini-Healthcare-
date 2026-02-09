const PRIORITY_CLASS = {
  high: "priority-high",
  medium: "priority-medium",
  low: "priority-low"
};

export default function PriorityBadge({ priority }) {
  if (!priority) return null;

  const normalized = priority.toLowerCase();
  const badgeClass = PRIORITY_CLASS[normalized] || "priority-low";

  return (
    <div className={`priority-badge ${badgeClass}`} aria-live="polite">
      <span className="priority-dot" />
      <span className="priority-label">Priority</span>
      <span className="priority-value">{normalized}</span>
    </div>
  );
}
