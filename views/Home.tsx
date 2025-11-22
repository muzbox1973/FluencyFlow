import React from 'react';
import { View } from '../types';
import { HERO_BG, SOLUTION_IMG } from '../IMAGE/assets';

interface HomeProps {
    onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    return (
        <div className="animate-fade-in">
            {/* 1. Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src={HERO_BG} 
                        alt="Hero Background" 
                        className="w-full h-full object-cover opacity-40" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8 pt-20">
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
                        영어, 공부하지 말고 <span className="text-brand-primary">대화하세요.</span><br />
                        24시간 잠들지 않는 <span className="gradient-text">나만의 AI 튜터</span>
                    </h1>
                    <p className="text-xl text-brand-gray mb-10 max-w-3xl mx-auto">
                        학원비 0원, 시공간 제약 0. 두려움 없이 내 방에서 시작하는 완벽한 프리토킹.<br />
                        지금 7일 무료 체험으로 당신의 커리어를 업그레이드하세요.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button 
                            onClick={() => onNavigate(View.PRICING)}
                            className="bg-brand-accent text-slate-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-lime-400 transform hover:scale-105 transition shadow-lg shadow-lime-500/20"
                        >
                            7일 무료 체험 시작하기
                        </button>
                        <button 
                            onClick={() => onNavigate(View.TECHNOLOGY)}
                            className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white/10 transition"
                        >
                            AI 레벨 테스트 받기
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Problem & Solution */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Problem */}
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-1 bg-red-500/10 text-red-400 rounded-full text-sm font-semibold mb-2">The Pain Point</div>
                            <h2 className="text-3xl font-bold text-white">"틀릴까 봐 입도 뻥긋 못하는 두려움,<br />언제까지 '공부'만 하실 건가요?"</h2>
                            <p className="text-brand-gray text-lg">비싼 전화 영어, 예약의 번거로움, 그리고 낯선 사람 앞에서의 긴장감. 영어 말하기가 두려운 것은 당신의 잘못이 아닙니다. 환경의 문제입니다.</p>
                        </div>
                        {/* Solution */}
                        <div className="glass-card p-8 rounded-2xl border-l-4 border-brand-accent relative overflow-hidden group">
                            <div className="absolute inset-0 bg-brand-primary/10 transform group-hover:scale-105 transition duration-700"></div>
                            <div className="relative z-10">
                                <div className="inline-block px-4 py-1 bg-brand-accent/10 text-brand-accent rounded-full text-sm font-semibold mb-4">The Solution</div>
                                <h3 className="text-2xl font-bold text-white mb-4">FluencyFlow는 기다려주지 않습니다.<br />먼저 말을 겁니다.</h3>
                                <p className="text-gray-300 mb-6">사람보다 더 사람 같은 AI가 실시간으로 문법과 발음을 0.1초 만에 교정해 줍니다. 부끄러움은 사라지고 자신감만 남습니다.</p>
                                <img src={SOLUTION_IMG} alt="Solution Visualization" className="rounded-lg shadow-lg w-full object-cover h-48" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Key Features */}
            <section className="py-24 bg-slate-800 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Why FluencyFlow?</h2>
                        <p className="text-brand-gray">단순한 챗봇이 아닙니다. 언어 습득의 과학입니다.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard 
                            icon="fa-wave-square"
                            title="초정밀 발음 교정"
                            desc="원어민의 억양, 강세, 리듬까지 분석하여 시각적인 피드백을 제공합니다."
                        />
                        <FeatureCard 
                            icon="fa-brain"
                            title="맥락을 이해하는 대화"
                            desc="단순 패턴 반복이 아닙니다. 당신의 관심사와 대화 흐름을 기억하고 끊임없이 새로운 주제를 던집니다."
                        />
                         <FeatureCard 
                            icon="fa-briefcase"
                            title="실전 비즈니스/여행 시나리오"
                            desc="면접, 연봉 협상, 여행지 주문 등 20대에게 꼭 필요한 500+가지 실전 상황을 시뮬레이션합니다."
                        />
                    </div>
                </div>
            </section>

            {/* 4. Social Proof */}
            <section className="py-24 bg-brand-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-12">이미 15만 명이 경험하고 있습니다</h2>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-b border-slate-800 pb-12">
                        <StatItem value="150,000+" label="누적 가입자" />
                        <StatItem value="500,000+" label="일일 대화 생성" />
                        <StatItem value="Level 2↑" label="평균 토익스피킹 상승" />
                    </div>

                    {/* Reviews Preview */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ReviewCard 
                            text="오픽 AL 달성했어요! 학원 갈 시간 없는 직장인에게 최고입니다. 새벽에도 부담 없이 말할 수 있어서 너무 좋아요."
                            author="김OO, 27세 마케터"
                        />
                        <ReviewCard 
                            text="AI라 부끄럽지 않아서 영어가 술술 나와요. 면접 준비할 때 꼬리 질문 기능이 진짜 대박입니다."
                            author="이OO, 24세 취준생"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard: React.FC<{icon: string, title: string, desc: string}> = ({ icon, title, desc }) => (
    <div className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition duration-300">
        <div className="w-14 h-14 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
            <i className={`fas ${icon} text-2xl text-white`}></i>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-brand-gray">{desc}</p>
    </div>
);

const StatItem: React.FC<{value: string, label: string}> = ({ value, label }) => (
    <div>
        <div className="text-4xl font-bold text-brand-accent mb-2">{value}</div>
        <div className="text-brand-gray">{label}</div>
    </div>
);

const ReviewCard: React.FC<{text: string, author: string}> = ({ text, author }) => (
    <div className="bg-slate-800 p-6 rounded-xl text-left">
        <div className="flex text-yellow-400 mb-4">
            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
        </div>
        <p className="text-white mb-4">"{text}"</p>
        <p className="text-sm text-brand-gray font-bold">- {author}</p>
    </div>
);

export default Home;