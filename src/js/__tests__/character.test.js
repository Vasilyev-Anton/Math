import Character from '../character';

test('attack strength without Datura', () => {
  const daemon = new Character('Daemon', 100, 3);
  expect(daemon.attack).toBe(80);
});

test('attack strength with Datura', () => {
  const magician = new Character('Magician', 100, 2, true);
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});

test('get attack if attack < 0', () => {
  const magician = new Character('Magician', -20, 2);
  expect(magician.attack).toBe(0);
});

test('get attack if attack > 100', () => {
  const daemon = new Character('Daemon', 120);
  expect(daemon.attack).toBe(100);
});
