import React from 'react';
import { View } from '../types';
import { USER_1, USER_2, COMMUNITY_BG } from '../IMAGE/assets';

interface ReviewsProps {
    onNavigate: (view: View) => void;
}

const Reviews: React.FC<ReviewsProps> = ({ onNavigate }) => {
    return (
        <div className="animate-fade-in min-h-screen pt-20 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-yellow-400 font-bold tracking-wider uppercase">Hall of Fame</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">FluencyFlow가 만든<br />변화의 기록들</h1>
                    <p className="text-xl text-brand-gray">"15만 명의 선택, 다음 주인공은 당신입니다."</p>
                </div>

                {/* Success Stories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <SuccessCard 
                        img={USER_1}
                        name="박지민 (29세)"
                        sub="해외 영업직 합격"
                        review="영어 면접만 보면 떨어졌는데, AI랑 모의 면접을 50번 넘게 연습했어요. 실제 면접장에 갔는데 질문이 AI랑 연습했던 거랑 똑같아서 소름 돋았습니다. 덕분에 구글 코리아 최종 합격했습니다!"
                        dayStart="Day 1"
                        dayEnd="Day 90 (Native Level)"
                        progress={75}
                        color="accent"
                    />

                    <SuccessCard 
                        img={USER_2}
                        name="최현우 (25세)"
                        sub="워킹홀리데이 매니저 승진"
                        review="처음엔 주문도 못 받았는데, 매일 퇴근하고 시나리오 모드로 연습하니까 현지인 농담까지 알아듣게 됐어요. 3개월 만에 매니저로 승진했습니다."
                        dayStart="Day 1"
                        dayEnd="Day 60 (Advanced)"
                        progress={80}
                        color="primary"
                    />
                </div>

                {/* Community CTA */}
                <div className="bg-gradient-to-r from-brand-primary to-indigo-900 rounded-3xl p-10 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-4">Challenge Board</h3>
                        <p className="text-indigo-100 mb-8">매일 5천 명이 학습 인증을 올리고 서로 응원합니다. 혼자가 아닙니다.</p>
                        <button 
                            onClick={() => onNavigate(View.PRICING)}
                            className="bg-white text-brand-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition"
                        >
                            나도 성공 스토리 만들기
                        </button>
                    </div>
                    <img src={COMMUNITY_BG} alt="Community" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
                </div>
            </div>
        </div>
    );
};

interface SuccessCardProps {
    img: string;
    name: string;
    sub: string;
    review: string;
    dayStart: string;
    dayEnd: string;
    progress: number;
    color: 'primary' | 'accent';
}

const SuccessCard: React.FC<SuccessCardProps> = ({ img, name, sub, review, dayStart, dayEnd, progress, color }) => {
    const borderColor = color === 'primary' ? 'border-brand-primary' : 'border-brand-accent';
    const barColor = color === 'primary' ? 'bg-brand-primary' : 'bg-brand-accent';

    return (
        <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
                <img src={img} alt={name} className={`w-16 h-16 rounded-full object-cover border-2 ${borderColor}`} />
                <div>
                    <h4 className="text-xl font-bold text-white">{name}</h4>
                    <p className="text-sm text-brand-gray">{sub}</p>
                </div>
            </div>
            <p className="text-gray-300 italic mb-6">"{review}"</p>
            <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-xs text-brand-gray mb-2">Before & After Audio</p>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className={`h-full ${barColor}`} style={{ width: `${progress}%` }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>{dayStart}</span>
                    <span>{dayEnd}</span>
                </div>
            </div>
        </div>
    );
}

export default Reviews;