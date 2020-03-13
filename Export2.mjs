class student{
    constructor(name, matric,major){
        this.name = name;
        this.matric = matric;
        this.major = major;
    }

    get Name(){
        return this.name;
    }

    set Name(name){
        this.name;
    }

    get Matric(){
        return this.matric;
    }

    set Matric(matric){
        this.matric;
    }

    get Major(){
        return this.major;
    }

    set Major(major){
        this.major;
    }
    
    display=()=>{
        console.log('Name: ', this.name);
        console.log('Matric no: ', this.matric);
        console.log('Major', this.major);
    }
}

export {student};