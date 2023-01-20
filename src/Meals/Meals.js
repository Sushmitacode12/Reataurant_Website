import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvaailableMeals";
import { Fragment } from "react";


const Meals = () => {
    return (
    <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
    );
};

export default Meals;