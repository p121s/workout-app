export interface Exercise {
    description: string;
    duration: number;
    id: number;
    photo: string;
    title: string;
    video: string;
}

export interface MuscleGroup {
    name: string;
    photo: string;
}

export interface Question {
    exercises: Exercise[];
    muscle_group: MuscleGroup;
    title: string;
}
