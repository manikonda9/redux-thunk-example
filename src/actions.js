export const REQUEST_DATA = "REQUEST_DATA";
export const SUCCESS_DATA = "SUCCESS_DATA";
export const ERROR_DATA = "ERROR_DATA";

export const requestData = () => {
  return {
    type: REQUEST_DATA
  };
};

export const successData = data => {
  return {
    type: SUCCESS_DATA,
    payload: data
  };
};

export const errorData = error => {
  console.log("error");
  return {
    type: ERROR_DATA,
    error: error
  };
};

export const getData = () => dispatch => {
  const configData = {
    method: "GET",
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // no-referrer, *client
    // body: JSON.stringify(data) // body data type must match "Content-Type" header
  };
  dispatch(requestData());
  return fetch("https://jsonplaceholder.typicode.com/todos", configData)
    .then(res => res.json())
    .then(data => {
      return dispatch(successData(data));
    })
    .catch(error => {
      return dispatch(errorData(error));
    });
};
