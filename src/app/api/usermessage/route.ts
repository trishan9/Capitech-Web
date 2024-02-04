const { BACKEND_API } = process.env;

const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const res = await fetch(`${BACKEND_API}/api/website/api/usermessages/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cache: "no-cache",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      console.log("Error Occurred: ", res);
      return new Response(JSON.stringify({ success: false, data: data }));
    } else {
      return new Response(JSON.stringify({ success: true, data: data }));
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error }));
  }
};

export { POST };
