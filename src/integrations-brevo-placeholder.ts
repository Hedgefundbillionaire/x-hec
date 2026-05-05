// Reference snippet only. Do not place this under src/pages/api unless you add
// an Astro server adapter for Vercel.
export async function subscribeToBrevo(formData: FormData) {
  const email = formData.get("email");
  const firstName = formData.get("firstName");

  return {
    email,
    attributes: { FIRSTNAME: firstName },
    listIds: ["BREVO_LIST_ID"]
  };
}
