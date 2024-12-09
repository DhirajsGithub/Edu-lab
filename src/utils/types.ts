export interface Guardian {
  id: string;
  profile_picture: string;
  full_name: string;
  email: string;
  mobile_number: string;
}

export interface Student {
  id: string,
  name: string;
  profile_picture: string;
  registration_number: string;
  guardians: {
    father: Guardian;
    mother: Guardian;
    [key: string]: Guardian;
  };
  class: string;
  age: number;
  mobile_number: string;
  email: string;
  address: string;
  gender: string;
  hobbies: string[];
}
