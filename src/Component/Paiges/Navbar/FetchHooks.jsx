import React, { useState } from "react";

export const FetchHooks = (url, post, da) => {
  const postData = async () => {
    try {
      const response = await fetch(url, {
        method: post,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(da),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
        alert("Network response was not ok");
      }
      alert("Data posted successfully");
    } catch (error) {
      alert("Error posting data:" + error.message);
    }
  };

  postData();
};
