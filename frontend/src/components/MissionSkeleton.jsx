function MissionSkeleton() {
    return (
        <div className="animate-pulse space-y-6">

            {/* Mission card */}

            <div className="grid overflow-hidden rounded-[2rem] bg-white lg:grid-cols-2">
                <div className="min-h-[350px] bg-[#123D32]/10" />

                <div className="space-y-5 p-8">
                    <div className="h-5 w-32 rounded-full bg-[#123D32]/10" />

                    <div className="h-12 w-3/4 rounded-lg bg-[#123D32]/10" />

                    <div className="h-20 rounded-lg bg-[#123D32]/10" />

                    <div className="h-3 rounded-full bg-[#123D32]/10" />

                    <div className="h-12 w-36 rounded-full bg-[#123D32]/10" />
                </div>
            </div>

            {/* Timeline */}

            <div className="rounded-[2rem] bg-white p-8">
                <div className="mb-8 h-8 w-56 rounded-lg bg-[#123D32]/10" />

                <div className="grid gap-6 md:grid-cols-4">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="space-y-3">
                            <div className="mx-auto h-10 w-10 rounded-full bg-[#123D32]/10" />
                            <div className="h-5 rounded bg-[#123D32]/10" />
                            <div className="h-12 rounded bg-[#123D32]/10" />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default MissionSkeleton;