const { BACKEND_API } = process.env;

const GET = async () => {
  try {
    const res = await fetch(`${BACKEND_API}/api/nepseData/api/stocks/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken":
          "FVpgTjGCIBNy5JVQ4AWkfZtPpTs7OyrKgnRj66l0UINvdMeaKiIqveLE9mqPoyXE",
        cache: "no-cache",
      },
    });

    const data = await res.json();
    // console.log(data);

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
