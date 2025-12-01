exports.handler = async (event, context) => {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    const timeMin = new Date().toISOString();
    const maxResults = 20;

    const url =
      "https://www.googleapis.com/calendar/v3/calendars/" +
      encodeURIComponent(calendarId) +
      "/events?singleEvents=true&orderBy=startTime&timeMin=" +
      timeMin +
      "&maxResults=" +
      maxResults +
      "&key=" +
      apiKey;

    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
