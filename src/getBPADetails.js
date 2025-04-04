import { useState, useEffect } from "react";
const getBPADetails = (url, id) => {
  fetch(url + "/" + id)
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

export default getBPADetails;
