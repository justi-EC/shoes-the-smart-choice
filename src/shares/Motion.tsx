import { motion } from 'framer-motion';

type Props = {
	children: React.ReactNode;
};

export const DefaultMotion = ({ children }: Props) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
			transition={{ duration: 0.5 }}
			variants={{
				hidden: { opacity: 0 },
				visible: { opacity: 1 },
			}}
		>
			{children}
		</motion.div>
	);
};

export const DelayMotion = ({ children }: Props) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
			transition={{ delay: 0.4, duration: 0.5 }}
			variants={{
				hidden: { opacity: 0 },
				visible: { opacity: 1 },
			}}
		>
			{children}
		</motion.div>
	);
};
