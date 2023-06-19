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
    currentIdStudent: number,
    selectedIdStudent: number,
    idCourse: number,
    students: IStudents[],
    courses: ICourses[],
}