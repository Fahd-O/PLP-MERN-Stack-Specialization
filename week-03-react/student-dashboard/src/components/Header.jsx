export default function Header() {
    return(
        <header className="bg-black border-b shadow-sm">
            <div className="mx-auto max-w-5xl p-4 flex justify-between">
                <h1 className="text-xl font-bold text-white">Student Dashboard</h1>
                <span className="text-slate-600 text-sm">MERN Week 3 Class</span>
            </div>
        </header>
    );
}