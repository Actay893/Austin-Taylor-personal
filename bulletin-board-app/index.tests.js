import { index } from './index';

describe('index controller', () => {
  test('should render the index page', () => {
    const req = {}; // req is not used in the function
    const res = {
      render: jest.fn()
    };

    index(req, res);

    expect(res.render).toHaveBeenCalledWith('index');
  });
});
