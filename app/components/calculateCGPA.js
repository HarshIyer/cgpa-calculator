export const calculateCGPA = (props) => {
    let totalGradePoint = 0;
    //IMA121
    totalGradePoint += findGradePoint(props[0])*4;
    //IHS121
    totalGradePoint += findGradePoint(props[1])*1;
    //ICS121
    totalGradePoint += findGradePoint(props[2])*5;
    //ICS122
    totalGradePoint += findGradePoint(props[3])*4;
    //ICS123
    totalGradePoint += findGradePoint(props[4])*4;
    //IEC121
    totalGradePoint += findGradePoint(props[5])*5;

    return totalGradePoint/230*10;
}

const findGradePoint = (grade) => {
    if(grade === "A") return 10;
    if(grade === "A-") return 9;
    if(grade === "B") return 8;
    if(grade === "C") return 7;
    if(grade === "D") return 6;
    if(grade === "E") return 5;
    if(grade === "F") return 4;
}