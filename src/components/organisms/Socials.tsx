import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import AnimateHoverText from "components/atoms/AnimateHoverText";

export default function Socials() {
	return (
		<div className="fixed bottom-0 left-12 w-[40px] h-72 flex flex-col items-center justify-between">
			<a href="https://github.com/saisumith770" target="_blank">
				<AnimateHoverText>
					<FiGithub size={20} />
				</AnimateHoverText>
			</a>
			<a href="https://www.linkedin.com/in/sai-sumith-a2b0061b5/" target="_blank">
				<AnimateHoverText>
					<FiLinkedin size={20} />
				</AnimateHoverText>
			</a>
			<a href="https://twitter.com/saisumith15" target="_blank">
				<AnimateHoverText>
					<FiTwitter size={20} />
				</AnimateHoverText>
			</a>
			<a href="https://discord.gg/wQQwavJuNF" target="_blank">
				<AnimateHoverText>
					<FaDiscord size={20} />
				</AnimateHoverText>
			</a>
			<a href="https://instagram.com/saisumith15?igshid=ZDdkNTZiNTM=" target="_blank">
				<AnimateHoverText>
					<FiInstagram size={20} />
				</AnimateHoverText>
			</a>
			<div className="w-[1.5px] h-24 bg-[#A8B3D0]"></div>
		</div>
	);
}
