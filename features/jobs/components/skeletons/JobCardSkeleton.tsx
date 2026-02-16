export default function JobCardSkeleton() {
    return (
        <article
            className="relative flex flex-col justify-between items-start p-4 md:p-6 rounded-xl col-span-1 bg-neutral-50 border border-neutral-200"
            aria-hidden="true"
        >
            <div className="flex flex-col justify-start items-start gap-y-4 mb-4 w-full">
                <div className="flex flex-row justify-between items-start w-full">
                    <div className="w-[48px] h-[48px] min-w-[48px] rounded-md overflow-hidden">
                        <div className="h-full w-full rounded-md skeleton" />
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start gap-y-2 w-full">
                    <div className="h-5 w-3/4 rounded-md skeleton" />
                    <div className="h-4 w-2/5 rounded-md skeleton" />
                </div>

                <div className="flex flex-wrap gap-2 w-full">
                    <div className="h-7 w-20 rounded-full skeleton" />
                    <div className="h-7 w-24 rounded-full skeleton" />
                    <div className="h-7 w-28 rounded-full skeleton" />
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <div className="h-4 w-full rounded-md skeleton" />
                    <div className="h-4 w-11/12 rounded-md skeleton" />
                    <div className="h-4 w-2/3 rounded-md skeleton" />
                </div>
            </div>

            <div className="flex justify-end items-center w-full mt-4">
                <div className="h-[40px] w-[100px] rounded-md skeleton max-md:w-full" />
            </div>
        </article>
    );
}

export function JobListSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 z-20 max-w-7xl mx-auto pt-6 md:pt-3 px-4 md:px-6">
            {Array.from({ length: 12 }).map((_, i) => (
                <JobCardSkeleton key={i} />
            ))}
        </div>
    );
}