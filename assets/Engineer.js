function Engineer(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
}

Engineer.prototype.getName = function () {
    return this.name;
}

Engineer.prototype.getId = function () {
    return this.id;
}

Engineer.prototype.getEmail = function () {
    return this.email;
}

Engineer.prototype.getGithub = function () {
    return this.github;
}

Engineer.prototype.getRole = function () {
    return "Engineer";
}

module.exports = Engineer;

