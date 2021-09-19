import React, { useState, useEffect, ChangeEvent } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PeopleDataService from "../../services/PeopleService";
import PeopleData from "../../types/People";

const PeopleList: React.FC = () => {
  const [people, setPeople] = useState<Array<PeopleData>>([]);
  const [searchName, setSearchName] = useState<string>("");
  const [nextPage, setNextPage] = useState<string>("");
  const [totalSize, setTotalSize] = useState<number>(0);
  const [hasMore, setHasMore] = useState(true);

  const onChangeSearchPeople = (e: ChangeEvent<HTMLInputElement>) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const findPeople = () => {
    PeopleDataService.findPeopleApi(searchName, nextPage).then((response) => {
      setPeople(() => {
        console.log(response.data.results);
        return response.data.results;
      });
      setTotalSize(() => {
        console.log(response.data.total);
        return response.data.total;
      });
      setNextPage(() => {
        console.log(response.data.pagination.next);
        return response.data.pagination.next;
      });
    });
  };

  const fetchMoreData = () => {
    if (people.length + 20 >= totalSize) {
      setHasMore(() => {
        return false;
      });
    }

    PeopleDataService.findPeopleApi(searchName, nextPage).then((response) => {
      setPeople(people.concat(response.data.results));
      setNextPage(response.data.pagination.next);
    });

    console.log(people.length + 20);
    console.log(totalSize);
  };

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Search by name"
        value={searchName}
        onChange={onChangeSearchPeople}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            findPeople();
          }
        }}
      />
      <ul className="list-group"></ul>
      <InfiniteScroll
        dataLength={people.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          people.length !== 0 ? <h4>Loading...</h4> : <h4>Search by name</h4>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>End of results</b>
          </p>
        }
      >
        {people &&
          people.map((person, index) => (
            <li onClick={() => console.log(person.name)} key={index}>
              #{index} - {person.name}
            </li>
          ))}
      </InfiniteScroll>
    </>
  );
};

export default PeopleList;
