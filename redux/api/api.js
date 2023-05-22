export const submitUserData = async (values) => {
  const response = await fetch("http://localhost:5000/api/waitlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: values.firstname,
      surname: values.surname,
      email: values.surname,
      phoneNumber: values.phoneNumber,
      selectedOption: values.selectedOption,
      NinNumber: values.NinNumber,
    }),
  });

  if (!response.ok) {
    throw new Error("Error submitting user data");
  }
  return response.json();
};
