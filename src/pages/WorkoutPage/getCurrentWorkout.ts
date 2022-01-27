import { Question } from "../../components/interfaces/Question.interfaces";
import { Exercise } from "../../components/interfaces/Exercise.interfaces";

export const getCurrentWorkoutFromExercisesIdsString = (workout: Question[], exercisesId: number[] ): Exercise[] => {
    return workout
        .map(({exercises}: Question) => exercises)
        .flat()
        .filter(
            (exercise: Exercise) => exercise.id === exercisesId?.find((id) => id === exercise.id)
        );
};
