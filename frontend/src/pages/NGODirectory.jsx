import { useMemo, useState } from "react";
// Replace these with your actual component paths
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const ngos = [
    {
        id: 1,
        name: "Green Earth Foundation",
        logo: "https://placehold.co/100x100/00563F/FFFFFF?text=GE",
        description:
            "Working with communities to improve green spaces, promote tree plantation, and create sustainable neighbourhoods.",
        category: "Environment",
        location: "New Delhi",
        cause: "Sustainability",
        rating: 4.8,
        phone: "+91 98765 43210",
        email: "hello@greenearth.example.org",
        website: "https://example.org",
        address: "24 Community Road, New Delhi, Delhi 110001",
        mission:
            "To build greener and more sustainable communities through local environmental action.",
        vision:
            "A future where every community actively protects and improves its environment.",
        canVolunteer: true,
    },
    {
        id: 2,
        name: "Learn For All",
        logo: "https://placehold.co/100x100/7BCB3A/123D32?text=LA",
        description:
            "Providing educational opportunities, learning resources, and mentorship to children from underserved communities.",
        category: "Education",
        location: "Dwarka",
        cause: "Child Education",
        rating: 4.7,
        phone: "+91 98765 12345",
        email: "contact@learnforall.example.org",
        website: "https://example.org",
        address: "12 Education Lane, Dwarka, New Delhi 110075",
        mission:
            "To make quality education and mentorship accessible to every child.",
        vision:
            "A society where every child has the opportunity to learn, grow, and succeed.",
        canVolunteer: true,
    },
    {
        id: 3,
        name: "Community Health Initiative",
        logo: "https://placehold.co/100x100/00563F/FFFFFF?text=CH",
        description:
            "Supporting community health through awareness programs, health camps, and access to essential resources.",
        category: "Health",
        location: "Rohini",
        cause: "Healthcare",
        rating: 4.6,
        phone: "+91 98111 22334",
        email: "info@chi.example.org",
        website: "https://example.org",
        address: "8 Health Avenue, Rohini, New Delhi 110085",
        mission:
            "To improve access to health information, preventive care, and community healthcare services.",
        vision:
            "Healthy and informed communities where essential healthcare is accessible to all.",
        canVolunteer: true,
    },
    {
        id: 4,
        name: "Food For Communities",
        logo: "https://placehold.co/100x100/F8F1DF/00563F?text=FC",
        description:
            "Organizing food distribution programs and working to reduce food insecurity in local communities.",
        category: "Food & Hunger",
        location: "Janakpuri",
        cause: "Food Security",
        rating: 4.5,
        phone: "+91 98999 55667",
        email: "connect@foodfor.example.org",
        website: "https://example.org",
        address: "41 Community Street, Janakpuri, New Delhi 110058",
        mission:
            "To ensure that vulnerable members of the community have access to nutritious food.",
        vision:
            "A community where no one has to go without a basic meal.",
        canVolunteer: true,
    },
    {
        id: 5,
        name: "Clean City Collective",
        logo: "https://placehold.co/100x100/7BCB3A/123D32?text=CC",
        description:
            "Mobilizing citizens to participate in cleanliness drives, waste collection, and responsible waste management.",
        category: "Environment",
        location: "Saket",
        cause: "Clean Communities",
        rating: 4.4,
        phone: "+91 97654 32109",
        email: "team@cleancity.example.org",
        website: "https://example.org",
        address: "19 Green Park Road, Saket, New Delhi 110017",
        mission:
            "To create cleaner neighbourhoods by making waste management a shared community responsibility.",
        vision:
            "Clean, healthy, and responsible communities powered by citizen participation.",
        canVolunteer: true,
    },
    {
        id: 6,
        name: "Care & Support Network",
        logo: "https://placehold.co/100x100/00563F/FFFFFF?text=CS",
        description:
            "Supporting vulnerable individuals and families through community outreach, resources, and social support.",
        category: "Community",
        location: "Vasant Kunj",
        cause: "Social Welfare",
        rating: 4.3,
        phone: "+91 98888 77665",
        email: "help@care-support.example.org",
        website: "https://example.org",
        address: "7 Community Centre, Vasant Kunj, New Delhi 110070",
        mission:
            "To connect vulnerable individuals with the resources and support they need.",
        vision:
            "A supportive community where everyone has the opportunity to live with dignity.",
        canVolunteer: false,
    },
];

const categories = [
    "All Categories",
    "Education",
    "Environment",
    "Health",
    "Food & Hunger",
    "Community",
];

const locations = [
    "All Locations",
    "New Delhi",
    "Dwarka",
    "Rohini",
    "Janakpuri",
    "Saket",
    "Vasant Kunj",
];

const causes = [
    "All Causes",
    "Sustainability",
    "Child Education",
    "Healthcare",
    "Food Security",
    "Clean Communities",
    "Social Welfare",
];

function NGODirectory() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All Categories");
    const [location, setLocation] = useState("All Locations");
    const [cause, setCause] = useState("All Causes");
    const [selectedNGO, setSelectedNGO] = useState(null);
    const [viewMode, setViewMode] = useState("grid");

    const filteredNGOs = useMemo(() => {
        return ngos.filter((ngo) => {
            const matchesSearch = ngo.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesCategory =
                category === "All Categories" ||
                ngo.category === category;

            const matchesLocation =
                location === "All Locations" ||
                ngo.location === location;

            const matchesCause =
                cause === "All Causes" ||
                ngo.cause === cause;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesLocation &&
                matchesCause
            );
        });
    }, [search, category, location, cause]);

    const clearFilters = () => {
        setSearch("");
        setCategory("All Categories");
        setLocation("All Locations");
        setCause("All Causes");
    };

    return (
        <div className="min-h-screen bg-[#F8F1DF] text-[#123D32] mt-18">
            <Navbar />

            <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">

                {/* ================= HEADER ================= */}

                <section className="mb-8">


                    <div className="mt-2 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                        <div>
                            <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                                Find an NGO
                            </h1>

                            <p className="mt-4 max-w-2xl text-base leading-7 text-[#123D32]/65 sm:text-lg">
                                Discover organizations working on causes that matter to
                                your community and find ways to contribute.
                            </p>
                        </div>

                        <div className="shrink-0 rounded-2xl bg-white px-5 py-4 shadow-sm">
                            <p className="text-2xl font-semibold">
                                {ngos.length}
                            </p>

                            <p className="text-xs text-[#123D32]/50">
                                Organizations listed
                            </p>
                        </div>
                    </div>
                </section>

                {/* ================= SEARCH + FILTERS ================= */}

                <section className="mb-8 rounded-[2rem] bg-white p-5 shadow-sm sm:p-7">

                    {/* Search */}

                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#123D32]/40">
                            ⌕
                        </span>

                        <input
                            type="text"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search NGOs by name..."
                            className="h-13 w-full rounded-2xl border border-[#123D32]/10 bg-[#F8F1DF]/50 pl-11 pr-4 text-sm outline-none transition focus:border-[#7BCB3A]"
                        />
                    </div>

                    {/* Filters */}

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">

                        <FilterSelect
                            label="Category"
                            value={category}
                            options={categories}
                            onChange={setCategory}
                        />

                        <FilterSelect
                            label="Location"
                            value={location}
                            options={locations}
                            onChange={setLocation}
                        />

                        <FilterSelect
                            label="Cause"
                            value={cause}
                            options={causes}
                            onChange={setCause}
                        />

                    </div>

                    {/* Filter bottom row */}

                    <div className="mt-5 flex flex-col justify-between gap-4 border-t border-[#123D32]/8 pt-5 sm:flex-row sm:items-center">

                        <p className="text-sm text-[#123D32]/50">
                            Showing{" "}
                            <span className="font-semibold text-[#123D32]">
                                {filteredNGOs.length}
                            </span>{" "}
                            organizations
                        </p>

                        <div className="flex items-center gap-3">

                            <button
                                onClick={clearFilters}
                                className="text-sm font-medium text-[#123D32]/55 transition hover:text-[#00563F]"
                            >
                                Clear filters
                            </button>

                            {/* View toggle */}

                            <div className="hidden rounded-xl bg-[#F8F1DF] p-1 sm:flex">

                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`rounded-lg px-3 py-2 text-sm ${viewMode === "grid"
                                            ? "bg-white font-semibold shadow-sm"
                                            : "text-[#123D32]/45"
                                        }`}
                                >
                                    ▦
                                </button>

                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`rounded-lg px-3 py-2 text-sm ${viewMode === "list"
                                            ? "bg-white font-semibold shadow-sm"
                                            : "text-[#123D32]/45"
                                        }`}
                                >
                                    ☰
                                </button>

                            </div>

                        </div>
                    </div>

                </section>

                {/* ================= NGO RESULTS ================= */}

                {filteredNGOs.length > 0 ? (

                    <div
                        className={
                            viewMode === "grid"
                                ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                                : "space-y-4"
                        }
                    >
                        {filteredNGOs.map((ngo) => (
                            <NGOCard
                                key={ngo.id}
                                ngo={ngo}
                                viewMode={viewMode}
                                onViewDetails={() => setSelectedNGO(ngo)}
                            />
                        ))}
                    </div>

                ) : (

                    /* ================= EMPTY STATE ================= */

                    <section className="flex min-h-[400px] items-center justify-center rounded-[2rem] bg-white px-6 text-center shadow-sm">

                        <div className="max-w-md">

                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F8F1DF] text-2xl">
                                ⌕
                            </div>

                            <h2 className="mt-6 font-serif text-3xl">
                                No NGOs found
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-[#123D32]/55">
                                We couldn't find any organizations matching your current
                                search and filters. Try changing your search criteria.
                            </p>

                            <button
                                onClick={clearFilters}
                                className="mt-6 rounded-full bg-[#7BCB3A] px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
                            >
                                Clear Filters
                            </button>

                        </div>

                    </section>
                )}

            </main>

            {/* ================= DETAILS MODAL ================= */}

            {selectedNGO && (
                <NGODetailsModal
                    ngo={selectedNGO}
                    onClose={() => setSelectedNGO(null)}
                />
            )}

        </div>
    );
}


/* =========================================================
   NGO CARD
========================================================= */

function NGOCard({ ngo, viewMode, onViewDetails }) {
    if (viewMode === "list") {
        return (
            <article className="flex flex-col gap-5 rounded-[1.5rem] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center">

                <img
                    src={ngo.logo}
                    alt={`${ngo.name} logo`}
                    className="h-20 w-20 shrink-0 rounded-2xl object-cover"
                />

                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-serif text-2xl">
                            {ngo.name}
                        </h2>

                        <span className="rounded-full bg-[#F8F1DF] px-3 py-1 text-xs font-medium">
                            {ngo.category}
                        </span>
                    </div>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#123D32]/60">
                        {ngo.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-[#123D32]/50">
                        <span>📍 {ngo.location}</span>
                        <span>★ {ngo.rating}</span>
                    </div>
                </div>

                <button
                    onClick={onViewDetails}
                    className="shrink-0 rounded-full bg-[#00563F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#004D3A]"
                >
                    View Details
                </button>

            </article>
        );
    }

    return (
        <article className="group flex flex-col rounded-[1.75rem] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">

            {/* Logo + category */}

            <div className="flex items-start justify-between gap-3">

                <img
                    src={ngo.logo}
                    alt={`${ngo.name} logo`}
                    className="h-16 w-16 rounded-2xl object-cover"
                />

                <span className="rounded-full bg-[#F8F1DF] px-3 py-1.5 text-xs font-medium">
                    {ngo.category}
                </span>

            </div>

            {/* Content */}

            <div className="mt-5 flex-1">

                <h2 className="font-serif text-2xl leading-tight">
                    {ngo.name}
                </h2>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#123D32]/60">
                    {ngo.description}
                </p>

                <div className="mt-5 space-y-2 text-xs text-[#123D32]/50">
                    <p>📍 {ngo.location}</p>
                    <p>🎯 {ngo.cause}</p>
                </div>

            </div>

            {/* Rating + action */}

            <div className="mt-6 flex items-center justify-between border-t border-[#123D32]/8 pt-5">

                <span className="text-sm font-medium">
                    <span className="text-[#7BCB3A]">★</span>{" "}
                    {ngo.rating}
                </span>

                <button
                    onClick={onViewDetails}
                    className="rounded-full bg-[#00563F] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#004D3A]"
                >
                    View Details
                </button>

            </div>

        </article>
    );
}


/* =========================================================
   FILTER SELECT
========================================================= */

function FilterSelect({ label, value, options, onChange }) {
    return (
        <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#123D32]/45">
                {label}
            </span>

            <select
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="h-11 w-full rounded-xl border border-[#123D32]/10 bg-[#F8F1DF]/50 px-3 text-sm outline-none transition focus:border-[#7BCB3A]"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    );
}


/* =========================================================
   NGO DETAILS MODAL
========================================================= */

function NGODetailsModal({ ngo, onClose }) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-[#123D32]/50 p-0 backdrop-blur-sm sm:items-center sm:p-5"
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[2rem] bg-[#F8F1DF] shadow-xl sm:rounded-[2rem]"
            >

                {/* Modal header */}

                <div className="relative bg-[#00563F] p-6 text-white sm:p-8">

                    <button
                        onClick={onClose}
                        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                        aria-label="Close"
                    >
                        ×
                    </button>

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                        <img
                            src={ngo.logo}
                            alt={`${ngo.name} logo`}
                            className="h-20 w-20 rounded-2xl bg-white object-cover"
                        />

                        <div>
                            <span className="rounded-full bg-[#7BCB3A] px-3 py-1 text-xs font-semibold text-[#123D32]">
                                {ngo.category}
                            </span>

                            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                                {ngo.name}
                            </h2>

                            <div className="mt-2 flex flex-wrap gap-4 text-sm text-white/60">
                                <span>📍 {ngo.location}</span>
                                <span>★ {ngo.rating}</span>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Modal content */}

                <div className="space-y-8 p-6 sm:p-8">

                    {/* Description */}

                    <section>
                        <h3 className="font-serif text-2xl">
                            About the organization
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#123D32]/65">
                            {ngo.description}
                        </p>

                        <p className="mt-3 text-sm leading-7 text-[#123D32]/65">
                            {ngo.mission}
                        </p>
                    </section>

                    {/* Mission / vision */}

                    <section className="grid gap-4 sm:grid-cols-2">

                        <div className="rounded-2xl bg-white p-5">
                            <p className="text-xs font-semibold uppercase tracking-wide text-[#7BCB3A]">
                                Mission
                            </p>

                            <p className="mt-3 text-sm leading-6 text-[#123D32]/65">
                                {ngo.mission}
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-5">
                            <p className="text-xs font-semibold uppercase tracking-wide text-[#7BCB3A]">
                                Vision
                            </p>

                            <p className="mt-3 text-sm leading-6 text-[#123D32]/65">
                                {ngo.vision}
                            </p>
                        </div>

                    </section>

                    {/* Contact */}

                    <section>
                        <h3 className="font-serif text-2xl">
                            Contact information
                        </h3>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">

                            <ContactItem
                                label="Phone"
                                value={ngo.phone}
                            />

                            <ContactItem
                                label="Email"
                                value={ngo.email}
                            />

                            <ContactItem
                                label="Address"
                                value={ngo.address}
                            />

                            <ContactItem
                                label="Website"
                                value={ngo.website}
                            />

                        </div>
                    </section>

                    {/* Actions */}

                    <section className="flex flex-col gap-3 border-t border-[#123D32]/8 pt-6 sm:flex-row">

                        {ngo.canVolunteer && (
                            <Button>
                                Volunteer / Connect
                            </Button>
                        )}

                        <a
                            href={ngo.website}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center rounded-full border border-[#00563F] px-6 py-3 text-sm font-semibold text-[#00563F] transition hover:bg-[#00563F] hover:text-white"
                        >
                            Visit Website
                        </a>

                        <a
                            href={`mailto:${ngo.email}`}
                            className="flex items-center justify-center rounded-full border border-[#123D32]/15 px-6 py-3 text-sm font-semibold transition hover:bg-white"
                        >
                            Contact NGO
                        </a>

                    </section>

                </div>
            </div>
        </div>
    );
}


/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({ label, value }) {
    return (
        <div className="rounded-2xl bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#123D32]/40">
                {label}
            </p>

            <p className="mt-2 break-words text-sm text-[#123D32]/70">
                {value}
            </p>
        </div>
    );
}

export default NGODirectory;