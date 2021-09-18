import React, { useState, useEffect } from "react";
import PeopleDataService from "../services/PeopleService";
import PeopleData from "../types/People";

const PeopleList: React.FC = () => {
  
  const [people, setPeople] = useState<Array<PeopleData>>([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    PeopleDataService.findPeople("Anna")
      .then((response) => {
        setPeople(response.data.results);
        setNextPage(response.data.pagination.next);
        console.log(response.data.pagination.next);
      })
  }, []);

  return (
    <ul className="list-group">
      {people &&
        people.map((person, index) => (
          <li onClick={() => console.log(person.name)} key={index}>
            {person.name}
          </li>
        ))}
    </ul>
  );
};

export default PeopleList;
