module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  }
  var name = [];
  for (let i=0; i < members.length; i++ ) {
    if (typeof members[i] == 'string') {
    name.push(members[i].trim().slice(0,1).toUpperCase());
    }
  }
  return name.sort().join("");
};