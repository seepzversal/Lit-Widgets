export interface IPerson {
  name: string;
  email: string;
  title: string;
  color: string;
  age: string;
}
export const people: IPerson[] = [
  {
    name: "Person 1",
    age: "10",
    email: "1@test.com",
    title: "Official title",
    color: "red",
  },
  {
    name: "Person 2",
    age: "20",
    email: "2@test.com",
    title: "Official title",
    color: "blue",
  },
  {
    name: "Person 3",
    age: "30",
    email: "3@test.com",
    title: "Official title",
    color: "green",
  },
  {
    name: "Person 4",
    age: "40",
    email: "4@test.com",
    title: "Official title",
    color: "yellow",
  },
];
