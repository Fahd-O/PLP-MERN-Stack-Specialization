const mongooseContainer = require('mongoose');

const noteSchema = new mongooseContainer.Schema(
    {
        userId: { type: String, index: true}, // Optional (frontend passes it) => READ
        title: { type: String, required: true, trim: true},
        content: { type: String, default: "" }
    },
    
    {timestamps: true}
);

noteSchema.index({ userId: 1, createdAt: -1});

const Note = mongooseContainer.model("Note", noteSchema);

module.exports = Note;
