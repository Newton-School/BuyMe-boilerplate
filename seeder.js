const fs = require("fs");
const Inventory = require('./models/inventory.js');
const inventory_list = JSON.parse(fs.readFileSync(`${__dirname}/./data/inventory.json`));

async function seedWithDummyData() {
    try {
        // CLEAR Dawait Subject.deleteMany({});
        await Inventory.deleteMany({});

        const createdinventory = await Inventory.insertMany(inventory_list);

        console.log(`${createdinventory.length} Inventory created.`);
    } catch (error) {
        console.error(`Error seeding data: ${error}`);
        process.exit(1);
    }
}

module.exports = seedWithDummyData