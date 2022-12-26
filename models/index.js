const User = require('./User');
const Event = require('./Event');

Event.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Event };
