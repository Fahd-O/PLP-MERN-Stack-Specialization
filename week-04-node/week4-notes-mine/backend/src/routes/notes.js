const expressContainer = require("express");
const NotesContainer = require("../models/Notes");
const router = expressContainer.Router();


// GET /api/notes?userId=abc123 -> List (optionally filter by Id ) => READ
router.get("/", async (req, res) => {
    const { userId } = req.query;
    const filter = userId ? { userId } : {};
    const notes = await NotesContainer.find(filter).sort({ createdAt: -1 });
    res.json(notes);
});

// POST /api/notes -> Create (optionally attach userId) => CREATE
router.post("/", async (req, res) => {
    const { title, content, userId } = req.body;

    if (!title) return res.status(400).json({ message: "Looks like someone forgot to supply the 'title'!" });

    const note = await NotesContainer.create({ title, content, userId });
    res.status(201).json(note);
});

//PUT /api/notes/:id => UPDATE
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const updated = await NotesContainer.findByIdAndUpdate(
        id,
        { $set: { title, content }},
        { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Mabrook!!! There was nothing there!" });
    res.json(updated);
});

//DELETE /api/notes/:id => DELETE
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await NotesContainer.deleteOne({ _id: id});

    if (result.deleteOne == 0) return res.status(404).json({ message: "There is nothing here for you to delete, bye bye..."});
    res.json({ ok: true });
});

module.exports = router;