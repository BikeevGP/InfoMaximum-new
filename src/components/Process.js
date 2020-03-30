import React from "react";
import ProcessItem from "./ProcessItem";
import { useQuery } from "@apollo/react-hooks";

import GetProcessList from "../quieres/getProcess";

const ProcessPage = props => {
  const { data, loading } = useQuery(GetProcessList, {
    onCompleted() {
      console.log(data);
    }
  });
  return (
    <div>
      {!loading &&
        data?.processList.map(item => {
          return (
            <ProcessItem
              id={item.id}
              name={item.name}
              countReplay={item.numberOfExecutions}
              scenarios={item.numberOfScenarios}
              staff={item.employeesInvolvedProcess}
              start={item.start}
              end={item.end}
              loading = {item.loading}
              averageExecutionTime = {item.averageLeadTime}
              averageActiveTime = {item.averageActiveTime}
            />
          );
        })}
    </div>
  );
};

export default ProcessPage;
