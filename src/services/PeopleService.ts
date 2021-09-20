import api from "../api";

const findPeopleApi = (name: string, next: string = "") => {

  // Parsing endpoint: Base
  let endpointUrl = `people/_search/?size=20&`;

  // Parsing endpoint: Pagination
  if (next) {
    endpointUrl += `after=${next}`;
  }

  return api.post(endpointUrl, { name: { term: `${name}` } });
};

const PeopleService = {
  findPeopleApi,
};

export default PeopleService;
