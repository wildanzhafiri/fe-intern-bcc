export interface Owner {
  id: string;
  name: string;
  email: string;
  username: string;
  store_name: string;
  store_location: string;
  phone_number: string;
  profile_picture: string;
}

export interface PublicOwner {
  name: string;
  store_name: string;
  store_location: string;
  profile_picture: string;
}
