const sequelize = require('../config/connection');
const { User, Fact, Set } = require('../models');

const userData = require('./userData.json');
const setData = require('./setData.json');
const factData = require('./factData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const set of setData) {
        await Set.create({
            ...set,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    for (const fact of factData) {
        await Fact.create({
            ...fact,
            set_id: sets[Math.floor(Math.random() * sets.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();