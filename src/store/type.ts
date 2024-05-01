export interface IUserInfoStore {
  location: ILocationStore;
}

export interface ILocationStore {
  lat: number;
  long: number;
}
