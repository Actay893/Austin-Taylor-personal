const { index } = require('../backend/index');

describe('index handler', () => {
  test('calls res.render with "index"', () => {
    const req = {}; // Not used
    const res = { render: jest.fn() };

    index(req, res);

    expect(res.render).toHaveBeenCalledWith('index');
  });
});
