import React from 'react';
import { Heart, Clock, Target, Settings, AlertTriangle } from 'lucide-react';

const problems = [
	{
		icon: Heart,
		title: 'Too Awkward',
		desc: 'Asking customers directly feels pushy and uncomfortable',
		color: 'from-red-500 to-pink-500',
		bgColor: 'bg-red-50',
		textColor: 'text-red-600',
		borderColor: 'border-red-200',
	},
	{
		icon: Clock,
		title: 'Takes Time',
		desc: 'Staff waste time explaining instead of serving customers',
		color: 'from-orange-500 to-yellow-500',
		bgColor: 'bg-orange-50',
		textColor: 'text-orange-600',
		borderColor: 'border-orange-200',
	},
	{
		icon: Target,
		title: 'Customers Forget',
		desc: 'Even willing customers forget by the time they get home',
		color: 'from-purple-500 to-indigo-500',
		bgColor: 'bg-purple-50',
		textColor: 'text-purple-600',
		borderColor: 'border-purple-200',
	},
	{
		icon: Settings,
		title: 'Complex Process',
		desc: 'Finding and reviewing on Google is more complicated than it should be',
		color: 'from-blue-500 to-cyan-500',
		bgColor: 'bg-blue-50',
		textColor: 'text-blue-600',
		borderColor: 'border-blue-200',
	},
];

export const Problem: React.FC = () => {
	return (
		<section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-red-50 to-orange-50 relative overflow-hidden">
			{/* Enhanced Decorative Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{/* Large Gradient Orbs */}
				<div className="absolute -top-32 -left-32 w-96 h-96 bg-red-300/20 rounded-full blur-3xl animate-pulse"></div>
				<div
					className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: '1s' }}
				></div>
				<div
					className="absolute top-1/2 left-1/4 w-80 h-80 bg-pink-300/15 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: '2s' }}
				></div>
				<div
					className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-yellow-300/15 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: '1.5s' }}
				></div>

				{/* Floating Dots Pattern */}
				{/* <div
					className="absolute top-24 right-32 w-3 h-3 bg-red-400 rounded-full opacity-40 animate-bounce"
					style={{ animationDelay: '0s', animationDuration: '3s' }}
				></div>
				<div
					className="absolute top-40 right-48 w-2 h-2 bg-orange-400 rounded-full opacity-40 animate-bounce"
					style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}
				></div>
				<div
					className="absolute top-60 right-24 w-2 h-2 bg-pink-400 rounded-full opacity-40 animate-bounce"
					style={{ animationDelay: '1s', animationDuration: '4s' }}
				></div>
				<div
					className="absolute bottom-32 left-32 w-3 h-3 bg-yellow-400 rounded-full opacity-40 animate-bounce"
					style={{ animationDelay: '0.3s', animationDuration: '3.2s' }}
				></div>
				<div
					className="absolute bottom-48 left-24 w-2 h-2 bg-red-400 rounded-full opacity-40 animate-bounce"
					style={{ animationDelay: '0.8s', animationDuration: '3.8s' }}
				></div>
				<div
					className="absolute top-1/3 left-40 w-2 h-2 bg-orange-400 rounded-full opacity-40 animate-bounce"
					style={{ animationDelay: '0.2s', animationDuration: '3.6s' }}
				></div> */}

				{/* Grid Pattern Overlay */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

				{/* Animated Gradient Lines */}
				<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-20 animate-[shimmer_3s_ease-in-out_infinite]"></div>
				<div
					className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-20 animate-[shimmer_3s_ease-in-out_infinite]"
					style={{ animationDelay: '1.5s' }}
				></div>

				{/* Vertical Lines */}
				<div
					className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-red-300/20 to-transparent"
					style={{ left: '15%' }}
				></div>
				<div
					className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-orange-300/20 to-transparent"
					style={{ left: '85%' }}
				></div>

				{/* Diagonal Lines */}
				<div className="absolute top-0 left-0 w-full h-full">
					
					<div
						className="absolute top-0 right-0 w-px h-full bg-gradient-to-bl from-orange-400/20 via-transparent to-transparent rotate-45 origin-right-top"
						style={{ width: '122%' }}
					></div>
          <div
						className="absolute top-0 left-0 w-px h-full bg-gradient-to-br from-red-300/30 via-transparent to-transparent -rotate-45 origin-left-top"
						style={{ width: '122%' }}
					></div>
				</div>

				{/* Radial Gradient Overlay */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-gradient-radial from-white/50 via-transparent to-transparent rounded-full"></div>

				{/* Spotlight Effect */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-red-200/20 via-transparent to-transparent"></div>
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-orange-200/20 via-transparent to-transparent"></div>
			</div>

			<div className="max-w-7xl mx-auto relative">
				<div className="text-center mb-20">
					<div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
						<AlertTriangle className="w-4 h-4" />
						<span className="text-sm font-medium">The Problem</span>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in-up animation-delay-200">
						Why Asking for Reviews{' '}
						<span className="text-red-500">Manually Fails</span>
					</h2>
					<p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
						Traditional methods create barriers that prevent satisfied
						customers from sharing their positive experiences.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{problems.map((problem, index) => {
						const Icon = problem.icon;
						return (
							<div
								key={index}
								className={`group relative overflow-hidden ${
									problem.bgColor
								} rounded-3xl p-8 border-2 ${
									problem.borderColor
								} hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-in-up animation-delay-${
									(index + 1) * 100
								}`}
							>
								{/* Gradient Glow Effect on Hover */}
								<div
									className={`absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r ${problem.color} transition duration-700 -z-10`}
								></div>

								{/* Top Right Accent Shine */}
								<span className="pointer-events-none absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-white/60 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-700"></span>

								{/* Decorative Corner Lines */}
								<div
									className={`absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 rounded-tl-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 ${problem.textColor}`}
								></div>
								<div
									className={`absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 rounded-br-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 ${problem.textColor}`}
								></div>

								{/* Icon Container with Enhanced Design */}
								<div className="relative mb-6">
									<div
										className={`w-16 h-16 bg-gradient-to-br ${problem.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg relative overflow-hidden`}
									>
										{/* Icon Background Glow */}
										<div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

										<Icon className="w-8 h-8 text-white relative z-10" />

										{/* Alert Effect */}
										<div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
									</div>
								</div>

								{/* Title with Underline Effect */}
								<div className="relative mb-3">
									<h3
										className={`text-xl font-bold ${problem.textColor} group-hover:scale-105 transition-transform relative`}
									>
										{problem.title}
										{/* Animated Underline */}
										<span
											className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${problem.color} w-0 group-hover:w-full transition-all duration-500 rounded-full`}
										></span>
									</h3>
								</div>

								{/* Description */}
								<p className="text-slate-600 group-hover:text-slate-700 transition-colors relative">
									{problem.desc}
								</p>

								{/* Hover Stats Badge */}
								<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
									<div
										className={`bg-white rounded-full px-2 py-1 text-[10px] font-bold ${problem.textColor} shadow-md`}
									>
										Critical
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* Keyframes for shimmer animation */}
			<style>{`
                @keyframes shimmer {
                    0%, 100% {
                        opacity: 0.2;
                        transform: translateX(-100%);
                    }
                    50% {
                        opacity: 0.5;
                        transform: translateX(100%);
                    }
                }
            `}</style>
		</section>
	);
};

export default Problem;