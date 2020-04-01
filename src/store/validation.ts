export const maxLength = (value: string) => {
  return value && value.length > 15
    ? `Должен быть 15 символов или меньше`
    : undefined;
};

export const checkNameChar = (value:string)=>{
  return value && !/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/i.test(value)
  ? "Недопустимые символы"
  : undefined;
}

export const minLength = (value: string) => {
  return value && value.length < 4
    ? `Должен быть 4 символа или больше`
    : undefined;
};
export const minLength8 = (value: string) => {
  return value && value.length < 8
    ? `Должно быть 8 символов или больше`
    : undefined;
};

export const emailTest = (value: string) => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Не верная электронная почта"
    : undefined;
};

export const checkRePassword = (value:string, Fields:any) =>{
    return value !== Fields.password ? 'Пароли не совпадают' : undefined;
}
