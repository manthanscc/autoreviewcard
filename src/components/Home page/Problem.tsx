import React from 'react';
import { Heart, Clock, Target, Settings } from 'lucide-react';

const problems = [
	{
		icon: Heart,
		title: 'Too Awkward',
		desc: 'Asking customers directly feels pushy and uncomfortable',
		color: 'from-red-500 to-pink-500',
		bg: 'bg-red-50',
	},
	{
		icon: Clock,
		title: 'Takes Time',
		desc: 'Staff waste time explaining instead of serving customers',
		color: 'from-orange-500 to-yellow-500',
		bg: 'bg-orange-50',
	},
	{
		icon: Target,
		title: 'Customers Forget',
		desc: 'Even willing customers forget by the time they get home',
		color: 'from-purple-500 to-indigo-500',
		bg: 'bg-purple-50',
	},
	{
		icon: Settings,
		title: 'Complex Process',
		desc: 'Finding and reviewing on Google is more complicated than it should be',
		color: 'from-blue-500 to-cyan-500',
		bg: 'bg-blue-50',
	},
];

export const Problem: React.FC = () => {
	return (
		<section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50/30 relative">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-20">
					<div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
						<Target className="w-4 h-4" />
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

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{problems.map((problem, index) => {
						const Icon = problem.icon;
						return (
							<div
								key={index}
								className={`group ${
									problem.bg
								} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-in-up animation-delay-${
									(index + 1) * 200
								}`}
							>
								<div
									className={`w-16 h-16 bg-gradient-to-br ${problem.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
								>
									<Icon className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
									{problem.title}
								</h3>
								<p className="text-slate-600 group-hover:text-slate-700 transition-colors">
									{problem.desc}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Problem;