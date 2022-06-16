const request = require('supertest')
const app = require('../app.js')

describe("POST /users/register", () => {
    // test("ok", async () => {
    //     const res = await request(app)
    //         .post('/users/register')
    //         .send({
    //             "fname": "patel",
    //             "email": "patel1@gmail.com",
    //             "password": "patel1@gmail.com",
    //             "role": "User"
    //         })
    //     console.log(res)
    //     expect(res.statusCode).toEqual(200)
    // })


    test("login user", async () => {
        const res = await request(app)
            .post('/users/login')
            .send({
                "email": "patel1@gmail.com",
                "password": "patel1@gmail.com"
            })
        console.log(res)
        expect(res.statusCode).toEqual(200)

    })
    test(" GET the details ", async () => {
        const res = await request(app)
            .get('/users/users')
        console.log(res)
        expect(res.statusCode).toEqual(200)
    })

    //post the samples
    test('POST', async () => {
        const res = await request(app)
            .post('/test/addglreport')
            .send({
             
                "fbs": "110", 
                "ppbs": "5",
                 "gh": "10",
                  "calcium": "333" ,
                  "_id": "6222f7d452caa4e632dfae55"

            })

        console.log(res)
        expect(res.statusCode).toEqual(200)
    })

    test("GET the samples", async () => {
        const getData = await request(app)
            .post('/test/viewglrepo')
            .send({
                "email": "patel1@gmail.com"
            })
        console.log(getData)
        expect(getData.statusCode).toEqual(200)



    })

})