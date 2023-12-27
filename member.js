function skillMember()
return {
    name: "skillMember",
    description: "This is a skill member",
    age: 20,
    address: "Hanoi",
    skill: ["JS", "C++", "Java"],
    showInfo: function () {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Address: " + this.address);
        console.log("Skill: " + this.skill);
    }
}