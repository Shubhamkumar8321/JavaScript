class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const SKG = new Teacher("skg", "skg@teacher.com", "123")

SKG.logMe()
const osm_skg = new User("osm-skg")

osm_skg.logMe()

console.log(osm_skg instanceof User);