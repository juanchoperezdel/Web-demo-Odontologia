import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

interface BeforeAfterProps {
    beforeImage: string;
    afterImage: string;
    className?: string;
}

export function BeforeAfter({ beforeImage, afterImage, className }: BeforeAfterProps) {
    return (
        <ReactCompareSlider
            className={className || "rounded-[32px] overflow-hidden shadow-2xl"}
            itemOne={<ReactCompareSliderImage src={beforeImage} alt="Antes" />}
            itemTwo={<ReactCompareSliderImage src={afterImage} alt="Después" />}
        />
    );
}
