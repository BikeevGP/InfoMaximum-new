import {gql} from "apollo-boost";

export default gql`
query loadData{
    currentUser{
      id,
      firstName,
      secondName,
      email
    }
  }
`;