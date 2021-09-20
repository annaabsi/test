import React, { useState, useEffect, ChangeEvent } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PeopleDataService from "../../services/PeopleService";
import PeopleData from "../../types/People";
import "./index.scss";

const PeopleList: React.FC = (props) => {
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
      <div className="container">
        <h1 className="headline">Discover Torre genomes</h1>
        <p>About Torre</p>
        <div className="bar">
          <input
            className="searchbar"
            type="text"
            placeholder="Search by name"
            title="Search"
            value={searchName}
            onChange={onChangeSearchPeople}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                findPeople();
              }
            }}
          />
        </div>
        <div>
          There are <strong>{totalSize}</strong> profiles matching{" "}
          <strong>{searchName}</strong>{" "}
        </div>
        <InfiniteScroll
          dataLength={people.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            people.length !== 0 ? <h4 className="search">Loading...</h4> : ""
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>End of results</b>
            </p>
          }
        >
          {people &&
            people.map((person, index) => (
              <div className="col">
                <div className="card" key={index}>
                  <h2>{person.name}</h2>

                  <p>{person.locationName}</p>
                  <div
                    className="pic"
                    style={{ backgroundImage: "url(" + person.picture + ")" }}
                  ></div>
                  <div className="headline">
                    <span>{person.professionalHeadline}</span>
                  </div>
                  <a
                    href={`https://torre.co/${person.username}`}
                    target="_blank"
                  >
                    <button></button>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default PeopleList;
