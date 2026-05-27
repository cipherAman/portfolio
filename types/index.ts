// TYpes 

export interface Project{
    id:string;
    title:string;
    description:string;
    longDescription:string;
    technologies:string[];
    image:string;
    github?:string;
    live?:string;
    featured:boolean;

}


export interface Skill {
    id:string;
    category:string;
    items:string[];
}

export interface Experience{
    id:string;
    company:string;
    role:string;
    period:string;
    description:string;
    skills:string[];
}

export interface ContactFormData{
    name:string;
    email:string;
    message:string;
}