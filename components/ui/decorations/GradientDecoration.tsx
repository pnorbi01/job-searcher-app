import gradientDecoration from "@/assets/images/footer/footer-image.png";
import type { GradientDecoration } from "@/components/ui/decorations/types";
import Image from "next/image";

export default function GradientDecoration({ className }: GradientDecoration) {
    return (
        <div
            className={`absolute left-1/2 -translate-x-1/2 -z-10 pointer-events-none ${className}`}
            style={{ width: 1440, height: 960 }}
        >
            <Image
                src={gradientDecoration}
                alt="Gradient decoration"
                fill
                priority
                className="object-cover"
                sizes="1440px"
            />
        </div>
    );
}