import { useState } from "react";

// Replace these with your actual component paths
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const initialProfile = {
    name: "Aarav Sharma",
    email: "aarav@example.com",
    phone: "+91 98765 43210",
    location: "New Delhi",
    bio: "Passionate about creating positive change in my community through volunteering and local action.",
    image: "https://placehold.co/200x200/00563F/FFFFFF?text=AS",
};

const statistics = [
    {
        label: "Missions Joined",
        value: "18",
        icon: "◎",
    },
    {
        label: "Issues Reported",
        value: "12",
        icon: "!",
    },
    {
        label: "Hours Volunteered",
        value: "86",
        icon: "◷",
    },
    {
        label: "Points Earned",
        value: "2,450",
        icon: "✦",
    },
];

const badges = [
    {
        id: 1,
        name: "First Step",
        description: "Joined your first mission",
        icon: "🌱",
    },
    {
        id: 2,
        name: "Community Helper",
        description: "Completed 5 missions",
        icon: "🤝",
    },
    {
        id: 3,
        name: "Eco Champion",
        description: "Participated in 3 environmental missions",
        icon: "🌿",
    },
    {
        id: 4,
        name: "Problem Solver",
        description: "Reported 10 community issues",
        icon: "💡",
    },
    {
        id: 5,
        name: "10 Hour Club",
        description: "Contributed more than 10 hours",
        icon: "⏱️",
    },
    {
        id: 6,
        name: "Community Leader",
        description: "Earned 2,000 impact points",
        icon: "⭐",
    },
];

const missions = [
    {
        id: 1,
        name: "Green Our Community",
        date: "23 Aug 2026",
        status: "Upcoming",
        category: "Environment",
    },
    {
        id: 2,
        name: "Community Cleanliness Drive",
        date: "10 Aug 2026",
        status: "Completed",
        category: "Environment",
    },
    {
        id: 3,
        name: "Food Distribution Drive",
        date: "02 Aug 2026",
        status: "Completed",
        category: "Food & Hunger",
    },
    {
        id: 4,
        name: "Community Health Awareness",
        date: "25 Jul 2026",
        status: "Completed",
        category: "Health",
    },
];

const activities = [
    {
        id: 1,
        type: "mission",
        title: "Joined Green Our Community",
        description: "You joined this week's community mission.",
        date: "Today · 10:32 AM",
        icon: "◎",
    },
    {
        id: 2,
        type: "badge",
        title: "Earned Eco Champion",
        description: "You completed your third environmental mission.",
        date: "18 Aug 2026 · 6:20 PM",
        icon: "✦",
    },
    {
        id: 3,
        type: "issue",
        title: "Reported an issue",
        description: "You reported an overflowing waste collection point.",
        date: "15 Aug 2026 · 2:15 PM",
        icon: "!",
    },
    {
        id: 4,
        type: "mission",
        title: "Completed Community Cleanliness Drive",
        description: "You contributed 4 hours to the mission.",
        date: "10 Aug 2026 · 5:40 PM",
        icon: "✓",
    },
];

function Profile() {
    const [profile, setProfile] = useState(initialProfile);
    const [isEditing, setIsEditing] = useState(false);

    const [editForm, setEditForm] = useState(initialProfile);

    const [loading, setLoading] = useState(false);

    const handleEdit = () => {
        setEditForm(profile);
        setIsEditing(true);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setEditForm((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSave = (event) => {
        event.preventDefault();

        setProfile(editForm);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditForm(profile);
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-[#F8F1DF] text-[#123D32]">
            <Navbar />

            <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">

                {/* ================= PAGE HEADER ================= */}

                <section className="mb-8 mt-18">

                    <div className="mt-2 flex flex-col justify-between gap-5 md:flex-row md:items-end">

                        <div>
                            <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                My Profile
                            </h1>

                            <p className="mt-4 max-w-2xl text-base leading-7 text-[#123D32]/65 sm:text-lg">
                                Track your contributions, achievements, and the difference
                                you've made in your community.
                            </p>
                        </div>

                        <button
                            onClick={handleEdit}
                            className="w-fit rounded-full border border-[#00563F] px-5 py-3 text-sm font-semibold text-[#00563F] transition hover:bg-[#00563F] hover:text-white"
                        >
                            Edit Profile
                        </button>

                    </div>
                </section>

                {/* ================= PROFILE HEADER ================= */}

                <section className="mb-6 overflow-hidden rounded-[2rem] bg-[#00563F] text-white shadow-sm">

                    <div className="relative p-6 sm:p-8 lg:p-10">

                        {/* Decorative circle */}

                        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#7BCB3A]/10" />

                        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">

                            <img
                                src={profile.image}
                                alt={profile.name}
                                className="h-28 w-28 rounded-[2rem] border-4 border-white/10 object-cover"
                            />

                            <div className="min-w-0">

                                <div className="flex flex-wrap items-center gap-3">

                                    <h2 className="font-serif text-3xl sm:text-4xl">
                                        {profile.name}
                                    </h2>

                                    <span className="rounded-full bg-[#7BCB3A] px-3 py-1 text-xs font-semibold text-[#123D32]">
                                        Volunteer
                                    </span>

                                </div>

                                <p className="mt-2 text-sm text-white/60">
                                    {profile.email}
                                </p>

                                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/65">
                                    <span>📞 {profile.phone}</span>
                                    <span>📍 {profile.location}</span>
                                </div>

                                {profile.bio && (
                                    <p className="mt-5 max-w-2xl text-sm leading-6 text-white/70">
                                        {profile.bio}
                                    </p>
                                )}

                            </div>

                        </div>
                    </div>

                </section>

                {/* ================= STATISTICS ================= */}

                <section className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">

                    {statistics.map((stat) => (
                        <article
                            key={stat.label}
                            className="rounded-[1.5rem] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
                        >
                            <div className="flex items-start justify-between">

                                <div>
                                    <p className="text-3xl font-semibold sm:text-4xl">
                                        {stat.value}
                                    </p>

                                    <p className="mt-2 text-xs leading-5 text-[#123D32]/50 sm:text-sm">
                                        {stat.label}
                                    </p>
                                </div>

                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8F1DF] text-lg text-[#00563F]">
                                    {stat.icon}
                                </span>

                            </div>
                        </article>
                    ))}

                </section>

                {/* ================= MAIN CONTENT ================= */}

                <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">

                    {/* LEFT COLUMN */}

                    <div className="space-y-6">

                        {/* ================= JOINED MISSIONS ================= */}

                        <section className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">

                            <div className="flex items-end justify-between gap-4">

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7BCB3A]">
                                        Your Participation
                                    </p>

                                    <h2 className="mt-2 font-serif text-3xl">
                                        Joined Missions
                                    </h2>
                                </div>

                                <span className="text-sm text-[#123D32]/40">
                                    {missions.length} missions
                                </span>

                            </div>

                            {missions.length > 0 ? (
                                <div className="mt-6 space-y-3">

                                    {missions.map((mission) => (
                                        <MissionItem
                                            key={mission.id}
                                            mission={mission}
                                        />
                                    ))}

                                </div>
                            ) : (
                                <EmptyState
                                    title="No missions yet"
                                    description="Join your first community mission to start making an impact."
                                />
                            )}

                        </section>

                        {/* ================= ACTIVITY ================= */}

                        <section className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7BCB3A]">
                                    Recent Activity
                                </p>

                                <h2 className="mt-2 font-serif text-3xl">
                                    Activity History
                                </h2>
                            </div>

                            <div className="mt-7">

                                {activities.length > 0 ? (
                                    <div className="relative space-y-7">

                                        {/* Timeline line */}

                                        <div className="absolute bottom-5 left-5 top-5 w-px bg-[#123D32]/10" />

                                        {activities.map((activity) => (
                                            <ActivityItem
                                                key={activity.id}
                                                activity={activity}
                                            />
                                        ))}

                                    </div>
                                ) : (
                                    <EmptyState
                                        title="No activity yet"
                                        description="Your community activity will appear here."
                                    />
                                )}

                            </div>

                        </section>

                    </div>

                    {/* RIGHT COLUMN */}

                    <div className="space-y-6">

                        {/* ================= BADGES ================= */}

                        <section className="rounded-[2rem] bg-[#00563F] p-6 text-white shadow-sm sm:p-8">

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7BCB3A]">
                                    Achievements
                                </p>

                                <h2 className="mt-2 font-serif text-3xl">
                                    Your Badges
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-white/60">
                                    Keep contributing to unlock more achievements.
                                </p>
                            </div>

                            {badges.length > 0 ? (
                                <div className="mt-6 grid grid-cols-2 gap-3">

                                    {badges.map((badge) => (
                                        <article
                                            key={badge.id}
                                            className="rounded-2xl bg-white/10 p-4 transition hover:bg-white/15"
                                        >
                                            <div className="text-2xl">
                                                {badge.icon}
                                            </div>

                                            <h3 className="mt-4 text-sm font-semibold">
                                                {badge.name}
                                            </h3>

                                            <p className="mt-1 text-xs leading-5 text-white/45">
                                                {badge.description}
                                            </p>
                                        </article>
                                    ))}

                                </div>
                            ) : (
                                <div className="mt-6 rounded-2xl bg-white/10 p-6 text-center">
                                    <p className="font-semibold">
                                        No achievements yet
                                    </p>

                                    <p className="mt-2 text-sm text-white/50">
                                        Complete missions to earn your first badge.
                                    </p>
                                </div>
                            )}

                        </section>

                        {/* ================= IMPACT SUMMARY ================= */}

                        <section className="rounded-[2rem] bg-[#7BCB3A] p-6 text-[#123D32] shadow-sm sm:p-8">

                            <p className="text-xs font-semibold uppercase tracking-[0.15em]">
                                Impact Summary
                            </p>

                            <h2 className="mt-3 font-serif text-3xl">
                                You're making a difference.
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-[#123D32]/65">
                                Every mission, report, and hour you contribute helps your
                                community move forward.
                            </p>

                            <div className="mt-6 rounded-2xl bg-white/45 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-[#123D32]/50">
                                    Current Level
                                </p>

                                <div className="mt-2 flex items-end justify-between">
                                    <p className="font-serif text-2xl">
                                        Community Helper
                                    </p>

                                    <p className="text-sm font-semibold">
                                        2,450 pts
                                    </p>
                                </div>

                                <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#123D32]/10">
                                    <div
                                        className="h-full rounded-full bg-[#00563F]"
                                        style={{ width: "72%" }}
                                    />
                                </div>

                                <p className="mt-2 text-xs text-[#123D32]/50">
                                    550 points to the next level
                                </p>
                            </div>

                        </section>

                    </div>

                </div>

            </main>

            {/* ================= EDIT PROFILE MODAL ================= */}

            {isEditing && (
                <EditProfileModal
                    profile={editForm}
                    onChange={handleChange}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            )}

            {/* ================= LOADING EXAMPLE ================= */}

            {loading && (
                <div className="pointer-events-none fixed inset-0 z-[60] bg-[#F8F1DF]">
                    <ProfileSkeleton />
                </div>
            )}

        </div>
    );
}


/* =========================================================
   MISSION ITEM
========================================================= */

function MissionItem({ mission }) {
    const isUpcoming = mission.status === "Upcoming";

    return (
        <article className="flex flex-col gap-4 rounded-2xl border border-[#123D32]/8 p-4 transition hover:border-[#7BCB3A]/50 sm:flex-row sm:items-center">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F8F1DF] text-lg text-[#00563F]">
                ◎
            </div>

            <div className="min-w-0 flex-1">

                <div className="flex flex-wrap items-center gap-2">

                    <h3 className="font-semibold">
                        {mission.name}
                    </h3>

                    <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${isUpcoming
                                ? "bg-[#7BCB3A]/20 text-[#4D8A19]"
                                : "bg-[#123D32]/8 text-[#123D32]/50"
                            }`}
                    >
                        {mission.status}
                    </span>

                </div>

                <div className="mt-2 flex flex-wrap gap-3 text-xs text-[#123D32]/45">
                    <span>{mission.date}</span>
                    <span>•</span>
                    <span>{mission.category}</span>
                </div>

            </div>

            <button className="shrink-0 text-sm font-semibold text-[#00563F] hover:underline">
                View →
            </button>

        </article>
    );
}


/* =========================================================
   ACTIVITY ITEM
========================================================= */

function ActivityItem({ activity }) {
    return (
        <article className="relative flex gap-4">

            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8F1DF] text-sm font-semibold text-[#00563F]">
                {activity.icon}
            </div>

            <div className="min-w-0 pt-0.5">

                <h3 className="text-sm font-semibold">
                    {activity.title}
                </h3>

                <p className="mt-1 text-sm leading-5 text-[#123D32]/55">
                    {activity.description}
                </p>

                <p className="mt-2 text-xs text-[#123D32]/35">
                    {activity.date}
                </p>

            </div>

        </article>
    );
}


/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyState({ title, description }) {
    return (
        <div className="mt-6 rounded-2xl bg-[#F8F1DF] px-6 py-10 text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#00563F]">
                ◎
            </div>

            <h3 className="mt-4 font-semibold">
                {title}
            </h3>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#123D32]/50">
                {description}
            </p>

        </div>
    );
}


/* =========================================================
   EDIT PROFILE MODAL
========================================================= */

function EditProfileModal({
    profile,
    onChange,
    onSave,
    onCancel,
}) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-[#123D32]/50 p-0 backdrop-blur-sm sm:items-center sm:p-5"
            onClick={onCancel}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-[2rem] bg-[#F8F1DF] shadow-xl sm:rounded-[2rem]"
            >

                {/* Header */}

                <div className="flex items-center justify-between border-b border-[#123D32]/8 p-6 sm:p-8">

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7BCB3A]">
                            Account
                        </p>

                        <h2 className="mt-1 font-serif text-3xl">
                            Edit Profile
                        </h2>
                    </div>

                    <button
                        onClick={onCancel}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-[#123D32]/60"
                        aria-label="Close"
                    >
                        ×
                    </button>

                </div>

                {/* Form */}

                <form
                    onSubmit={onSave}
                    className="space-y-5 p-6 sm:p-8"
                >

                    {/* Profile picture */}

                    <div className="flex items-center gap-4">

                        <img
                            src={profile.image}
                            alt={profile.name}
                            className="h-20 w-20 rounded-2xl object-cover"
                        />

                        <div>
                            <button
                                type="button"
                                className="rounded-full border border-[#00563F] px-4 py-2 text-sm font-semibold text-[#00563F] transition hover:bg-[#00563F] hover:text-white"
                            >
                                Change Picture
                            </button>

                            <p className="mt-2 text-xs text-[#123D32]/40">
                                JPG or PNG · Max 5MB
                            </p>
                        </div>

                    </div>

                    {/* Name */}

                    <FormField
                        label="Name"
                        name="name"
                        value={profile.name}
                        onChange={onChange}
                    />

                    {/* Phone */}

                    <FormField
                        label="Phone"
                        name="phone"
                        value={profile.phone}
                        onChange={onChange}
                    />

                    {/* Location */}

                    <FormField
                        label="Location"
                        name="location"
                        value={profile.location}
                        onChange={onChange}
                    />

                    {/* Email — disabled */}

                    <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#123D32]/45">
                            Email
                        </label>

                        <input
                            value={profile.email}
                            disabled
                            className="h-12 w-full rounded-xl border border-[#123D32]/8 bg-white/60 px-4 text-sm text-[#123D32]/40 outline-none"
                        />

                        <p className="mt-1.5 text-xs text-[#123D32]/35">
                            Email cannot be changed here.
                        </p>
                    </div>

                    {/* Bio */}

                    <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#123D32]/45">
                            Bio
                        </label>

                        <textarea
                            name="bio"
                            value={profile.bio}
                            onChange={onChange}
                            rows={4}
                            maxLength={300}
                            placeholder="Tell the community a little about yourself..."
                            className="w-full resize-none rounded-xl border border-[#123D32]/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#7BCB3A]"
                        />

                        <p className="mt-1 text-right text-xs text-[#123D32]/35">
                            {profile.bio.length}/300
                        </p>
                    </div>

                    {/* Actions */}

                    <div className="flex flex-col-reverse gap-3 border-t border-[#123D32]/8 pt-5 sm:flex-row sm:justify-end">

                        <button
                            type="button"
                            onClick={onCancel}
                            className="rounded-full border border-[#123D32]/15 px-6 py-3 text-sm font-semibold transition hover:bg-white"
                        >
                            Cancel
                        </button>

                        <Button type="submit">
                            Save Changes
                        </Button>

                    </div>

                </form>

            </div>
        </div>
    );
}


/* =========================================================
   FORM FIELD
========================================================= */

function FormField({
    label,
    name,
    value,
    onChange,
}) {
    return (
        <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#123D32]/45">
                {label}
            </label>

            <input
                name={name}
                value={value}
                onChange={onChange}
                className="h-12 w-full rounded-xl border border-[#123D32]/10 bg-white px-4 text-sm outline-none transition focus:border-[#7BCB3A]"
            />
        </div>
    );
}


/* =========================================================
   PROFILE SKELETON
========================================================= */

function ProfileSkeleton() {
    return (
        <div className="mx-auto max-w-7xl animate-pulse px-5 py-10 sm:px-8 lg:px-10">

            <div className="h-12 w-64 rounded-lg bg-[#123D32]/10" />

            <div className="mt-8 rounded-[2rem] bg-white p-8">

                <div className="flex items-center gap-5">
                    <div className="h-28 w-28 rounded-[2rem] bg-[#123D32]/10" />

                    <div className="space-y-3">
                        <div className="h-8 w-56 rounded bg-[#123D32]/10" />
                        <div className="h-4 w-40 rounded bg-[#123D32]/10" />
                        <div className="h-4 w-64 rounded bg-[#123D32]/10" />
                    </div>
                </div>

            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                    <div
                        key={item}
                        className="h-32 rounded-[1.5rem] bg-white"
                    />
                ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="h-96 rounded-[2rem] bg-white" />
                <div className="h-96 rounded-[2rem] bg-white" />
            </div>

        </div>
    );
}

export default Profile;