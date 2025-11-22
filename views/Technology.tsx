import React from 'react';
import { View } from '../types';
import { TECH_VOICE, TECH_ADAPTIVE, TECH_FEEDBACK } from '../IMAGE/assets';

interface TechnologyProps {
    onNavigate: (view: View) => void;
}

const Technology: React.FC<TechnologyProps> = ({ onNavigate }) => {
    return (
        <div className="animate-fade-in min-h-screen pt-20 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-brand-primary font-bold tracking-wider uppercase">The Engine</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">기술이 언어를 만났을 때,<br />Fluency Engine™</h1>
                    <p className="text-xl text-brand-gray">"사람보다 더 섬세하게, 튜터보다 더 정확하게."</p>
                </div>

                {/* Tech Content Blocks */}
                <div className="space-y-24">
                    {/* Block 1 */}
                    <TechBlock 
                        img={TECH_VOICE}
                        number={1}
                        title="Deep Learning Voice Recognition"
                        desc="사용자의 미세한 떨림과 발음 습관까지 캐치합니다. 수백만 시간의 원어민 음성 데이터를 학습한 AI가 당신의 발음을 음소 단위로 분석하여 즉각적인 교정 데이터를 생성합니다."
                    />

                    {/* Block 2 - Reversed */}
                    <TechBlock 
                        img={TECH_ADAPTIVE}
                        number={2}
                        title="Adaptive Learning Algorithm"
                        desc="사용자가 자주 틀리는 문법 패턴을 AI가 학습하여, 해당 패턴을 완벽히 익힐 때까지 반복 훈련시키는 '개인화 커리큘럼'을 생성합니다. 당신만을 위한 맞춤형 교과서가 매일 새로 쓰여집니다."
                        reverse
                    />

                    {/* Block 3 */}
                    <TechBlock 
                        img={TECH_FEEDBACK}
                        number={3}
                        title="Real-time Feedback Loop"
                        desc="말하는 즉시 화면에 교정 스크립트가 나타납니다. 더 자연스러운 표현, 더 정확한 문법을 0.1초 만에 제안받으세요. 피드백의 속도가 실력 향상의 속도를 결정합니다."
                    />
                </div>

                <div className="mt-24 text-center">
                    <button 
                        onClick={() => onNavigate(View.PRICING)}
                        className="bg-brand-accent text-slate-900 font-bold py-4 px-12 rounded-full text-lg hover:bg-lime-400 transition shadow-lg"
                    >
                        내 발음 분석해보기 (무료)
                    </button>
                </div>
            </div>
        </div>
    );
};

const TechBlock: React.FC<{img: string, number: number, title: string, desc: string, reverse?: boolean}> = ({ img, number, title, desc, reverse }) => (
    <div className={`flex flex-col md:flex-row${reverse ? '-reverse' : ''} items-center gap-12`}>
        <div className="flex-1">
            <img src={img} alt={title} className="rounded-2xl shadow-2xl border border-slate-700 w-full h-auto" />
        </div>
        <div className="flex-1 space-y-6">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl">{number}</div>
            <h3 className="text-3xl font-bold text-white">{title}</h3>
            <p className="text-brand-gray text-lg leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default Technology;