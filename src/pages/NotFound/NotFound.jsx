export default function NotFound() {
    return (
        <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
            <div className="max-w-xl text-center">
                <div className="mb-6 text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    404
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Page not found
                </h1>

                <p className="mt-4 text-slate-400 leading-7">
                    Sorry, we couldn’t find the page you’re looking for. It may have
                    been moved, deleted, or the URL might be incorrect.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                        href="/"
                        className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-950
                       transition hover:bg-slate-200 focus:outline-none
                       focus:ring-2 focus:ring-white focus:ring-offset-2
                       focus:ring-offset-slate-950"
                    >
                        Go back home
                    </a>

                    <button
                        onClick={() => window.history.back()}
                        className="rounded-xl border border-slate-700 px-6 py-3 font-semibold
                       text-slate-200 transition hover:bg-slate-800
                       focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        Go back
                    </button>
                </div>

                <div className="mt-12 flex items-center justify-center gap-3 text-slate-600">
                    <span className="h-px w-12 bg-slate-800" />
                    <span className="text-sm">Lost in space?</span>
                    <span className="h-px w-12 bg-slate-800" />
                </div>
            </div>
        </main>
    );
}
