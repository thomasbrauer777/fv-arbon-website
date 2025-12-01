// netlify/functions/google-calendar.js

exports.handler = async () => {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "GOOGLE_API_KEY not set" }),
      };
    }

    const calendars = [
      { id: process.env.CAL_MAIN,        name: "haupt" },
      { id: process.env.CAL_FISCHERHAUS, name: "fischerhaus" },
      { id: process.env.CAL_JUNGFISCHER, name: "jungfischer" },
    ].filter(c => !!c.id); // nur Kalender, die wirklich gesetzt sind

    if (calendars.length === 0) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "No calendar IDs configured" }),
      };
    }

    const timeMin = new Date().toISOString();
    const maxResults = 20;

    const fetchCalendar = async (cal) => {
      const baseUrl = "https://www.googleapis.com/calendar/v3/calendars/";
      const url =
        baseUrl +
        encodeURIComponent(cal.id) +
        "/events?singleEvents=true&orderBy=startTime" +
        "&timeMin=" + encodeURIComponent(timeMin) +
        "&maxResults=" + maxResults +
        "&key=" + encodeURIComponent(apiKey);

      const response = await fetch(url);
      if (!response.ok) {
        const text = await response.text();
        throw new Error(
          `Google Calendar error for ${cal.name}: ${response.status} ${text}`
        );
      }
      const data = await response.json();
      return {
        name: cal.name,
        events: (data.items || []).map(ev => ({
          id: ev.id,
          source: cal.name,
          summary: ev.summary || "",
          description: ev.description || "",
          location: ev.location || "",
          start: ev.start,
          end: ev.end,
          htmlLink: ev.htmlLink,
        })),
      };
    };

    const results = await Promise.all(calendars.map(fetchCalendar));

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(results),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
