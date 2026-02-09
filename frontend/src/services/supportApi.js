export async function submitSupportRequest(payload) {
  const response = await fetch("https://mini-healthcare.onrender.com/api/support", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error || "Request failed");
  }

  return response.json();
}

