import { useState } from "react";

export default function Experience() {
	const [changeTab, setTabPos] = useState(false);
	return (
		<div className="w-[80%] md:w-[60%] min-h-[400px] absolute top-40 left-1/2 -translate-x-1/2">
			<div className="flex items-center">
				<h4 className="text-primary font-mono text-xl xl:text-3xl">02.</h4>
				<h4 className="text-[#CDD7F6] font-semibold text-[1rem] xl:text-[1.5rem] ml-1">Where I've Worked</h4>
				<div className="w-0 sm:w-1/3 h-px my-8 bg-[#233554] ml-7" />
			</div>

			<div className="w-full h-60 flex">
				<div className="w-40 h-24 flex">
					<div className="w-[2px] h-full bg-[#233455] relative">
						<div
							className={`w-full h-1/2 bg-primary absolute top-0 ${
								changeTab ? "translate-y-[3rem]" : ""
							} duration-200 ease-[cubic-bezier(0.645, 0.045, 0.355, 1)] delay-100`}
						></div>
					</div>

					<div className="w-[calc(100%-3px)] h-full">
						<div
							className="w-full h-1/2 hover:bg-[rgba(35,53,84,0.4)] flex items-center px-5 cursor-pointer"
							onClick={() => setTabPos(false)}
						>
							<h4 className={`font-mono ${!changeTab ? "text-primary" : "text-[#656E8B]"} text-sm font-semibold`}>Onito</h4>
						</div>
						<div
							className="w-full h-1/2 hover:bg-[rgba(35,53,84,0.4)] flex items-center px-5 cursor-pointer"
							onClick={() => setTabPos(true)}
						>
							<h4 className={`font-mono ${changeTab ? "text-primary" : "text-[#656E8B]"} text-sm font-semibold`}>Dhanush Steel</h4>
						</div>
					</div>
				</div>
				{!changeTab && (
					<div className="w-[calc(100%-10.75rem)] h-full ml-3">
						<h4 className="font-sans text-lg text-[#CDD7F6] font-semibold">
							Fullstack Intern{" "}
							<a href="https://www.onito.io/" target="_blank">
								<span className="text-primary">@ Onito</span>
							</a>
						</h4>

						<h4 className="font-mono text-[#8992B1] text-sm">May 2022 - Present</h4>
						<div className="flex my-3">
							<span className="text-primary">▹</span>
							<h4 className="text-[#8992B1] ml-5">
								Worked on several features on the webapp notably, editorjs extension, file uploader, ipd beds etc.
							</h4>
						</div>
						<div className="flex my-3">
							<span className="text-primary">▹</span>
							<h4 className="text-[#8992B1] ml-5">
								Built the mobile app from scratch using react native and native code written in java. Some notable contributions
								include the file compression algorithm implemented with{" "}
								<a href="https://github.com/AbedElazizShe/LightCompressor" target="_blank" rel="noopener noreferrer">
									<span className="text-primary">light compressor library.</span>
								</a>
							</h4>
						</div>
						<div className="flex my-3">
							<span className="text-primary">▹</span>
							<h4 className="text-[#8992B1] ml-5">Worked on android background services to boost performance.</h4>
						</div>
						<div className="flex my-3">
							<span className="text-primary">▹</span>
							<h4 className="text-[#8992B1] ml-5">Built features on the backend in Golang and Gin-Gonic, notably file uploader.</h4>
						</div>
					</div>
				)}
				{changeTab && (
					<div className="w-[calc(100%-10.75rem)] h-full ml-3">
						<h4 className="font-sans text-lg text-[#CDD7F6] font-semibold">
							Backend Intern{" "}
							<a
								href="https://www.google.com/maps/dir/23.5374922,87.2916702/dhanush+stainless+steel/@29.5382518,57.3030991,4z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x395e8714e3388a13:0xba90606f42a68aa5!2m2!1d72.631327!2d23.010461"
								target="_blank"
							>
								<span className="text-primary">@ Dhanush Stainless Steel</span>
							</a>
						</h4>

						<h4 className="font-mono text-[#8992B1] text-sm">October 2022</h4>
						<div className="flex my-3">
							<span className="text-primary">▹</span>
							<h4 className="text-[#8992B1] ml-5">Worked on multiple patta uploads on their webapp.</h4>
						</div>
						<div className="flex my-3">
							<span className="text-primary">▹</span>
							<h4 className="text-[#8992B1] ml-5">Used python and Django Restframework to build the ground work.</h4>
						</div>
						<div className="flex my-3">
							<span className="text-primary">▹</span>
							<h4 className="text-[#8992B1] ml-5">
								Used google cloud to store patta related images and postgres for all other information.
							</h4>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
