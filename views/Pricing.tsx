import React from 'react';
import { View } from '../types';

interface PricingProps {
    onNavigate: (view: View) => void; // Placeholder if needed in future
}

const Pricing: React.FC<PricingProps> = () => {
    return (
        <div className="animate-fade-in min-h-screen pt-20 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-brand-accent font-bold tracking-wider uppercase">Plans</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">커피 두 잔 값으로 갖는<br />평생의 경쟁력</h1>
                    <p className="text-xl text-brand-gray">"복잡한 약정은 없습니다. 언제든 해지 가능합니다."</p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
                    {/* Starter Plan */}
                    <div className="flex-1 glass-card rounded-3xl p-8 border border-slate-700 flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white">Starter (Free Trial)</h3>
                            <div className="text-4xl font-bold text-brand-accent mt-4">0원 <span className="text-lg text-gray-400 font-normal">/ 7일</span></div>
                            <p className="text-sm text-gray-400 mt-2">카드 등록 없이 즉시 시작</p>
                        </div>
                        <ul className="space-y-4 text-gray-300 mb-8 flex-1">
                            <li className="flex items-center gap-3"><i className="fas fa-check text-brand-accent"></i> 7일 무제한 대화 이용</li>
                            <li className="flex items-center gap-3"><i className="fas fa-check text-brand-accent"></i> AI 정밀 레벨 테스트</li>
                            <li className="flex items-center gap-3"><i className="fas fa-check text-brand-accent"></i> 기본 시나리오 10종 체험</li>
                        </ul>
                        <button className="w-full bg-transparent border border-brand-accent text-brand-accent font-bold py-3 rounded-xl hover:bg-brand-accent hover:text-slate-900 transition">
                            무료로 시작하기
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="flex-1 bg-slate-800 rounded-3xl p-8 border-2 border-brand-primary relative flex flex-col transform md:-translate-y-4 shadow-2xl shadow-indigo-500/20">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                            BEST VALUE
                        </div>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white">Pro Unlimited</h3>
                            <div className="text-4xl font-bold text-white mt-4">19,900원 <span className="text-lg text-gray-400 font-normal">/ 월</span></div>
                            <p className="text-sm text-gray-400 mt-2">타사 전화영어 대비 90% 저렴</p>
                        </div>
                        <ul className="space-y-4 text-gray-300 mb-8 flex-1">
                            <li className="flex items-center gap-3"><i className="fas fa-check text-brand-primary"></i> <strong>무제한</strong> AI 대화 & 피드백</li>
                            <li className="flex items-center gap-3"><i className="fas fa-check text-brand-primary"></i> 500+ 전 시나리오 잠금 해제</li>
                            <li className="flex items-center gap-3"><i className="fas fa-check text-brand-primary"></i> 심화 피드백 리포트 & 단어장</li>
                            <li className="flex items-center gap-3"><i className="fas fa-check text-brand-primary"></i> 오프라인 모드 지원</li>
                        </ul>
                        <button className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl hover:bg-indigo-500 transition shadow-lg">
                            지금 가입하고 혜택 받기
                        </button>
                    </div>
                </div>

                <div className="mt-16 p-8 glass-card rounded-2xl max-w-4xl mx-auto text-center">
                    <h4 className="text-xl font-bold text-white mb-4">왜 FluencyFlow인가요?</h4>
                    <div className="flex items-center justify-center gap-4 text-gray-300">
                        <span>전화영어 (월 20만원)</span>
                        <div className="flex-1 h-2 bg-slate-700 rounded-full mx-2 relative">
                            <div className="absolute top-0 left-0 h-full bg-red-500 w-full rounded-full opacity-50"></div>
                        </div>
                    </div>
                        <div className="flex items-center justify-center gap-4 text-white font-bold mt-4">
                        <span className="text-brand-accent">FluencyFlow (월 1.9만원)</span>
                        <div className="flex-1 h-4 bg-slate-700 rounded-full mx-2 relative">
                            <div className="absolute top-0 left-0 h-full bg-brand-accent w-1/10 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">압도적인 가성비로 무제한 학습하세요.</p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;