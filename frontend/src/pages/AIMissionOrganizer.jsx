import { useState } from "react";

// Replace these with your actual component paths
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const suggestedPrompts = [
    "Organize a tree plantation drive",
    "Plan a cleanliness campaign",
    "Food distribution event",
    "Blood donation camp",
];

const dummyAIResponse = {
    title: "Community Tree Plantation Drive",
    description:
        "A community-led tree plantation event focused on increasing green cover in the local area while encouraging residents to participate in environmental action.",
    objectives: [
        "Plant 100 trees in the selected community area",
        "Engage local residents in environmental activities",
        "Create awareness about maintaining newly planted trees",
    ],
    volunteers: "25–30 volunteers",
    materials: [
        "100 saplings",
        "Gardening tools",
        "Water containers",
        "Gloves",
        "Compost and soil",
    ],
    time: "3–4 hours",
    locations: [
        "Community parks",
        "School grounds",
        "Residential green spaces",
    ],
};

function AIMissionOrganizer() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [isThinking, setIsThinking] = useState(false);
    const [error, setError] = useState(false);

    const generateAIResponse = (prompt) => {
        // Dummy AI response.
        // Replace this function with your API request later.

        return {
            role: "ai",
            text: "I've created a mission plan based on your idea.",
            timestamp: getTime(),
            mission: dummyAIResponse,
        };
    };

    const getTime = () => {
        return new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const sendMessage = async (message = input) => {
        const trimmedMessage = message.trim();

        if (!trimmedMessage || isThinking) {
            return;
        }

        setError(false);

        const userMessage = {
            role: "user",
            text: trimmedMessage,
            timestamp: getTime(),
        };

        setMessages((previous) => [...previous, userMessage]);
        setInput("");
        setIsThinking(true);

        // Simulate AI thinking time
        setTimeout(() => {
            try {
                const aiMessage = generateAIResponse(trimmedMessage);

                setMessages((previous) => [...previous, aiMessage]);
            } catch (error) {
                setError(true);
            } finally {
                setIsThinking(false);
            }
        }, 1500);
    };

    const handlePromptClick = (prompt) => {
        sendMessage(prompt);
    };

    const retryLastMessage = () => {
        const lastUserMessage = [...messages]
            .reverse()
            .find((message) => message.role === "user");

        if (lastUserMessage) {
            sendMessage(lastUserMessage.text);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8F1DF] text-[#123D32] mt-18">
            <Navbar />

            <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">

                {/* ================= HEADER ================= */}

                <section className="mb-8">

                    <h1 className="mt-2 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                        Turn an idea into an impact mission.
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-[#123D32]/65 sm:text-lg">
                        Tell us what you want to achieve and let the AI help you turn
                        your idea into an actionable community mission.
                    </p>
                </section>

                {/* ================= CHAT CONTAINER ================= */}

                <section className="overflow-hidden rounded-[2rem] bg-white shadow-sm">

                    {/* Chat header */}

                    <div className="flex items-center justify-between border-b border-[#123D32]/8 px-5 py-5 sm:px-7">
                        <div className="flex items-center gap-3">

                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00563F] text-xl text-white">
                                ✦
                            </div>

                            <div>
                                <h2 className="font-semibold">
                                    One Impact AI
                                </h2>

                                <div className="mt-1 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-[#7BCB3A]" />

                                    <span className="text-xs text-[#123D32]/50">
                                        Mission Organizer
                                    </span>
                                </div>
                            </div>

                        </div>

                        <span className="hidden text-xs text-[#123D32]/40 sm:block">
                            AI-powered planning
                        </span>
                    </div>

                    {/* ================= CHAT AREA ================= */}

                    <div className="grid lg:grid-cols-[1fr_340px]">

                        <div className="flex min-h-[650px] flex-col">

                            {/* Messages */}

                            <div className="flex-1 space-y-5 overflow-y-auto p-5 sm:p-7">

                                {/* Empty chat */}

                                {messages.length === 0 && (
                                    <div className="flex min-h-[450px] flex-col items-center justify-center px-4 text-center">

                                        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#00563F] text-2xl text-white">
                                            ✦
                                        </div>

                                        <h3 className="mt-6 font-serif text-3xl">
                                            What would you like to organize?
                                        </h3>

                                        <p className="mt-3 max-w-md text-sm leading-6 text-[#123D32]/55">
                                            Describe your community idea and I'll help you turn it
                                            into a structured mission plan.
                                        </p>

                                    </div>
                                )}

                                {/* Messages */}

                                {messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${message.role === "user"
                                                ? "justify-end"
                                                : "justify-start"
                                            }`}
                                    >
                                        <div
                                            className={`max-w-[85%] sm:max-w-[75%] ${message.role === "user"
                                                    ? "items-end"
                                                    : "items-start"
                                                }`}
                                        >

                                            <div
                                                className={`rounded-2xl px-5 py-4 ${message.role === "user"
                                                        ? "rounded-br-md bg-[#00563F] text-white"
                                                        : "rounded-bl-md bg-[#F8F1DF]"
                                                    }`}
                                            >
                                                <p className="text-sm leading-6">
                                                    {message.text}
                                                </p>
                                            </div>

                                            <p
                                                className={`mt-1.5 text-[11px] text-[#123D32]/35 ${message.role === "user"
                                                        ? "text-right"
                                                        : "text-left"
                                                    }`}
                                            >
                                                {message.timestamp}
                                            </p>

                                            {/* AI Mission Card */}

                                            {message.role === "ai" && message.mission && (
                                                <MissionResponseCard
                                                    mission={message.mission}
                                                />
                                            )}

                                        </div>
                                    </div>
                                ))}

                                {/* Thinking indicator */}

                                {isThinking && (
                                    <div className="flex justify-start">
                                        <div>
                                            <div className="rounded-2xl rounded-bl-md bg-[#F8F1DF] px-5 py-4">

                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm text-[#123D32]/60">
                                                        AI is thinking
                                                    </span>

                                                    <span className="flex gap-1">
                                                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#7BCB3A]" />
                                                        <span
                                                            className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#7BCB3A]"
                                                            style={{ animationDelay: "150ms" }}
                                                        />
                                                        <span
                                                            className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#7BCB3A]"
                                                            style={{ animationDelay: "300ms" }}
                                                        />
                                                    </span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Error */}

                                {error && (
                                    <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                                        <p className="font-semibold text-red-800">
                                            Failed to generate mission
                                        </p>

                                        <p className="mt-1 text-sm text-red-700/70">
                                            Something went wrong while creating your mission plan.
                                        </p>

                                        <button
                                            onClick={retryLastMessage}
                                            className="mt-4 rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800"
                                        >
                                            Try Again
                                        </button>
                                    </div>
                                )}

                            </div>

                            {/* ================= INPUT ================= */}

                            <div className="border-t border-[#123D32]/8 p-4 sm:p-5">

                                <div className="rounded-2xl border border-[#123D32]/10 bg-[#F8F1DF]/50 p-2 focus-within:border-[#7BCB3A]">

                                    <textarea
                                        value={input}
                                        onChange={(event) => setInput(event.target.value)}
                                        onKeyDown={(event) => {
                                            if (
                                                event.key === "Enter" &&
                                                !event.shiftKey
                                            ) {
                                                event.preventDefault();
                                                sendMessage();
                                            }
                                        }}
                                        placeholder="Describe the mission you want to organize..."
                                        rows={2}
                                        maxLength={500}
                                        className="w-full resize-none bg-transparent px-3 py-2 text-sm outline-none placeholder:text-[#123D32]/35"
                                    />

                                    <div className="flex items-center justify-between px-2 pb-1">

                                        <span className="text-xs text-[#123D32]/35">
                                            {input.length}/500
                                        </span>

                                        <button
                                            onClick={() => sendMessage()}
                                            disabled={!input.trim() || isThinking}
                                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7BCB3A] text-[#123D32] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
                                            aria-label="Send message"
                                        >
                                            ↑
                                        </button>

                                    </div>

                                </div>

                                <p className="mt-2 text-center text-[11px] text-[#123D32]/35">
                                    Press Enter to send · Shift + Enter for a new line
                                </p>

                            </div>

                        </div>

                        {/* ================= SUGGESTIONS ================= */}

                        <aside className="border-t border-[#123D32]/8 bg-[#F8F1DF]/45 p-5 lg:border-l lg:border-t-0 sm:p-7">

                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7BCB3A]">
                                Get Started
                            </p>

                            <h3 className="mt-2 font-serif text-2xl">
                                Try a prompt
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[#123D32]/55">
                                Not sure where to start? Choose an idea and customize it
                                through the conversation.
                            </p>

                            <div className="mt-6 space-y-3">

                                {suggestedPrompts.map((prompt) => (
                                    <button
                                        key={prompt}
                                        onClick={() => handlePromptClick(prompt)}
                                        disabled={isThinking}
                                        className="group w-full rounded-2xl border border-[#123D32]/10 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-[#7BCB3A] hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <div className="flex items-center justify-between gap-3">

                                            <span className="text-sm font-medium">
                                                {prompt}
                                            </span>

                                            <span className="text-lg text-[#7BCB3A] transition-transform group-hover:translate-x-1">
                                                →
                                            </span>

                                        </div>
                                    </button>
                                ))}

                            </div>

                            <div className="mt-8 rounded-2xl bg-[#00563F] p-5 text-white">
                                <p className="text-sm font-semibold">
                                    What the AI can help with
                                </p>

                                <ul className="mt-3 space-y-2 text-xs leading-5 text-white/65">
                                    <li>• Define mission objectives</li>
                                    <li>• Estimate volunteer requirements</li>
                                    <li>• Create a materials checklist</li>
                                    <li>• Suggest suitable locations</li>
                                    <li>• Estimate the time required</li>
                                </ul>
                            </div>

                        </aside>

                    </div>
                </section>

            </main>
        </div>
    );
}


/* =========================================================
   AI MISSION RESPONSE CARD
========================================================= */

function MissionResponseCard({ mission }) {
    return (
        <div className="mt-4 overflow-hidden rounded-2xl border border-[#123D32]/10 bg-white shadow-sm">

            {/* Header */}

            <div className="bg-[#00563F] p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7BCB3A]">
                    Suggested Mission
                </p>

                <h3 className="mt-2 font-serif text-2xl">
                    {mission.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/70">
                    {mission.description}
                </p>
            </div>

            <div className="space-y-6 p-5">

                {/* Objectives */}

                <MissionDetail
                    title="Objectives"
                    content={
                        <ul className="space-y-2">
                            {mission.objectives.map((objective) => (
                                <li
                                    key={objective}
                                    className="flex gap-2 text-sm leading-5 text-[#123D32]/70"
                                >
                                    <span className="text-[#7BCB3A]">✓</span>
                                    <span>{objective}</span>
                                </li>
                            ))}
                        </ul>
                    }
                />

                {/* Volunteers */}

                <MissionDetail
                    title="Volunteers Required"
                    content={
                        <p className="text-sm text-[#123D32]/70">
                            {mission.volunteers}
                        </p>
                    }
                />

                {/* Materials */}

                <MissionDetail
                    title="Materials Needed"
                    content={
                        <div className="flex flex-wrap gap-2">
                            {mission.materials.map((material) => (
                                <span
                                    key={material}
                                    className="rounded-full bg-[#F8F1DF] px-3 py-1.5 text-xs text-[#123D32]/70"
                                >
                                    {material}
                                </span>
                            ))}
                        </div>
                    }
                />

                {/* Time */}

                <MissionDetail
                    title="Estimated Time"
                    content={
                        <p className="text-sm text-[#123D32]/70">
                            {mission.time}
                        </p>
                    }
                />

                {/* Locations */}

                <MissionDetail
                    title="Location Suggestions"
                    content={
                        <div className="space-y-2">
                            {mission.locations.map((location) => (
                                <div
                                    key={location}
                                    className="flex items-center gap-2 text-sm text-[#123D32]/70"
                                >
                                    <span className="text-[#7BCB3A]">📍</span>
                                    {location}
                                </div>
                            ))}
                        </div>
                    }
                />

                <Button>
                    Create This Mission
                </Button>

            </div>
        </div>
    );
}


/* =========================================================
   REUSABLE DETAIL
========================================================= */

function MissionDetail({ title, content }) {
    return (
        <div>
            <h4 className="mb-2 text-sm font-semibold">
                {title}
            </h4>

            {content}
        </div>
    );
}

export default AIMissionOrganizer;