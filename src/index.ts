import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'newName', age: 9999 });

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');