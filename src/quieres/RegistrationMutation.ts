////// Этот документ служит для регистрации пользователей
import { gql } from "apollo-boost";

export default gql`
  mutation registration(
    $name: String!
    $sname: String!
    $email: String!
    $password: String!
  ) {
    signup(
      firstName: $name
      secondName: $sname
      email: $email
      password: $password
    )
  }
`;
