import AnimateHoverText from "components/atoms/AnimateHoverText";

export default function Socials() {
	return (
		<div className="fixed bottom-0 right-12 w-[40px] h-60 flex flex-col items-center justify-between">
			<a href="mailto:saisumith812@gmail.com" target="_blank" rel="noopener noreferrer">
				<AnimateHoverText>
					<h4 className="rotate-90 font-mono">saisumith812@gmail.com</h4>
				</AnimateHoverText>
			</a>
			<div className="w-[1.5px] h-24 bg-[#A8B3D0]"></div>
		</div>
	);
}
