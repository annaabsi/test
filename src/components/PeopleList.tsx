import React, { useState, useEffect, ChangeEvent } from "react";
import PeopleDataService from "../services/PeopleService";
import PeopleData from "../types/People";

const PeopleList: React.FC = () => {

  const [people, setPeople] = useState<Array<PeopleData>>([]);
  const [searchPeople, setSearchPeople] = useState<string>("");
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    findPeople();
  }, []);

  const onChangeSearchPeople = (e: ChangeEvent<HTMLInputElement>) => {
    const searchPeople = e.target.value;
    setSearchPeople(searchPeople);
  };

  const findPeople = () => {
    PeopleDataService.findPeopleApi(searchPeople)
    .then((response) => {
      setPeople(response.data.results);
      setNextPage(response.data.pagination.next);
      console.log(response.data.pagination.next);
    })
  }

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Search by name"
        value={searchPeople}
        onChange={onChangeSearchPeople}
        onKeyPress={ event => {
          if (event.key === 'Enter') {
            findPeople();
          }
        }}
      />
      <ul className="list-group">
        {people &&
          people.map((person, index) => (
            <li onClick={() => console.log(person.name)} key={index}>
              {person.name}
            </li>
          ))}
      </ul>
      
    </>
  );
};

export default PeopleList;
