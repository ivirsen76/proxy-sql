import supertest from 'supertest';

const request = supertest('http://someurl.com/api/v1/');

describe.skip('/config', () => {
    it('should get config values', async () => {
        const response = await request
            .get('/config')
            .expect('Content-Type', /json/)
            .expect(200);
        expect(response.body).toEqual({
            hostname: 'something',
            username: 'something',
            password: 'something',
            port: 'something',
            mode: 'record',
        });
    });

    it('should update config values', async () => {
        await request
            .put('/config')
            .send({
                hostname: 'localhost',
                username: 'root',
                password: 'password',
                port: '8000',
                mode: 'notification',
            })
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it('should return errors during updating', async () => {
        const response = await request
            .put('/config')
            .send({
                hostname: 'localhost',
                username: 'root',
                password: '',
                port: 'wrong',
                mode: 'wrong',
            })
            .expect('Content-Type', /json/)
            .expect(422);
        expect(response.body).toEqual({
            errors: {
                password: ['Password is required', 'Password should be more than 8 letters'],
                port: ['The port must be a number'],
                mode: ['Unknown mode'],
            },
        });
    });
});

describe.skip('/keywords', () => {
    it('should get keywords', async () => {
        const response = await request
            .get('/keywords')
            .expect('Content-Type', /json/)
            .expect(200);
        expect(response.body).toEqual(
            {
                id: 1,
                text: 'UPDATEXML',
                selected: true,
            },
            {
                id: 2,
                text: 'PROCEDURE ANALYSE',
                selected: false,
            },
            {
                id: 3,
                text: 'JSON_STORAGE_FREE',
                selected: true,
            }
        );
    });

    it('should update keyword', async () => {
        await request
            .put('/keywords/2')
            .send({
                selected: true,
            })
            .expect('Content-Type', /json/)
            .expect(200);
    });

    it('should return errors during updating', async () => {
        const response = await request
            .put('/keywords/2')
            .send({
                selected: 'wrong',
            })
            .expect('Content-Type', /json/)
            .expect(422);
        expect(response.body).toEqual({
            errors: {
                selected: ['It should be a boolean'],
            },
        });
    });
});
