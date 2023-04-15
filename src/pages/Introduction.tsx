import Button from "components/atoms/Button";

export default function Introduction() {
	return (
		<div className="w-[80%] md:w-[60%] min-h-[400px] absolute top-40 left-1/2 -translate-x-1/2" id="main">
			<h4 className="font-mono text-base mb-5 text-primary">Hi, my name is</h4>
			<h2 className="font-sans font-bold mb-3 xl:text-7xl text-[#CDD6F7] md:text-5xl lg:text-6xl text-3xl">Sai Sumith.</h2>
			<h2 className="font-sans font-bold mb-4 xl:text-7xl text-[#8992B1] md:text-5xl lg:text-6xl text-3xl">I build things for the web.</h2>
			<h4 className="font-sans text-base text-[#8992B1] lg:w-1/2 w-full">
				I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focussed on building accessible user
				interfaces for medical practice at{" "}
				<a href="https://www.onito.io/" target="_blank">
					<span className="text-primary">Onito.io.</span>
				</a>
			</h4>

			<div className="w-[200px] mt-8">
				<Button>Check out my work</Button>
			</div>
		</div>
	);
}
