const User = require('.User');
const Fact = require('/Fact');
const Set = require('Set');

User.hasMany(Set, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Set.belongsTo(User, {
    foreignKey: 'user_id'
});

Set.hasMany(Fact, {
    foreignKey: 'set_id',
    onDelete: 'CASCADE'
});

Fact.belongsTo(Set, {
    foreignKey: 'set_id'
});

module.exports = { User, Set, Fact };