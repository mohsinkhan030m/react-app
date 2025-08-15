const AddStudent = ({ onAdded }) => {
  // ...existing code
  if (res.ok) {
    setMessage(`✅ Student added successfully! (ID: ${data.id})`);
    setName("");
    setProfile("");
    if (onAdded) onAdded(); // trigger parent to reload students
  }
  // ...rest
};
