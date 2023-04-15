import Button from "components/atoms/Button";

export default function Contact() {
	return (
		<div
			className="w-[80%] md:w-[60%] min-h-[400px] absolute top-[330vh] pt-[20vh] lg:top-[280vh] left-1/2 -translate-x-1/2 flex flex-col items-center"
			id="contact"
		>
			<h4 className="text-primary font-mono text-base">04. What's Next?</h4>
			<h4 className="text-[#CDD7F6] font-semibold text-5xl mt-5">Get In Touch</h4>
			<h4 className="font-sans text-base text-[#8992B1] w-full text-center mt-5">
				I'm currently looking for new opportunities so that I can contribute and build my skills. My inbox is always open, whether you have a
				question or just want to say hi, I'll try my best to get back to you!
			</h4>

			<div className="w-[130px] mt-8">
				<Button>Say Hello</Button>
			</div>
		</div>
	);
}
