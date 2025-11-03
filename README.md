# PLP-MERN-Stack-Specialization

A concise, week-by-week code archive for my 8-week MERN Stack specialization.  
This repository collects the practical code and class exercises produced during live sessions. It is a learning record — not a production app.

---

## Summary
- **Purpose:** Store and version the code written during my live PLP MERN specialization classes, grouped by week.  
- **Scheduled length:** 8 weeks.  
- **Current status:** Week 1 (MongoDB) content present.

---

## Repo layout (convention)
```

PLP-MERN-Stack-Specialization/
├─ week-01-mongodb/        # Week 1: MongoDB examples, models, seed scripts
├─ week-02-express/        # Week 2: Express examples (when added)
├─ week-03-react/          # Week 3: React examples (when added)
├─ week-04-nextjs/         # Week 4: Next.js examples (when added)
├─ resources/              # optional: shared notes, links, cheatsheets
├─ .gitignore
└─ README.md               # this file

````

Each `week-x-x-...` folder is self-contained includes a short `README.md` with run instructions and notes about that class session.

---

## Quick start (copy / paste)
1. Clone the repo:
```bash
git clone https://github.com/Fahd-O/PLP-MERN-Stack-Specialization.git
cd PLP-MERN-Stack-Specialization
````

2. Open the week folder you want to run (e.g. `week-01-mongodb`), install deps if present:

```bash
cd week-01-mongodb
npm install   # only if package.json exists
```

3. Create a `.env` with required values (example):

```
MONGO_URI=mongodb://username:password@localhost:27017/your_db_name
PORT=3000
```

4. Run the demo / seed scripts from that week folder:

```bash
node seed.js   # optional: seed sample data
node crud.js   # run the demo / example script
```

---

## Notes

* This repository is educational; expect code to be incremental and sometimes rough.
* Secrets are kept out of Git. `.env` and `node_modules/` are added to `.gitignore`.
* Each week’s folder should include a minimal README documenting commands used and topics covered.

---

## Contributing

Pull requests are welcome if they are small and clearly linked to a specific week. Use descriptive commit messages like:

```
week-02: add express routes and middleware demo
```

---

## Contact

- **Author:** Abiola Fahad Ogunnaike
- **Email:** [realabiolafahad@gmail.com](mailto:realabiolafahad@gmail.com)

---

## License

MIT
