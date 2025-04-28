function getDay(day) {
    switch (day) {
        case 1: return "Monday";

            break;

        case 2: return "Tuesday";

            break;

        case 3: return "Wednesday";

            break;

        case 4: return "Thirsday";

            break;

        case 5: return "Friday";

            break;

        case 6: return "Saturday";

            break;

        case 7: return "Sunday";

            break;

        default: return "only 7 days in week";

            break;
    }
}

console.log(getDay(10)); 