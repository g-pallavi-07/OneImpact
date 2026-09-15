import { useState } from "react";

// Replace these paths with your actual component paths
import Navbar from "../components/Navbar";
import Button from "../components/Button";

// Replace this with your actual image path
import missionImage from "../assets/mission-cover.jpg";

const mission = {
    title: "Green Our Community",
    category: "Environment",
    description:
        "Join this week's community mission to make our neighbourhood cleaner and greener. Plant trees, collect waste, and help create a healthier environment for everyone.",
    image: missionImage,
    status: "Registration Open",
    location: "New Delhi",
    volunteers: 128,
    goal: 250,
};

const announcements = [
    {
        id: 1,
        title: "Mission registration is now open",
        description:
            "Join the mission and become part of this week's community action.",
        date: "20 Aug 2026",
        time: "10:00 AM",
    },
    {
        id: 2,
        title: "Volunteer meetup location updated",
        description:
            "The volunteer meetup point has been moved to the community park entrance.",
        date: "21 Aug 2026",
        time: "4:30 PM",
    },
    {
        id: 3,
        title: "Bring reusable gloves",
        description:
            "Participants are encouraged to bring reusable gloves and water bottles.",
        date: "22 Aug 2026",
        time: "9:00 AM",
    },
    {
        id: 4,
        title: "Mid-mission progress update",
        description:
            "We have already crossed 50% of our volunteer participation goal.",
        date: "24 Aug 2026",
        time: "6:00 PM",
    },
];

const statistics = [
    {
        id: 1,
        label: "Volunteers Joined",
        value: "128",
        icon: "👥",
    },
    {
        id: 2,
        label: "Trees Planted",
        value: "342",
        icon: "🌱",
    },
    {
        id: 3,
        label: "Waste Collected",
        value: "486 kg",
        icon: "♻️",
    },
    {
        id: 4,
        label: "Hours Contributed",
        value: "1,240",
        icon: "⏱️",
    },
];

const timeline = [
    {
        id: 1,
        title: "Registration Open",
        date: "20 Aug 2026",
        description: "Community members can join the mission.",
        completed: true,
    },
    {
        id: 2,
        title: "Mission Starts",
        date: "23 Aug 2026",
        description: "Volunteers begin the community mission.",
        completed: false,
    },
    {
        id: 3,
        title: "Mid Updates",
        date: "25 Aug 2026",
        description: "Progress and impact statistics are updated.",
        completed: false,
    },
    {
        id: 4,
        title: "Mission Ends",
        date: "30 Aug 2026",
        description: "Mission results are verified and finalised.",
        completed: false,
    },
];

function Mission() {
    const [joinStatus, setJoinStatus] = useState("join");

    const progress = Math.round(
        (mission.volunteers / mission.goal) * 100
    );

    const handleJoin = () => {
        if (joinStatus === "join") {
            setJoinStatus("joined");
        }
    };

    const getJoinButtonText = () => {
        if (joinStatus === "joined") {
            return "Joined ✓";
        }

        if (joinStatus === "completed") {
            return "Mission Completed";
        }

        return "Join Mission";
    };

    return (
        <div className="min-h-screen bg-[#F8F1DF] text-[#123D32] mt-18">
            <Navbar />

            <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">

                {/* ================= HEADER ================= */}

                <section className="mb-10">

                    <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                        This Week's Mission
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-[#123D32]/70 sm:text-lg">
                        Work together with your community to turn a shared goal into
                        measurable impact.
                    </p>
                </section>

                {/* ================= MISSION CARD ================= */}

                <section className="mb-10 overflow-hidden rounded-[2rem] bg-[#00563F] shadow-sm">
                    <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

                        {/* Image */}

                        <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[480px]">
                            <img
                                src={mission.image}
                                alt={mission.title}
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div className="absolute left-5 top-5 rounded-full bg-[#7BCB3A] px-4 py-2 text-sm font-semibold text-[#123D32]">
                                {mission.category}
                            </div>
                        </div>

                        {/* Content */}

                        <div className="flex flex-col justify-between p-7 text-white sm:p-10 lg:p-12">

                            <div>
                                <div className="mb-5 flex flex-wrap items-center gap-3">
                                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                                        {mission.status}
                                    </span>

                                    <span className="text-sm text-white/65">
                                        📍 {mission.location}
                                    </span>
                                </div>

                                <h2 className="max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
                                    {mission.title}
                                </h2>

                                <p className="mt-6 max-w-xl text-base leading-7 text-white/75">
                                    {mission.description}
                                </p>
                            </div>

                            <div className="mt-10">

                                {/* Progress */}

                                <div className="mb-3 flex items-center justify-between text-sm">
                                    <span className="text-white/70">
                                        Volunteer participation
                                    </span>

                                    <span className="font-semibold">
                                        {mission.volunteers} / {mission.goal}
                                    </span>
                                </div>

                                <div className="h-3 overflow-hidden rounded-full bg-white/15">
                                    <div
                                        className="h-full rounded-full bg-[#7BCB3A] transition-all duration-500"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>

                                <div className="mt-7">
                                    {joinStatus === "completed" ? (
                                        <button
                                            disabled
                                            className="rounded-full bg-white/20 px-6 py-3 font-semibold text-white/60"
                                        >
                                            Mission Completed
                                        </button>
                                    ) : (
                                        <Button
                                            onClick={handleJoin}
                                            disabled={joinStatus === "joined"}
                                        >
                                            {getJoinButtonText()}
                                        </Button>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= TIMELINE ================= */}

                <section className="mb-10 rounded-[2rem] bg-white p-6 shadow-sm sm:p-8 lg:p-10">

                    <div className="mb-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#7BCB3A]">
                            Mission Schedule
                        </p>

                        <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
                            Mission Timeline
                        </h2>
                    </div>

                    <div className="relative">

                        {/* Desktop connecting line */}

                        <div className="absolute left-[8%] right-[8%] top-5 hidden h-px bg-[#123D32]/10 md:block" />

                        <div className="grid gap-8 md:grid-cols-4">

                            {timeline.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative flex gap-4 md:block md:text-center"
                                >

                                    <div
                                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white text-sm font-bold ${item.completed
                                                ? "bg-[#7BCB3A] text-[#123D32]"
                                                : "bg-[#F8F1DF] text-[#123D32]/40"
                                            }`}
                                    >
                                        {item.completed ? "✓" : item.id}
                                    </div>

                                    <div className="md:mt-5">
                                        <h3 className="font-semibold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-sm font-medium text-[#7BCB3A]">
                                            {item.date}
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-[#123D32]/60">
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                {/* ================= ANNOUNCEMENTS + STATS ================= */}

                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

                    {/* Announcements */}

                    <section className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">

                        <div className="mb-6 flex items-end justify-between gap-4">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#7BCB3A]">
                                    Stay Updated
                                </p>

                                <h2 className="mt-2 font-serif text-3xl">
                                    Announcements
                                </h2>
                            </div>

                            <span className="hidden text-sm text-[#123D32]/50 sm:block">
                                {announcements.length} updates
                            </span>
                        </div>

                        <div className="max-h-[390px] space-y-3 overflow-y-auto pr-2">

                            {announcements.length > 0 ? (
                                announcements.map((announcement) => (
                                    <article
                                        key={announcement.id}
                                        className="rounded-2xl border border-[#123D32]/8 p-4 transition hover:border-[#7BCB3A]/50 hover:shadow-sm"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="font-semibold">
                                                {announcement.title}
                                            </h3>

                                            <span className="shrink-0 rounded-full bg-[#F8F1DF] px-3 py-1 text-xs text-[#123D32]/60">
                                                {announcement.time}
                                            </span>
                                        </div>

                                        <p className="mt-2 text-sm leading-6 text-[#123D32]/60">
                                            {announcement.description}
                                        </p>

                                        <p className="mt-3 text-xs font-medium text-[#7BCB3A]">
                                            {announcement.date}
                                        </p>
                                    </article>
                                ))
                            ) : (
                                <div className="flex min-h-[250px] items-center justify-center rounded-2xl bg-[#F8F1DF] text-center">
                                    <div>
                                        <p className="font-semibold">
                                            No announcements yet
                                        </p>

                                        <p className="mt-1 text-sm text-[#123D32]/50">
                                            Mission updates will appear here.
                                        </p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </section>

                    {/* Statistics */}

                    <section className="rounded-[2rem] bg-[#00563F] p-6 text-white shadow-sm sm:p-8">

                        <div className="mb-6">
                            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#7BCB3A]">
                                Our Impact
                            </p>

                            <h2 className="mt-2 font-serif text-3xl">
                                Together, We Make a Difference
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 gap-3">

                            {statistics.map((stat) => (
                                <article
                                    key={stat.id}
                                    className="rounded-2xl bg-white/10 p-5 transition hover:bg-white/15"
                                >
                                    <span className="text-2xl">
                                        {stat.icon}
                                    </span>

                                    <p className="mt-5 font-serif text-3xl">
                                        {stat.value}
                                    </p>

                                    <p className="mt-1 text-sm text-white/60">
                                        {stat.label}
                                    </p>
                                </article>
                            ))}

                        </div>
                    </section>

                </div>

                {/* ================= EMPTY MISSION STATE ================= */}

                {/*
          Use this instead of the main mission card when there is
          no active mission.

          Example:

          <section className="rounded-[2rem] bg-white p-10 text-center">
            <h2 className="font-serif text-3xl">
              No active mission
            </h2>

            <p className="mx-auto mt-3 max-w-md text-[#123D32]/60">
              There isn't an active community mission right now.
              Check back soon for the next opportunity to make an impact.
            </p>
          </section>
        */}

            </main>
        </div>
    );
}

export default Mission;