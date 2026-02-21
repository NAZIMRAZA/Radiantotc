import React, { useState, useEffect } from 'react';

const REVIEWS = [
    { name: "Aarav M.", location: "Mumbai, MH", text: "Fastest UPI settlement I've experienced. Node released USDT in 4 mins.", rating: 5 },
    { name: "Deepika K.", location: "Bangalore, KA", text: "FIU registration is the main reason I moved my volume here.", rating: 5 },
    { name: "Vikram J.", location: "Pune, MH", text: "Competitive spreads. Direct INR pipeline that actually works.", rating: 5 },
    { name: "Rohan S.", location: "Delhi, DL", text: "Excellent customer support. Escrow release is instantly fast!", rating: 5 },
    { name: "Priya N.", location: "Chennai, TN", text: "Finally, a compliant platform with high liquidity for bulk trading.", rating: 5 },
    { name: "Karan B.", location: "Ahmedabad, GJ", text: "Zero slippage and instant bank transfers. Highly recommended.", rating: 5 },
    { name: "Neha R.", location: "Hyderabad, TS", text: "The compliance measures give me peace of mind when holding funds.", rating: 5 }
];

const FeedbackSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full relative overflow-hidden flex justify-center h-48 md:h-56">
            <div className="w-full max-w-lg relative h-full">
                {REVIEWS.map((review, i) => (
                    <div
                        key={i}
                        className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out ${i === currentIndex ? 'opacity-100 translate-x-0 z-10' : i < currentIndex ? 'opacity-0 -translate-x-full z-0' : 'opacity-0 translate-x-full z-0'}`}
                    >
                        <div className="glass-card p-6 md:p-8 rounded-2xl md:rounded-[2.5rem] border-white/5 border-cyan-500/30 transition-all flex flex-col justify-between h-full bg-black/40">
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-black font-orbitron text-cyan-400">
                                            {review.name[0]}
                                        </div>
                                        <div>
                                            <p className="text-[11px] md:text-sm font-black text-white font-orbitron">{review.name}</p>
                                            <p className="text-[8px] md:text-[10px] text-gray-600 font-bold uppercase">{review.location}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[11px] md:text-sm text-gray-500 font-medium leading-relaxed italic min-h-[4rem]">
                                    "{review.text}"
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedbackSlider;
