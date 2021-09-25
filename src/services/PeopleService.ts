import api from "../api";

const findPeopleApi = (name: string, next: string = "", size: number = 20) => {

  // Parsing endpoint: Base
  let endpointUrl = `people/_search/?size=${size}&`;

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
