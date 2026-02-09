import { useState } from "react";
import InputField from "./InputField";
import PriorityBadge from "./PriorityBadge";
import { submitSupportRequest } from "../services/supportApi";

export default function SupportForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [priority, setPriority] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await submitSupportRequest(formData);
      setPriority(res.data.priority);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <InputField
        label="Name"
        name="name"
        placeholder="Vaibhav Pandey"
        value={formData.name}
        onChange={handleChange}
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="example@email.com"
        value={formData.email}
        onChange={handleChange}
      />

      <InputField
        label="Message"
        name="message"
        as="textarea"
        placeholder="Tell us what you need help with..."
        value={formData.message}
        onChange={handleChange}
      />

      <button className="primary-button" type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>

      <PriorityBadge priority={priority} />
    </form>
  );
}
