const Manager = require("../Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
        const obj = new Manager("Foo", 1, "    ");
        expect(obj.name).toEqual("Foo");
        expect(obj.id).toEqual(1);
        expect(obj.email).toEqual("    ");
        });
    });
    describe("getName", () => {
        it("should return the object's name", () => {
        const obj = new Manager("Foo", 1, "    ");
        expect(obj.getName()).toEqual("Foo");
        });
    });
    describe("getId", () => {
        it("should return the object's id", () => {
        const obj = new Manager("Foo", 1, "    ");
        expect(obj.getId()).toEqual(1);
        });
    });
    describe("getEmail", () => {
        it("should return the object's email", () => {
        const obj = new Manager("Foo", 1, "    ");
        expect(obj.getEmail()).toEqual("    ");
        });
    });
    describe("getRole", () => {
        it("should return the object's role", () => {
        const obj = new Manager("Foo", 1, "    ");
        expect(obj.getRole()).toEqual("Manager");
        });
    });
    describe("getOfficeNumber", () => {
        it("should return the object's office number", () => {
        const obj = new Manager("Foo", 1, "    ", 1);
        expect(obj.getOfficeNumber()).toEqual(1);
        });
    });
    });

