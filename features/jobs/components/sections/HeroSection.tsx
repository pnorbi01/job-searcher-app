import { ArrowDownIcon } from "@/assets/icons/Icons";
import heroImage from "@/assets/images/hero/hero-image.png";
import LinkButtonDefault from "@/components/ui/buttons/LinkButtonDefault";
import Eyebrow from "@/components/ui/eyebrows/Eyebrow";
import PageTitle from "@/components/ui/titles/PageTitle";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="flex flex-col justify-start items-start pt-16 lg:pt-section pb-8 gap-y-12 lg:gap-y-16 w-full max-w-7xl mx-auto z-20 px-4 md:px-6">
            <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-end gap-section-title-gap-lg lg:gap-16 w-full">
                <div className="flex flex-col justify-start items-center lg:items-start gap-y-section-title-gap-lg lg:gap-y-section-title-gap-xl flex-1">
                    <Eyebrow />
                    <PageTitle />
                </div>
                <div className="flex flex-col justify-end items-center lg:items-start gap-8 lg:gap-6 min-md:min-w-md max-w-md">
                    <p className="max-lg:hidden tracking-[0] text-muted-foreground leading-8 text-lg font-normal">Work on global IT projects from anywhere.</p>
                    <p className="min-lg:hidden tracking-[0] text-muted-foreground leading-8 text-lg font-normal text-center">Follow with one or two sentences that expand on your value proposition and focus on key benefits.</p>
                    <LinkButtonDefault
                        title="Discover jobs"
                        href="#jobs"
                        ariaLabel="Discover jobs"
                        showIcon={true}
                        icon={<ArrowDownIcon />}
                        iconAlignment="right"
                    />
                </div>
            </div>
            <Image src={heroImage} loading="eager" alt="Hero Image" width={1280} height={720} className="aspect-video rounded-xl" />
        </section>
    );
}
