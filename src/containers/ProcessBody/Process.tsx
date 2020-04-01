// Контейней ProcessBody, используется в документе Authorized.tsx
// Используется в проекте для визуализации всех процессов пользователя

////// Подключения из node_modules
import React from "react";
import { useQuery } from "@apollo/react-hooks";

////// Подключения компонентов
import ProcessItem from "../../components/ProcessItem/ProcessItem";

////// Подключение запросов
import GetProcessList from "../../quieres/GetProcess";

interface IProcessPageProps {}

const ProcessPage: React.FC<IProcessPageProps> = () => {
  const { data, loading } = useQuery(GetProcessList);
  return (
    <div>
      {!loading &&
        data?.processList.map((item: any) => {
          return (
            <ProcessItem
              id={item.id}
              name={item.name}
              countReplay={item.numberOfExecutions}
              scenarios={item.numberOfScenarios}
              staff={item.employeesInvolvedProcess}
              start={item.start}
              end={item.end}
              loading={item.loading}
              averageExecutionTime={item.averageLeadTime}
              averageActiveTime={item.averageActiveTime}
            />
          );
        })}
    </div>
  );
};

export default ProcessPage;
