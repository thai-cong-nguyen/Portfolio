import React, { useState, useEffect } from "react";
import fetchData from "../api/github";

const useRepositories = () => {
  const [data, setData] = useState(null);

  const fetchDataAndUpdate = async () => {
    const query = {
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
    };
    const newData = (await fetchData(query)).data.user.repositories.nodes;
    newData ? setData(newData) : setData([]);
  };

  useEffect(() => {
    fetchDataAndUpdate();

    const intervalId = setInterval(fetchDataAndUpdate, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return data;
};

export default useRepositories;
