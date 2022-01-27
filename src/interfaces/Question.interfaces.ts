import { Exercise } from "./Exercise.interfaces";
import { MuscleGroup } from "./MuscleGroup.interfaces";

export interface Question {
    exercises: Exercise[];
    muscle_group: MuscleGroup;
    title: string;
}
