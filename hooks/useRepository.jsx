import { configDotenv } from "dotenv";
configDotenv({ path: "../../.env" });
import React, { useState, useEffect } from "react";

// Fetching Data
const fetchDataGithub = async () => {
  const data = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env["NEXT_PUBLIC_GITHUB_ACCESS_TOKEN"]}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            {
              user(login: "thai-cong-nguyen") {
                  repositories(first: 20, orderBy: {field: CREATED_AT, direction: DESC}, isFork: false, privacy: PUBLIC) {
                    nodes {
                      ... on Repository {
                        name
                        description
                        url
                        createdAt
                        updatedAt
                        primaryLanguage {
                          name
                          color
                        }
                      }
                    }
                }
              }
            }
          `,
    }),
  });
  const result = await data.json();
  const repositories = result.data.user.repositories.nodes;
  return repositories ? repositories : [];
};

const useRepositories = () => {
  const [data, setData] = useState(null);

  const fetchDataAndUpdate = async () => {
    const newData = await fetchDataGithub();
    setData(newData);
  };

  useEffect(() => {
    fetchDataAndUpdate();

    const intervalId = setInterval(fetchDataAndUpdate, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return data;
};

export default useRepositories;
