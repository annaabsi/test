import api from "../api";

const findPeople = (name: string, next: string="")  => {
  if (next) {
    return api.post(`people/_search/?after=${next}`, {   name: { term: `${name}` },   });   
  } else {
    return api.post(`people/_search/`, { name: { term: `${name}` } });
  }
};

const PeopleService = {
  findPeople,
};

export default PeopleService;
