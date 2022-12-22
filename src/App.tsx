import axios from "axios";
import React from "react";
import "./App.css";

const App = () => {
  React.useEffect(() => {
    const callApi = async () => {
      //return await axios.get("https://ta-lending-api.herokuapp.com/holidays");
      return axios
        .post(
          "https://ta-lending-api.herokuapp.com/products",
          {
            name: "egg plant",
            price: 2.0,
          },
          { timeout: 3000 }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    callApi().then();
  }, []);

  return (
    <div className="App">
      <h2>Lending app...</h2>
    </div>
  );
};

export default App;
