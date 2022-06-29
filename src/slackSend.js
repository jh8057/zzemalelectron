async function sendSlackMessage(msg, url = "myURL") {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({ text: msg }),
      headers: headers,
    });
  } catch (err) {
    console.warn(err);
  }
}
