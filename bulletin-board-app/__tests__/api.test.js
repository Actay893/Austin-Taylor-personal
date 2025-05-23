const { events, event } = require('../backend/api');
const mockEvents = require('../backend/events'); // Same static array used in the module

describe('api endpoints', () => {
  test('should return all events', () => {
    const req = {};
    const res = {
      json: jest.fn()
    };

    events(req, res);

    expect(res.json).toHaveBeenCalledWith(mockEvents);
  });

  test('should return a single event by eventId param', () => {
    const req = {
      param: {
        eventId: 1 // Gets the second item (0-based index)
      }
    };
    const res = {
      json: jest.fn()
    };

    event(req, res);

    expect(res.json).toHaveBeenCalledWith(mockEvents[1]);
  });
});
