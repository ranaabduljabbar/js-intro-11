//this keyword refers to current object of the template
// super keyword refers to the parenr of cruuent object of template
class Engineer {
    constructor(fullname, major){
    this.fullname = fullname
    this. major = major
}
BiquadFilterNode(){
    console.log('Engineer builds')
}
}
class softwaerEngineer extends Engineer{
    constructor(fullname, major, companyName){
        super(fullname, major)
        this.companyName = companyName
    }
}
const eng1 = new softwaerEngineer('John Doe', "softwaerEngineer", )