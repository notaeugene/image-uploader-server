import supertest from 'supertest';

import createAppServer from './helpers/server.helper';

const app = createAppServer();
const request = supertest(app);
const urlPrefix = '/api/v1';

describe('POST /uploads', () => {
  test('should return "201" status', async () => {
    const res = await request.post(`${urlPrefix}/uploads`);
    expect(res.status).toBe(201);
  });
});

describe('GET /uploads/:id', () => {
  test('should return "200" status', async () => {
    const res = await request.get(`${urlPrefix}/uploads/123`);
    expect(res.status).toBe(200);
  });
});

describe('GET /uploads', () => {
  test('should return "200" status', async () => {
    const res = await request.get(`${urlPrefix}/uploads`);
    expect(res.status).toBe(200);
  });
});

describe('PUT /uploads/:id', () => {
  test('should return "200" status', async () => {
    const res = await request.get(`${urlPrefix}/uploads/123`);
    expect(res.status).toBe(200);
  });
});

describe('DELETE /uploads/:id', () => {
  test('should return "200" status', async () => {
    const res = await request.delete(`${urlPrefix}/uploads/123`);
    expect(res.status).toBe(200);
  });
});
