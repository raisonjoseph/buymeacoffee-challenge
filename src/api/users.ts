import { AxiosResponse } from "axios";
import { User } from "../pages/UserManagement/models";
import httpService from "./httpService";

export function getUsers(filter: {
  page: number;
}): Promise<AxiosResponse<User[]>> {
  return httpService.get("/users", {
    params: filter,
  });
}

export function createUser(
  userDetails: Omit<User, "id">
): Promise<AxiosResponse<User>> {
  return httpService.post("/users", userDetails);
}

export function deleteUser(userId: number): Promise<AxiosResponse> {
  return httpService.delete(`/users/${userId}`);
}
