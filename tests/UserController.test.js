

const app= require('./../src/loader/index');
const supertest = require("supertest");
const request = supertest("http://localhost:5555");

describe("User Controller", () => {
    describe("/users/login", () => {
        it("should authorize account", async () => {
            await request
                .post("/users/login")
                .send({
                    login: "KirillVerenich",
                    password: "123123",
                })
                .expect(200);
        });
    });

    describe("/users", () => {
        it("should get all users", async () => {
            await request
                .get("/users")
                .set(
                    "Authorization",
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwfQ.jAfZJKAjyfdeaWhs-dhXkxeJVPPW9JMs5Dc3__Rg0Kc"
                )
                .expect(200);
        });
    });

    describe("/users", () => {
        it("should get user by id", async () => {
            await request
                .get("/users/3")
                .set(
                    "Authorization",
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwfQ.jAfZJKAjyfdeaWhs-dhXkxeJVPPW9JMs5Dc3__Rg0Kc"
                )
                .expect(200);
        });
    });
});