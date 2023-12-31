async function callAPI(email, password ) {
  try {
    const response = await fetch("http://127.0.0.1:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.status === 200) {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export default callAPI;