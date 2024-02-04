const { BACKEND_API } = process.env;

const GET = async () => {
  const res = await fetch(`${BACKEND_API}/api/nepseData/api/currentIssues/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      cache: "no-cache",
    },
  });

  const data = await res.json();
  // console.log(data);

  if (!res.ok) {
    console.log("Error Occured: ", res);
    return new Response(JSON.stringify({ success: false, data: data }));
  } else if (res.ok) {
    return new Response(JSON.stringify({ success: true, data: data }));
  }
};

export { GET };
