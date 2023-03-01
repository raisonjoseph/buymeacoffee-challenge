export interface User {
  id: number;
  name: string;
  email: string;
  gender: "female" | "male";
  status: "inactive" | "active";
}

export interface Meta {
  page: number;
  maxPage: number;
  pageSize: number;
}

export interface UserState extends Meta {
  data: User[];
  isLoading: boolean;
  hasError: boolean;
}
