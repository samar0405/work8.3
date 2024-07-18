// import http from "./config";
// import { AxiosResponse } from "axios";

// interface ServiceData {
//   id?: number;
//   name: string;
//   price: number;
//   // Add other properties as needed
// }

// interface ServiceResponse {
//   data: ServiceData[];
//   total: number;
//   page: number;
//   limit: number;
//   // Add other properties as needed
// }

// const service = {
//   create: (data: ServiceData): Promise<AxiosResponse<ServiceData>> =>
//     http.post("/service", data),
//   get: (page = 2, limit = 10): Promise<AxiosResponse<ServiceResponse>> =>
//     http.get("/service/all", { params: { page, limit } }),
//   delete: (id: number): Promise<AxiosResponse<void>> =>
//     http.delete("/service", { params: { id } }),
//   update: (item: ServiceData): Promise<AxiosResponse<ServiceData>> =>
//     http.put("/service", item),
// };

// export default service;
