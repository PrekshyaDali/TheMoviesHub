const mongoose = require('mongoose');
const connectDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://prekshyashrestha0:0RmL46XcahlMdpTJ@themovieshub.l6vdw.mongodb.net/?retryWrites=true&w=majority");
        console.log("Successfully connected to the server");
    } catch (error) {
        console.error(`Failed to connect to mongodb ${error.message}`);
        process.exit(1); 
};
}
module.exports = connectDb;
