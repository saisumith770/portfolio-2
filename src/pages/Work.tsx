import AnimateHoverText from "components/atoms/AnimateHoverText";
import { useWindowSize } from "hooks/useWindowSize";
import { FaNpm } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

interface CardProps {
	flipOrientation?: boolean;
	img: string;
	header: string;
	content: JSX.Element;
	tech: string[];

	githubLink?: string;
	npmLink?: string;
}
function ExpandedCard(props: CardProps) {
	return (
		<div className="w-full h-[550px] relative flex items-center">
			{!props.flipOrientation && <img src={props.img} className="w-3/5 object-contain rounded-md" />}
			<div className={`w-1/2 ${props.flipOrientation ? "text-left" : "text-right"} z-10 ${!props.flipOrientation ? "absolute right-0" : ""}`}>
				<h4 className="text-primary font-mono text-sm">Featured Project</h4>
				<h2 className="text-[#C6D0F1] font-sans text-2xl font-semibold mb-5">{props.header}</h2>
				<div className="w-full bg-[#102241] rounded-md shadow-lg p-5">{props.content}</div>

				<div className={`flex mt-5 ${props.flipOrientation ? "justify-start" : "justify-end"}`}>
					{props.tech.map((item, index) => (
						<h4 className="font-mono text-[#919BB8] text-sm ml-3" key={index}>
							{item}
						</h4>
					))}
				</div>

				<div className={`flex mt-3 ${props.flipOrientation ? "justify-start" : "justify-end"}`}>
					{props.githubLink && (
						<div className="ml-3">
							<a href={props.githubLink} target="_blank" rel="noopener noreferrer">
								<AnimateHoverText>
									<FiGithub size={20} />
								</AnimateHoverText>
							</a>
						</div>
					)}
					{props.npmLink && (
						<div className="ml-3">
							<a href={props.npmLink} target="_blank" rel="noopener noreferrer">
								<AnimateHoverText>
									<FaNpm size={25} />
								</AnimateHoverText>
							</a>
						</div>
					)}
				</div>
			</div>
			{props.flipOrientation && <img src={props.img} className={`w-3/5 object-contain rounded-md absolute right-0 z-0`} />}
		</div>
	);
}

function ShortPackedCard(props: CardProps & { customHeight?: number }) {
	return (
		<div className="w-full h-[550px] relative flex items-center">
			<div className={`w-full h-[90%] relative`}>
				<img src={props.img} className="h-full object-cover rounded-md" />
				<div className="absolute top-0 left-0 w-full h-full p-10 bg-[rgba(12,33,52,0.95)] border-[#11283A] border-2 rounded-md">
					<h4 className="text-primary font-mono text-sm">Featured Project</h4>
					<h2 className="text-[#ffffff] font-sans text-2xl font-semibold mb-5">{props.header}</h2>
					<div className="w-full rounded-md shadow-lg">{props.content}</div>
					<div className={`flex mt-5 justify-end`}>
						{props.tech.map((item, index) => (
							<h4 className="font-mono text-[#919BB8] text-sm ml-3" key={index}>
								{item}
							</h4>
						))}
					</div>
					<div className={`flex mt-3 justify-end`}>
						{props.githubLink && (
							<div className="ml-3">
								<a href={props.githubLink} target="_blank" rel="noopener noreferrer">
									<AnimateHoverText>
										<FiGithub size={20} />
									</AnimateHoverText>
								</a>
							</div>
						)}
						{props.npmLink && (
							<div className="ml-3">
								<a href={props.npmLink} target="_blank" rel="noopener noreferrer">
									<AnimateHoverText>
										<FaNpm size={25} />
									</AnimateHoverText>
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Work() {
	const { width } = useWindowSize();
	return (
		<div className="w-[80%] md:w-[60%] min-h-[400px] absolute pt-[20vh] top-[330vh] lg:top-[260vh] left-1/2 -translate-x-1/2 " id="work">
			<div className="w-full h-[1000px]">
				<div className="w-full lg:w-1/2">
					<div className="flex items-center">
						<h4 className="text-primary font-mono text-xl xl:text-3xl">03.</h4>
						<h4 className="text-[#CDD7F6] font-semibold text-[1rem] xl:text-[1.5rem] ml-1">Some things I've built</h4>
					</div>
				</div>

				{width > 1000 ? (
					<>
						<ExpandedCard
							header="React Typesafe Hooks"
							img="/react-typesafe-hooks.png"
							content={
								<h4 className="text-[#9DA7C6] font-sans font-medium text-base">
									React hooks have been most influential in developing exceptional ui logic and made functional paradigm a defacto
									for react components.
									<br />
									<br />I found myself rewriting various hooks in my projects and a simple hooks library wouldn't suffice as I would
									forget their purpose in many cases.
									<br />
									So I made this library that has well documented hooks with examples and usage that you can scour through in your
									vs code intellisense.
								</h4>
							}
							tech={["React", "Typescript", "Hooks", "Utilities"]}
							githubLink="https://github.com/saisumith770/react-typesafe-hooks"
							npmLink="https://www.npmjs.com/package/react-typesafe-hooks"
						/>

						<ExpandedCard
							header="Phoenix Sockets"
							img="/phx-socket.png"
							content={
								<h4 className="text-[#9DA7C6] font-sans font-medium text-base">
									Elixir is one of the best languages to build distributed software and the phoenix framework is the go-to for
									building web servers.
									<br />
									<br />
									Phoenix has a really interesting approach to websockets. They use rooms and channels to communicate messages. At
									this point I was a predominant typescript user and the phoenix js library did not have first class typescript
									support.
									<br />
									So I made this library that incorporates several features to control messages sent via websockets in phoenix.
								</h4>
							}
							tech={["Typescript", "Websocket", "Phoenix"]}
							flipOrientation
							githubLink="https://github.com/saisumith770/phx-socket"
							npmLink="https://www.npmjs.com/package/phx-socket"
						/>

						<ExpandedCard
							header="Signalling Server"
							img="/signalling-server.png"
							content={
								<h4 className="text-[#9DA7C6] font-sans font-medium text-base">
									WebRTC is probably one the most intricate technology to master. But it is the best when it comes down to streaming
									services.
									<br />
									<br />
									As an attempt to building peer-to-peer networks I built this mockup signalling server using websockets.
								</h4>
							}
							tech={["Typescript", "Express", "Websockets"]}
							githubLink="https://github.com/saisumith770/signalling-server"
						/>
					</>
				) : (
					<>
						<ShortPackedCard
							header="React Typesafe Hooks"
							img="/react-typesafe-hooks.png"
							content={
								<h4 className="text-[#9DA7C6] font-sans font-medium text-sm">
									React hooks have been most influential in developing exceptional ui logic and made functional paradigm a defacto
									for react components.
									<br />
									<br />I found myself rewriting various hooks in my projects and a simple hooks library wouldn't suffice as I would
									forget their purpose in many cases.
									<br />
									So I made this library that has well documented hooks with examples and usage that you can scour through in your
									vs code intellisense.
								</h4>
							}
							tech={["React", "Typescript", "Hooks", "Utilities"]}
							githubLink="https://github.com/saisumith770/react-typesafe-hooks"
							npmLink="https://www.npmjs.com/package/react-typesafe-hooks"
						/>

						<ShortPackedCard
							header="Phoenix Sockets"
							img="/phx-socket.png"
							content={
								<h4 className="text-[#9DA7C6] font-sans font-medium text-sm">
									Elixir is one of the best languages to build distributed software and the phoenix framework is the go-to for
									building web servers.
									<br />
									<br />
									Phoenix has a really interesting approach to websockets. They use rooms and channels to communicate messages. At
									this point I was a predominant typescript user and the phoenix js library did not have first class typescript
									support.
									<br />
									So I made this library that incorporates several features to control messages sent via websockets in phoenix.
								</h4>
							}
							tech={["Typescript", "Websocket", "Phoenix"]}
							flipOrientation
							githubLink="https://github.com/saisumith770/phx-socket"
							npmLink="https://www.npmjs.com/package/phx-socket"
						/>

						<ShortPackedCard
							header="Signalling Server"
							img="/signalling-server.png"
							content={
								<h4 className="text-[#9DA7C6] font-sans font-medium text-sm">
									WebRTC is probably one the most intricate technology to master. But it is the best when it comes down to streaming
									services.
									<br />
									<br />
									As an attempt to building peer-to-peer networks I built this mockup signalling server using websockets.
								</h4>
							}
							tech={["Typescript", "Express", "Websockets"]}
							githubLink="https://github.com/saisumith770/signalling-server"
						/>
					</>
				)}
			</div>
		</div>
	);
}
