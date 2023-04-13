export function About() {
	return (
		<div className="w-[80%] md:w-[60%] h-[400px] absolute top-40 left-1/2 -translate-x-1/2 flex">
			<div className="w-full lg:w-1/2">
				<div className="flex items-center">
					<h4 className="text-primary font-mono text-xl xl:text-3xl">01.</h4>
					<h4 className="text-[#CDD7F6] font-semibold text-[1rem] xl:text-[1.5rem] ml-1">About Me</h4>
					<div className="w-1/2 h-px my-8 bg-[#233554] ml-7" />
				</div>

				<h4 className="font-sans text-base text-[#8992B1] w-full">
					Hello! My name is Sai and I enjoy creating things that live on the internet. My interest in web development started back in 2018
					when I decided to try building my own social media management platform — turns out hacking together a custom MVP taught me a lot
					about software engineering!{" "}
				</h4>
				<br />
				<h4 className="font-sans text-base text-[#8992B1] w-full">
					Fast-forward to today, and I’ve had the privilege of working at a medical based startup, edtech startup, open source projects and
					much more. My main focus these days is building accessible, inclusive products and digital experiences at{" "}
					<a href="https://www.onito.io/" target="_blank">
						<span className="text-primary">Onito.io.</span>
					</a>
				</h4>
				<br />
				<h4 className="font-sans text-base text-[#8992B1] w-full">Here are a few technologies I’ve been working with recently:</h4>
				<br />
				<div className="w-[450px] flex flex-wrap">
					<h4 className="text-[#8992B1] font-mono w-1/2">
						<span className="text-primary">▹</span> Typescript
					</h4>
					<h4 className="text-[#8992B1] font-mono w-1/2">
						<span className="text-primary">▹</span> Javascript
					</h4>
					<h4 className="text-[#8992B1] font-mono w-1/2">
						<span className="text-primary">▹</span> Golang
					</h4>
					<h4 className="text-[#8992B1] font-mono w-1/2">
						<span className="text-primary">▹</span> Java
					</h4>
					<h4 className="text-[#8992B1] font-mono w-1/2">
						<span className="text-primary">▹</span> Elixir
					</h4>
					<h4 className="text-[#8992B1] font-mono w-1/2">
						<span className="text-primary">▹</span> python
					</h4>
				</div>
			</div>

			<div className="h-full flex items-center ml-20 relative group">
				<img src="/saisumith.jpeg" className="w-80 h-80 rounded-sm z-10" />
				<div className="w-80 h-80 border-primary border absolute rounded-sm translate-x-7 translate-y-7 z-0 animate-moveBottomRight group-hover:animate-moveTopLeft group-hover:translate-x-3 group-hover:translate-y-3"></div>
			</div>
		</div>
	);
}
