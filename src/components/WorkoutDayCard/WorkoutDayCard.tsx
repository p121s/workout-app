import * as Styled from "./WorkoutDayCard.styled";
import { WorkoutDayCardProps } from "./WorkoutDayCard.interfaces";

export default function WorkoutDayCard({ backgroundSrc, day, workoutName, workoutDescription }: WorkoutDayCardProps): JSX.Element {
    return (
        <>
            <Styled.MainDivDayCard
                background={backgroundSrc}
            ></Styled.MainDivDayCard>
            <Styled.ParDayNumber>Day {day}</Styled.ParDayNumber>
            <Styled.ParWorkoutName>{workoutName}</Styled.ParWorkoutName>
            <Styled.ParWorkoutDescription>
                {workoutDescription}
            </Styled.ParWorkoutDescription>
        </>
    );
}
