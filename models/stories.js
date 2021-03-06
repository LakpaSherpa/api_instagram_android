const mongoose = require('mongoose');

// const dailyPhotoSchema = new mongoose.Schema({
//     dailyPhoto: {
//         type: String
//     }
// }, {timestamps: true});

const viewSchema = new mongoose.Schema({
    viewBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});


const storySchema = new mongoose.Schema({
    dailyPhoto: {
        type: String
    },
    postBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    authorPic: {
        type: String
    },
    views: [viewSchema],
    viewerCount: {
        type: Number
    }
}, { timestamps: true});

module.exports = mongoose.model('Story', storySchema);