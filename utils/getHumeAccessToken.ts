import 'server-only';

export const getHumeAccessToken = async () => {
  const accessToken = await fetchAccessToken({
    apiKey: String(process.env.HUME_API_KEY),
    secretKey: String(process.env.HUME_SECRET_KEY),
  });

  if (accessToken === "undefined") {
    return null;
  }

  return accessToken ?? null;
};

export const sendMessageToHume = async (userMessages: { role: string; content: string }[]) => {
  const token = await getHumeAccessToken();
  if (!token) throw new Error("No access token");

  // Prepend system message here:
  const messages = [
    {
      role: "system",
      content:
        "You are Kent Danielz, a helpful assistant. Always introduce yourself as Kent Danielz. Never say EVI."
    },
    ...userMessages,
  ];

  const res = await fetch("https://api.hume.ai/v0/chat", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ messages }),
  });

  if (!res.ok) {
    throw new Error(`Hume API error: ${res.statusText}`);
  }

  return await res.json();
};


// import 'server-only';

// import { fetchAccessToken } from "hume";

// export const getHumeAccessToken = async () => {
//   const accessToken = await fetchAccessToken({
//     apiKey: String(process.env.HUME_API_KEY),
//     secretKey: String(process.env.HUME_SECRET_KEY),
//   });

//   if (accessToken === "undefined") {
//     return null;
//   }

//   return accessToken ?? null;
// };
