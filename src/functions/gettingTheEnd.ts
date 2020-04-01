interface IGettingProps{
    (count:number):string|null
}

const gettingTheEnd:IGettingProps = count =>{
    let countString = count.toString();
    switch (countString[countString.length - 1]) {
        case "2":
            case "3":
                case "4":
                    return " сотрудника"
        case "1": return " сотрудник"
        default: return " сотрудников"    
    }
}

export default gettingTheEnd;