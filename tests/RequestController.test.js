const app= require('./../src/loader/index');
const supertest = require("supertest");
const RequestServiceTest = require("../src/service/RoomsService");
const request = supertest("http://localhost:5555");

describe("Request Controller", () => {
    describe("/Requests", () => {
        it("should return error - Request is occupied", async () => {
            await request
                .post("/Request")
                .set(
                    "Authorization",
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjN9.JIvHKGBTykK52Z83z6Iq2Z3QALx84_IM69937NG3pQw"
                )
                .send({
                    description: "ghgh",
                })
                .expect(401);
        });

        it("should return error - validation", async () => {
            await request
                .post("/Request")
                .set(
                    "Authorization",
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjN9.JIvHKGBTykK52Z83z6Iq2Z3QALx84_IM69937NG3pQw"
                )
                .send({
                    description: "ghgh",
                })
                .expect(400);
        });
    });
});