import { useState, useEffect } from "react";
const getMyBPAs = (url) => {
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Response (res) is not OK!");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default getMyBPAs;
