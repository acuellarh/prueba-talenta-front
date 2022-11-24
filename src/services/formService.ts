import http from "../http-common";
import{ InfoTexts } from "../types/app";

const create = (data: InfoTexts) => {
  return http.post<InfoTexts>("/infoTexts/", data);
};





const formService = {
  create
}

export default formService