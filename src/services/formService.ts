import http from "../http-common";
import{ InfoTexts } from "../types/app";

const create = (data: InfoTexts) => {
  return http.post<InfoTexts>("/infoTexts/", data);
};

const getAll = () => {
  return http.get<Array<InfoTexts>>("/infoTexts/")
};

const remove = (id:number) => {
  return http.delete<number>(`/infoTexts/${id}`)
};

const formService = {
  create,
  getAll,
  remove
}

export default formService