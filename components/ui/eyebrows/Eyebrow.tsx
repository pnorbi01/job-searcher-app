export default function Eyebrow() {
    return (
        <div className="flex flex-row justify-center items-center h-[28px] min-h-[28px] rounded-full border border-base-border shadow-xs bg-base-white px-3 gap-1.5">
            <div className="w-[6px] h-[6px] rounded-full bg-dot-green-500" />
            <span className="font-medium text-sm leading-lh-sm tracking-[0]">
                <span className="text-tw-blue-700">Remote jobs</span>{" "}
                <span className="!text-muted-foreground">&middot; 200+ new jobs today</span>
            </span>
        </div>
    );
}
