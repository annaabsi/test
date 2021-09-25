import React, { useState, ChangeEvent } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../Card"
import PeopleDataService from "../../services/PeopleService";
import PeopleData from "../../types/People";
import "./index.scss";

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
        return response.data.results;
      });
      setTotalSize(() => {
        return response.data.total;
      });
      setNextPage(() => {
        return response.data.pagination.next;
      });
    });
  };

  const fetchMoreData = () => {
    if (people.length >= totalSize) {
      setHasMore(() => {
        return false;
      });
    }

    PeopleDataService.findPeopleApi(searchName, nextPage).then((response) => {
      setPeople(people.concat(response.data.results));
      setNextPage(response.data.pagination.next);
    });
  };

  return (
    <>
      <div className="container">
        <div className="headline">
          <h1>Discover Torre Genomes</h1>
          <p>To build the world’s network that automates recruiting we have to provide massive value to candidates.</p>
          <p>This is, and will always be, our focus, our drive, our passion.</p>
        </div>
        <div className="bar">
          <input
            className="searchbar"
            type="text"
            placeholder="Search people by name"
            title="Search"
            value={searchName}
            onChange={onChangeSearchPeople}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                findPeople();
              }
            }}
          />
          <i className="fas fa-search"></i>
        </div>
        {people.length !== 0 &&
          <div>
            There are <strong>{totalSize}</strong> profiles matching
          </div>
        }

        <InfiniteScroll
          dataLength={people.length}
          next={fetchMoreData}
          hasMore={hasMore}
          className="flex-grid"
          loader={
            people.length !== 0 ? <h4 className="search">Loading...</h4> : ""
          }
        >
          {people &&
            people.map((person, index) => (
              <Card {...person} key={index}/>
            ))}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default PeopleList;
