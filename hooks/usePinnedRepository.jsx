import React, { useState, useEffect } from "react";
import fetchData from "../api/github";

const usePinnedRepositories = () => {
  const [data, setData] = useState(null);

  const fetchDataAndUpdate = async () => {
    const query = {
      query: `
        {
          user(login: "thai-cong-nguyen") {
            pinnedItems(first: 6, types: REPOSITORY) {
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
    const newData = (await fetchData(query)).data.user.pinnedItems.nodes;
    newData ? setData(newData) : setData([]);
  };

  useEffect(() => {
    fetchDataAndUpdate();

    const intervalId = setInterval(fetchDataAndUpdate, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return data;
};

export default usePinnedRepositories;
