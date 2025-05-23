const events = require('../backend/events');

describe('events data', () => {
  test('should be an array of 3 events', () => {
    expect(Array.isArray(events)).toBe(true);
    expect(events).toHaveLength(3);
  });

  test('each event should have required properties', () => {
    events.forEach((event, index) => {
      expect(event).toHaveProperty('id');
      expect(event).toHaveProperty('title');
      expect(event).toHaveProperty('date');

      if (index < 2) {
        expect(event).toHaveProperty('detail');
      } else {
        expect(event).not.toHaveProperty('detail'); // 3rd item doesn't have `detail`
      }
    });
  });
});
