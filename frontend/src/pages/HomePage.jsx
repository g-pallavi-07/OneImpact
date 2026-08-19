import React from "react";
import { Link } from "react-router-dom";

// Reuse your existing components
import Navbar from "../components/Navbar";
import Button from "../components/Button";
// Logo is already used by your Navbar, so we don't need to render it separately.

const stats = [
    {
        label: "Total Reports",
        value: "24",
        description: "Issues reported",
        icon: "report",
    },
    {
        label: "Missions Joined",
        value: "12",
        description: "Community missions",
        icon: "mission",
    },
    {
        label: "Points",
        value: "1,840",
        description: "Impact points earned",
        icon: "points",
    },
    {
        label: "Issues Solved",
        value: "18",
        description: "Problems resolved",
        icon: "check",
    },
];

const quickActions = [
    {
        title: "Report an Issue",
        description: "Spot a problem? Let your community know.",
        link: "/report",
        icon: "report",
    },
    {
        title: "Join a Mission",
        description: "Take action and make a difference.",
        link: "/missions",
        icon: "mission",
    },
    {
        title: "Explore NGOs",
        description: "Find organizations working near you.",
        link: "/ngos",
        icon: "ngo",
    },
];

const leaderboard = [
    {
        rank: 1,
        name: "Ananya Sharma",
        points: "3,240",
        badge: "Community Champion",
        initials: "AS",
    },
    {
        rank: 2,
        name: "Rahul Verma",
        points: "2,890",
        badge: "Change Maker",
        initials: "RV",
    },
    {
        rank: 3,
        name: "Meera Kapoor",
        points: "2,450",
        badge: "Volunteer",
        initials: "MK",
    },
    {
        rank: 4,
        name: "Arjun Rao",
        points: "2,120",
        badge: "Contributor",
        initials: "AR",
    },
];

const feedPosts = [
    {
        id: 1,
        name: "Priya Menon",
        initials: "PM",
        date: "2 hours ago",
        text: "Our neighborhood cleanup mission is underway! 20 volunteers joined us this morning.",
        image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 2,
        name: "Karthik Reddy",
        initials: "KR",
        date: "5 hours ago",
        text: "We planted 50 new trees around the community park today. Small actions can create lasting change.",
        image:
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 3,
        name: "Sneha Patel",
        initials: "SP",
        date: "Yesterday",
        text: "Thank you to everyone who contributed to this week's donation drive.",
        image:
            "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=80",
    },
];

/* -------------------------------------------------
   Small reusable icon component
------------------------------------------------- */

function Icon({ type, size = 22 }) {
    const common = {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
    };

    switch (type) {
        case "report":
            return (
                <svg {...common}>
                    <path d="M12 3L3.5 7.5v5.8c0 4.2 3.5 6.7 8.5 7.7 5-1 8.5-3.5 8.5-7.7V7.5L12 3z" />
                    <path d="M12 8v4" />
                    <path d="M12 15h.01" />
                </svg>
            );

        case "mission":
            return (
                <svg {...common}>
                    <path d="M12 3v18" />
                    <path d="M5 5h13l-2.5 4L18 13H5z" />
                </svg>
            );

        case "ngo":
            return (
                <svg {...common}>
                    <path d="M3 21h18" />
                    <path d="M5 21V9l7-5 7 5v12" />
                    <path d="M9 21v-5h6v5" />
                    <path d="M9 10h.01M15 10h.01M9 13h.01M15 13h.01" />
                </svg>
            );

        case "points":
            return (
                <svg {...common}>
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 7v10" />
                    <path d="M15 9.5c-.7-.7-1.7-1-3-1-1.6 0-2.7.8-2.7 2s1 1.8 2.7 2c1.7.2 2.7.8 2.7 2s-1.1 2-2.7 2c-1.3 0-2.3-.3-3-1" />
                </svg>
            );

        case "check":
            return (
                <svg {...common}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="m8 12 2.5 2.5L16 9" />
                </svg>
            );

        case "arrow":
            return (
                <svg {...common}>
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                </svg>
            );

        case "users":
            return (
                <svg {...common}>
                    <path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" />
                    <circle cx="9.5" cy="7.5" r="3.5" />
                    <path d="M16 11a3.5 3.5 0 1 0 0-7" />
                    <path d="M21 20v-1.5a4 4 0 0 0-3-3.9" />
                </svg>
            );

        default:
            return null;
    }
}

/* -------------------------------------------------
   Homepage
------------------------------------------------- */

export default function HomePage() {
    // Change these to true later when you want to test
    // loading and empty states.
    const isFeedLoading = false;
    const isLeaderboardEmpty = false;

    return (
        <div className="min-h-screen bg-[#F8F1DE] text-[#12352A] mt-18">
            {/* Existing Navbar */}
            <Navbar />

            <main>
                {/* =========================================
            HERO / WELCOME
        ========================================= */}
                <section className="border-b border-[#005A3C]/10 bg-[#F8F1DE]">
                    <div className="mx-auto max-w-7xl px-5 pb-10 pt-10 sm:px-8 lg:px-10">
                        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                            <div>

                                <h1 className="font-serif text-4xl font-bold leading-tight text-[#12352A] sm:text-5xl">
                                    Make an impact,
                                    <br />
                                    <span className="text-[#4E9B42]">
                                        one action at a time.
                                    </span>
                                </h1>

                                <p className="mt-4 max-w-xl text-base leading-7 text-[#12352A]/65 sm:text-lg">
                                    Discover local issues, join community missions, and work
                                    together to create meaningful change.
                                </p>
                            </div>

                            {/* Profile */}
                            <Link
                                to="/profile"
                                className="flex w-fit items-center gap-3 rounded-2xl border border-[#005A3C]/10 bg-white/70 px-4 py-3 transition hover:-translate-y-0.5 hover:bg-white"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#005A3C] font-semibold text-white">
                                    PG
                                </div>

                                <div>
                                    <p className="text-sm font-semibold">Pallavi</p>
                                    <p className="text-xs text-[#12352A]/55">
                                        Community Contributor
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* =========================================
            QUICK ACTIONS
        ========================================= */}
                <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
                    <div className="mb-5">
                        <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                            What do you want to do?
                        </h2>
                        <p className="mt-1 text-sm text-[#12352A]/55">
                            Choose an action and get involved in your community.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {quickActions.map((action) => (
                            <Link
                                key={action.title}
                                to={action.link}
                                className="group rounded-3xl border border-[#005A3C]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5F3D8] text-[#005A3C] transition group-hover:bg-[#7ED63F]">
                                    <Icon type={action.icon} />
                                </div>

                                <div className="flex items-end justify-between gap-4">
                                    <div>
                                        <h3 className="font-semibold text-[#12352A]">
                                            {action.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-[#12352A]/55">
                                            {action.description}
                                        </p>
                                    </div>

                                    <div className="text-[#4E9B42] transition group-hover:translate-x-1">
                                        <Icon type="arrow" size={20} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* =========================================
            STATISTICS
        ========================================= */}
                <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8 lg:px-10">
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-3xl border border-[#005A3C]/10 bg-white p-5 shadow-sm"
                            >
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E5F3D8] text-[#005A3C]">
                                    <Icon type={stat.icon} size={19} />
                                </div>

                                <p className="text-2xl font-bold text-[#12352A] sm:text-3xl">
                                    {stat.value}
                                </p>

                                <p className="mt-1 text-sm font-semibold">
                                    {stat.label}
                                </p>

                                <p className="mt-1 text-xs text-[#12352A]/45">
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* =========================================
            MAIN CONTENT GRID
        ========================================= */}
                <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:px-10">
                    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
                        {/* =====================================
                LEFT COLUMN
            ===================================== */}
                        <div className="space-y-8">
                            {/* Weekly Issue */}
                            <div>
                                <div className="mb-4 flex items-end justify-between">
                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-wider text-[#4E9B42]">
                                            This Week
                                        </p>

                                        <h2 className="mt-1 font-serif text-2xl font-bold">
                                            Community Mission
                                        </h2>
                                    </div>

                                    <Link
                                        to="/missions"
                                        className="hidden text-sm font-semibold text-[#4E9B42] hover:underline sm:block"
                                    >
                                        View all missions
                                    </Link>
                                </div>

                                <article className="overflow-hidden rounded-[2rem] border border-[#005A3C]/10 bg-white shadow-sm">
                                    <div className="relative h-64 overflow-hidden bg-[#DCEBD0] sm:h-72">
                                        <img
                                            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=80"
                                            alt="Community members working together"
                                            className="h-full w-full object-cover transition duration-700 hover:scale-105"
                                        />

                                        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#005A3C]">
                                            Weekly Mission
                                        </div>
                                    </div>

                                    <div className="p-6 sm:p-8">
                                        <h3 className="font-serif text-2xl font-bold">
                                            Clean Up Our Community
                                        </h3>

                                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#12352A]/60 sm:text-base">
                                            Join local volunteers in cleaning public spaces,
                                            collecting waste, and creating a healthier environment
                                            for everyone in the neighborhood.
                                        </p>

                                        <div className="mt-6 flex flex-wrap items-center gap-4">
                                            {/* Reusing your existing Button */}
                                            <Button>
                                                View Details
                                            </Button>

                                            <div className="flex items-center gap-2 text-sm text-[#12352A]/50">
                                                <Icon type="users" size={18} />
                                                48 people joined
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            {/* ===================================
                  COMMUNITY FEED
              =================================== */}
                            <div>
                                <div className="mb-4 flex items-end justify-between">
                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-wider text-[#4E9B42]">
                                            Community
                                        </p>

                                        <h2 className="mt-1 font-serif text-2xl font-bold">
                                            Recent Activity
                                        </h2>
                                    </div>

                                    <Link
                                        to="/feed"
                                        className="hidden text-sm font-semibold text-[#4E9B42] hover:underline sm:block"
                                    >
                                        View feed
                                    </Link>
                                </div>

                                {isFeedLoading ? (
                                    <FeedSkeleton />
                                ) : feedPosts.length === 0 ? (
                                    <EmptyState
                                        title="No community activity yet"
                                        description="Be the first person to share an impact story."
                                    />
                                ) : (
                                    <div className="space-y-4">
                                        {feedPosts.map((post) => (
                                            <article
                                                key={post.id}
                                                className="overflow-hidden rounded-3xl border border-[#005A3C]/10 bg-white shadow-sm transition hover:shadow-md"
                                            >
                                                <div className="flex items-center gap-3 p-5 pb-4">
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DDEFD2] text-sm font-bold text-[#005A3C]">
                                                        {post.initials}
                                                    </div>

                                                    <div>
                                                        <p className="text-sm font-semibold">
                                                            {post.name}
                                                        </p>

                                                        <p className="text-xs text-[#12352A]/45">
                                                            {post.date}
                                                        </p>
                                                    </div>
                                                </div>

                                                <img
                                                    src={post.image}
                                                    alt=""
                                                    className="h-56 w-full object-cover"
                                                />

                                                <p className="p-5 text-sm leading-6 text-[#12352A]/70">
                                                    {post.text}
                                                </p>
                                            </article>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* =====================================
                RIGHT COLUMN
            ===================================== */}
                        <aside>
                            <div className="sticky top-24">
                                <div className="mb-4">
                                    <p className="text-sm font-semibold uppercase tracking-wider text-[#4E9B42]">
                                        Community Leaders
                                    </p>

                                    <h2 className="mt-1 font-serif text-2xl font-bold">
                                        Leaderboard
                                    </h2>
                                </div>

                                {isLeaderboardEmpty ? (
                                    <EmptyState
                                        title="No leaderboard data"
                                        description="Points will appear here once community activity begins."
                                    />
                                ) : (
                                    <div className="overflow-hidden rounded-3xl border border-[#005A3C]/10 bg-white shadow-sm">
                                        <div className="p-5">
                                            {leaderboard.map((person, index) => (
                                                <div
                                                    key={person.name}
                                                    className={`flex items-center gap-3 py-4 ${index !== leaderboard.length - 1
                                                            ? "border-b border-[#005A3C]/10"
                                                            : ""
                                                        }`}
                                                >
                                                    {/* Rank */}
                                                    <div className="w-7 text-center">
                                                        <span
                                                            className={`text-sm font-bold ${person.rank <= 3
                                                                    ? "text-[#4E9B42]"
                                                                    : "text-[#12352A]/40"
                                                                }`}
                                                        >
                                                            #{person.rank}
                                                        </span>
                                                    </div>

                                                    {/* Avatar */}
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E5F3D8] text-xs font-bold text-[#005A3C]">
                                                        {person.initials}
                                                    </div>

                                                    {/* Name */}
                                                    <div className="min-w-0 flex-1">
                                                        <p className="truncate text-sm font-semibold">
                                                            {person.name}
                                                        </p>

                                                        <p className="mt-0.5 truncate text-xs text-[#12352A]/45">
                                                            {person.badge}
                                                        </p>
                                                    </div>

                                                    {/* Points */}
                                                    <div className="text-right">
                                                        <p className="text-sm font-bold text-[#005A3C]">
                                                            {person.points}
                                                        </p>

                                                        <p className="text-[10px] uppercase tracking-wide text-[#12352A]/40">
                                                            points
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            to="/leaderboard"
                                            className="block border-t border-[#005A3C]/10 bg-[#F8F1DE]/60 px-5 py-4 text-center text-sm font-semibold text-[#4E9B42] transition hover:bg-[#E5F3D8]"
                                        >
                                            View full leaderboard →
                                        </Link>
                                    </div>
                                )}

                                {/* Small CTA underneath leaderboard */}
                                <div className="mt-6 overflow-hidden rounded-3xl bg-[#005A3C] p-6 text-white">
                                    <p className="text-sm font-semibold uppercase tracking-wider text-[#7ED63F]">
                                        Your Impact Matters
                                    </p>

                                    <h3 className="mt-2 font-serif text-2xl font-bold">
                                        Every action counts.
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-white/70">
                                        Report an issue, join a mission, or help someone in your
                                        community today.
                                    </p>

                                    <Link
                                        to="/missions"
                                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#7ED63F] px-5 py-3 text-sm font-bold text-[#12352A] transition hover:-translate-y-0.5 hover:bg-[#8BE64B]"
                                    >
                                        Explore Missions
                                        <Icon type="arrow" size={17} />
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </main>
        </div>
    );
}

/* -------------------------------------------------
   Loading skeleton
------------------------------------------------- */

function FeedSkeleton() {
    return (
        <div className="space-y-4">
            {[1, 2].map((item) => (
                <div
                    key={item}
                    className="animate-pulse overflow-hidden rounded-3xl border border-[#005A3C]/10 bg-white"
                >
                    <div className="h-16 bg-[#DDE9D7]" />
                    <div className="h-56 bg-[#E8EFE3]" />
                    <div className="space-y-3 p-5">
                        <div className="h-3 w-full rounded bg-[#E1E9DD]" />
                        <div className="h-3 w-4/5 rounded bg-[#E1E9DD]" />
                    </div>
                </div>
            ))}
        </div>
    );
}

/* -------------------------------------------------
   Empty state
------------------------------------------------- */

function EmptyState({ title, description }) {
    return (
        <div className="rounded-3xl border border-dashed border-[#005A3C]/20 bg-white p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#E5F3D8] text-[#005A3C]">
                <Icon type="users" size={20} />
            </div>

            <h3 className="mt-4 font-semibold">{title}</h3>

            <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-[#12352A]/50">
                {description}
            </p>
        </div>
    );
}