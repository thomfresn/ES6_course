const testingTeam = {
    lead: 'Amanda',
    tester: "Johanna",
    [Symbol.iterator] : function*(){
        yield testingTeam.lead;
        yield testingTeam.tester;
    }
}

const team = {
    testingTeam,
    size:3,
    dpt : 'Eng',
    lead: 'Thom',
    manager: "Alex",
    engineering: 'Bruce',
    [Symbol.iterator] : function*(){
        yield this.lead;
        yield this.manager;
        yield this.engineering;
        yield * this.testingTeam;
    }
};

const names = [];
for(let teamMember of team){
    names.push(teamMember);
}

console.log(names);