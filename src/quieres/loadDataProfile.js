import {gql} from "apollo-boost";

export default gql`
query loadData{
    currentUser{
      firstName,
      secondName,
      email
    }
  }
`;