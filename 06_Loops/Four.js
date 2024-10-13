const myObj={
    "IN":"India",
    "FR":"France",
    "BAN":"Bangladesh"
}
for (const key in myObj) {
    // console.log(`${key} for the sortcut of ${myObj[key]}`);
    
}


const programming=["js","cpp","java","mysql","py"]
for (const key in programming) {
    // console.log(`${key} for the index of ${programming[key]}`);
    
}

const coding=[
    {
    languageName:"Javascript",
    languageFile:"js",
},
    {
    languageName:"Java",
    languageFile:"java",
},
    {
    languageName:"MySQL",
    languageFile:"database",
}
]
coding.forEach((item)=>{
    console.log(item.languageName);
    
})