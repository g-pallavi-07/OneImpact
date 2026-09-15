function NGOSkeleton() {
    return (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                    key={item}
                    className="animate-pulse rounded-[1.75rem] bg-white p-5"
                >
                    <div className="h-16 w-16 rounded-2xl bg-[#123D32]/10" />

                    <div className="mt-5 h-7 w-3/4 rounded bg-[#123D32]/10" />

                    <div className="mt-4 h-16 rounded bg-[#123D32]/10" />

                    <div className="mt-5 h-4 w-1/2 rounded bg-[#123D32]/10" />

                    <div className="mt-6 h-10 rounded-full bg-[#123D32]/10" />
                </div>
            ))}
        </div>
    );
}

export default NGOSkeleton;