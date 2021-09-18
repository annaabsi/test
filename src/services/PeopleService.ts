import api from "../api";

const findPeople = () => {
  return api.get('/');
  //return api.get(`?limit=10&q=${name}`);
};

const PeopleService = {
  findPeople
};

export default PeopleService;