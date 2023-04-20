import AnimateHoverText from "components/atoms/AnimateHoverText";
import Button from "components/atoms/Button";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

export default function Contact() {
	return (
		<div
			className="w-[80%] md:w-[60%] min-h-[400px] absolute top-[590vh] pt-[20vh] lg:top-[540vh] left-1/2 -translate-x-1/2 flex flex-col items-center"
			id="contact"
		>
			<h4 className="text-primary font-mono text-base">04. What's Next?</h4>
			<h4 className="text-[#CDD7F6] font-semibold text-5xl mt-5">Get In Touch</h4>
			<h4 className="font-sans text-base text-[#8992B1] w-full text-center mt-5">
				I'm currently looking for new opportunities so that I can contribute and build my skills. My inbox is always open, whether you have a
				question or just want to say hi, I'll try my best to get back to you!
			</h4>

			<div className="w-[130px] mt-8">
				<a href="mailto:saisumith812@gmail.com" target="_blank" rel="noopener noreferrer">
					<Button>Send Mail</Button>
				</a>
			</div>

			<div className="relative top-52">
				<a href="https://github.com/saisumith770" target="_blank" rel="noopener noreferrer">
					<AnimateHoverText>
						<h4 className="font-mono text-sm text-[#8992B1] font-medium hover:text-primary">Designed & Built by Sai Sumith</h4>
					</AnimateHoverText>
				</a>

				<div className="flex justify-around mt-5">
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
				</div>
			</div>
		</div>
	);
}
