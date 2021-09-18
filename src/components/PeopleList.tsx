import React from "react";
import PeopleDataService from "../services/PeopleService";

const PeopleList: React.FC = () => {

  PeopleDataService.findPeople()
    .then(response => {
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });

  return (<h1>Hello World</h1>)
};

export default PeopleList;