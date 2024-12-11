export interface Guardian {
  id: string;
  profile_picture: string;
  name: string;
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
  dob: string;
  mobile_number: string;
  email: string;
  address: string;
  gender: string;
  hobbies: string[];
}

export interface ClassData {
  label: string;
  value: string;
}