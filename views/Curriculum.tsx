import React from 'react';
import { View } from '../types';
import { CAREER_MODE, LIFESTYLE_MODE, ROLEPLAY_UI } from '../IMAGE/assets';

interface CurriculumProps {
    onNavigate: (view: View) => void;
}

const Curriculum: React.FC<CurriculumProps> = ({ onNavigate }) => {
    return (
        <div className="animate-fade-in min-h-screen pt-20 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-brand-accent font-bold tracking-wider uppercase">Scenario Mode</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">당신의 인생을 바꿀<br />500가지 순간들</h1>
                    <p className="text-xl text-brand-gray">"교과서 영어는 이제 그만. 내일 당장 써먹을 수 있는 '진짜' 영어를 만나세요."</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Career Card */}
                    <div className="glass-card rounded-2xl overflow-hidden group">
                        <div className="h-64 overflow-hidden">
                            <img src={CAREER_MODE} alt="Career" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <i className="fas fa-building text-brand-primary"></i> For Career
                            </h3>
                            <ul className="space-y-3 text-brand-gray mb-6">
                                <ListItem text="영어 면접 시뮬레이션 & 압박 질문 대처" />
                                <ListItem text="비즈니스 이메일 작성 및 회화" />
                                <ListItem text="연봉 협상 및 컨퍼런스 콜 스몰토크" />
                            </ul>
                        </div>
                    </div>

                    {/* Lifestyle Card */}
                    <div className="glass-card rounded-2xl overflow-hidden group">
                        <div className="h-64 overflow-hidden">
                            <img src={LIFESTYLE_MODE} alt="Lifestyle" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <i className="fas fa-plane text-brand-accent"></i> For Lifestyle
                            </h3>
                            <ul className="space-y-3 text-brand-gray mb-6">
                                <ListItem text="힙한 현지 카페 주문법 & 스몰토크" />
                                <ListItem text="외국인 친구 사귀기 & 넷플릭스 표현" />
                                <ListItem text="여행 위급 상황 대처 및 숙소 예약" />
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Role Play Section */}
                <div className="bg-slate-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold text-white mb-4">Role-Play Mode</h3>
                        <p className="text-brand-gray text-lg mb-6">
                            AI가 면접관, 까다로운 바리스타, 직장 상사 등 다양한 페르소나로 완벽하게 빙의합니다. 
                            상황에 맞는 톤앤매너와 리액션을 경험하며 실전 감각을 극대화하세요.
                        </p>
                        <button 
                            onClick={() => onNavigate(View.PRICING)}
                            className="inline-flex items-center text-brand-accent font-bold hover:text-white transition"
                        >
                            관심 시나리오 선택하고 시작하기 <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                    <div className="flex-1 w-full">
                        <img src={ROLEPLAY_UI} alt="Role Play UI" className="rounded-xl shadow-lg w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ListItem: React.FC<{text: string}> = ({ text }) => (
    <li className="flex items-start gap-2">
        <i className="fas fa-check text-brand-accent mt-1"></i> {text}
    </li>
);

export default Curriculum;