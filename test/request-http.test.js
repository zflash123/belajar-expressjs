import express, { query } from "express";
import request from "supertest";

const app = express();


app.get('/', (req, res) => {
    res.send(`Hello ${req.query.name}`)
})

test("Test HTTP Request", async () => {
    const response = await request(app).get('/').query({ name: "Zaed" });
    expect(response.text).toBe('Hello Zaed');
})