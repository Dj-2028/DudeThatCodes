import { Calendar1, Spotlight, Timer, Infinity, Notebook, ArrowRight, Wand2, User, TestTube, Clock } from 'lucide-react';

export default function Solutions() {
    const services = [
        {
            icon: Calendar1,
            title: "Chaotic Schedules",
            description: "An AI assistant that organizes your day smartly — auto-scheduling meetings, managing overlaps, and keeping your time under control.",
            color: "bg-purple-400"
        },
        {
            icon: Spotlight,
            title: "Meeting Overload",
            description: "Predicts when your calendar is getting too full and suggests better time slots to prevent burnout and balance workload..",
            color: "bg-purple-400"
        },
        {
            icon: Timer,
            title: " Lost Track of Time",
            description: "Tracks where your hours go and shows insights on what tasks you’ve spent the most time on to boost productivity.",
            color: "bg-blue-400"
        },
        {
            icon: Infinity,
            title: "Endless Coordination",
            description: "Automates meeting coordination, reminders, and reschedules — so you never waste time managing calendars manually.",
            color: "bg-blue-400"
        },
        {
            icon: Notebook,
            title: "Reactive Planning",
            description: "Goes beyond static calendars by proactively suggesting focus blocks, rest periods, and task priorities based on your routine..",
            color: "bg-blue-400"
        },
        {
            icon: Wand2,
            title: "Interactive Magic",
            description: "We have a proven track record and experience in seamlessly turning Figma designs into functional websites.",
            color: "bg-blue-400"
        }
    ]
    return (
        <>
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/60 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10"
                    >
                        {/* Icon */}
                        <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <service.icon className="w-7 h-7 text-white" />
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-semibold text-white mb-3">
                            {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {service.description}
                        </p>

                        {/* Arrow Button */}
                        <button className="w-10 h-10 bg-slate-700/50 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                            <ArrowRight className="w-5 h-5 text-white" />
                        </button>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none" />
                    </div>
                ))}
            </div>
        </>

    )
}