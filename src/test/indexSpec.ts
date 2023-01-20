// Supertest to make HTTP requests on the server
import supertest from 'supertest';
// import app to simulate routes
import app from '..';

// instance of supertest request (on our app's routes)
const request = supertest(app);

describe('Test endpoint server', () => {
  it('GET the / static files', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
