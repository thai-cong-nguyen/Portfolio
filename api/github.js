import { configDotenv } from "dotenv";
configDotenv({ path: "../.env" });

const fetchData = async (body) => {
  try {
    const data = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env["NEXT_PUBLIC_GITHUB_ACCESS_TOKEN"]}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await data.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchData;
