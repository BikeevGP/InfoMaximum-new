import React from 'react';

interface ITranslateProps{
}
export const translateError:React.FC<ITranslateProps> = (props:any):any  => {
    switch (props) {
      case "GraphQL error: No user with that email":
        return "Такого пользователя не существует";
      case "GraphQL error: Incorrect password":
        return "Не правильный пароль";
      case "GraphQL error: This email is already registered":
        return "Этот email уже занят";
    }
  };

  