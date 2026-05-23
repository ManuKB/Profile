import photoImage from '../assets/myphoto.png'

export default function Profile() {
  return (
    <section className="relative isolate overflow-hidden rounded-[40px] border border-slate-200/80 bg-white/90 px-6 py-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-sm transition-colors duration-500 dark:border-slate-700/70 dark:bg-slate-950/85">
      <div className="absolute inset-0 overflow-hidden rounded-[40px]">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 opacity-90 dark:from-slate-950 dark:via-slate-900 dark:to-[#020617]" />

        <div className="absolute inset-0 opacity-70 dark:opacity-50">
          <svg viewBox="0 0 1920 720" className="h-full w-full" preserveAspectRatio="none">
            <path d="M0 320 C 300 200 600 420 960 340 C 1300 260 1500 460 1920 360 L1920 720 L0 720 Z" fill="rgba(14,165,233,0.12)" />
            <path d="M0 380 C 260 460 540 220 920 280 C 1240 340 1500 180 1920 260 L1920 720 L0 720 Z" fill="rgba(59,130,246,0.16)" />
            <path d="M0 430 C 220 340 500 520 900 440 C 1260 360 1520 520 1920 450 L1920 720 L0 720 Z" fill="rgba(14,165,233,0.08)" />
            <path d="M0 500 C 180 420 420 620 820 560 C 1180 500 1500 620 1920 520 L1920 720 L0 720 Z" fill="rgba(56,189,248,0.05)" />
          </svg>
        </div>

        <div className="absolute -left-20 top-20 h-48 w-48 rounded-full bg-cyan-300/30 blur-3xl dark:bg-sky-500/20" />
        <div className="absolute right-[-4rem] bottom-24 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl dark:bg-fuchsia-500/15" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6 text-slate-900 dark:text-slate-100">
          <p className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Professional Profile
          </p>

          <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            Modern hero section with smooth wave motion and browser-aware theme styling.
          </h2>

          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            A polished presentation block with layered gradient textures, refined wave shapes, and a crisp profile image that adapts to light or dark browser themes automatically.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100">
              View Projects
            </button>
            <button className="rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800">
              Download Resume
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[32px] border border-slate-200/60 bg-slate-950/10 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/70">
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-cyan-400/35 via-transparent to-transparent blur-3xl" />
          <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-cyan-300/15 blur-2xl dark:bg-cyan-400/10" />
          <div className="relative">
            <img
              src={photoImage}
              alt="Profile"
              className="relative h-[380px] w-full rounded-[28px] object-cover grayscale transition duration-700 hover:grayscale-0"
            />
          </div>
          <div className="mt-6 rounded-3xl bg-white/90 p-5 text-slate-900 shadow-xl shadow-slate-900/5 backdrop-blur dark:bg-slate-950/80 dark:text-slate-100">
            <h3 className="text-xl font-semibold">Mohan KB</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Software engineer with a strong focus on enterprise applications, automation platforms, and AI orchestration.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">React</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">Node.js</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
