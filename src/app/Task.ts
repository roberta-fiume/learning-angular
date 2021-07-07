export interface Task {
    id?: number; //the question mark means that the id is optional
    text: string;
    day: string;
    reminder: boolean;
}