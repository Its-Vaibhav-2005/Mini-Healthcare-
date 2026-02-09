export default function InputField({ label, as, ...props }) {
  const Component = as === "textarea" ? "textarea" : "input";

  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <Component
        className={as === "textarea" ? "text-area" : "text-input"}
        {...props}
      />
    </div>
  );
}
