import { Question } from "../Question.interfaces";
import { Exercise } from "../Exercise.interfaces";

export const getCurrentWorkoutFromExercisesIdsString = (workout: Question[], exercisesId: number[] ): Exercise[] => {
    return workout
        .map((question: Question) => question.exercises)
        .flat()
        .filter(
            (exercise: Exercise) => exercise.id === exercisesId?.find((id) => id === exercise.id)
        );
};
