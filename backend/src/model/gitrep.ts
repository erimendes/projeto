import mongoose from '../database';

const gitrepSchema = new mongoose.Schema({
    repository: {
        type:       String,
        required:   true,
    },
    authtype: {
        type:       String,
        required:   true,
        default:    "999",
    },
    CreatedAt: {
        type:       Date,
        default:    Date.now,
        immutable:  true,
    },
    UpdatedAt:      Date,
});

export default mongoose.model('gitrep', gitrepSchema);