export interface IStudents {
    id: number,
    name: string,
    phoneNumber: string,
    age: number,
}

export interface ICourses {
    id: number,
    course: string,
    duration: number,
}

export interface IStore {
    students: IStudents[],
    courses: ICourses[],
}