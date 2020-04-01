////// Этот документ служит для получения процессов пользователя с сервера
import { gql } from "apollo-boost";

export default gql`
  query getProcessList {
    processList {
      id
      name
      numberOfExecutions
      averageLeadTime
      averageActiveTime
      employeesInvolvedProcess
      numberOfScenarios
      start
      end
      loading
    }
  }
`;
