const { BACKEND_API } = process.env;

const GET = async () => {
  try {
    const res = await fetch(`${BACKEND_API}/api/nepseData/api/announcements/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cache : "no-cache"
      },
    });

    const data = await res.json();

    if (!res.ok) {
      console.log("Error Occured: ", res);
      return new Response(JSON.stringify({ success: false, data: data }));
    } else {
      return new Response(JSON.stringify({ success: true, data: data }));
    }
  } catch (error) {
    return new Response(JSON.stringify({ succes: false, message: error }));
  }
};

export { GET };
