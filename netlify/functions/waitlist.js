exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let name, email, company;
  try {
    ({ name, email, company } = JSON.parse(event.body));
  } catch {
    return { statusCode: 400, body: "Invalid JSON" };
  }

  if (!name || !email || !company) {
    return { statusCode: 400, body: "Missing fields" };
  }

  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;
  const apiKey = process.env.AIRTABLE_API_KEY;

  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [{ fields: { Name: name, Email: email, Company: company } }],
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.error("Airtable error:", text);
    return { statusCode: 500, body: "Failed to save submission" };
  }

  return { statusCode: 200, body: "OK" };
};
