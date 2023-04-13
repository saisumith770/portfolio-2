function NavItem({ pos, name }: { pos: string; name: string }) {
	return (
		<div className="flex items-center ml-10">
			<h4 className="text-primary font-mono text-sm">{pos}</h4>
			<h4 className="text-[#ABB7D5] font-semibold text-[0.85rem] ml-1 hover:text-primary cursor-pointer">{name}</h4>
		</div>
	);
}

export default function Nav() {
	return (
		<div className="flex flex-row justify-between pt-8 items-center">
			<a href="/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100"
					height="100"
					viewBox="0 0 84 96"
					className="w-10 h-10 ml-12 fill-none hover:fill-[rgba(101,254,218,0.15)] cursor-pointer"
				>
					<path stroke="#65FEDA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M42 3L3 25V70L42 93L81 71V26L42 3Z" />
					<path
						d="M47.679 41.9062C47.5464 40.6657 46.9877 39.6998 46.0028 39.0085C45.0275 38.3172 43.7585 37.9716 42.196 37.9716C41.0975 37.9716 40.1553 38.1373 39.3693 38.4688C38.5833 38.8002 37.982 39.25 37.5653 39.8182C37.1487 40.3864 36.9356 41.035 36.9261 41.7642C36.9261 42.3703 37.0634 42.8958 37.3381 43.3409C37.6222 43.786 38.0057 44.1648 38.4886 44.4773C38.9716 44.7803 39.5066 45.036 40.0938 45.2443C40.6809 45.4527 41.2727 45.6278 41.8693 45.7699L44.5966 46.4517C45.6951 46.7074 46.7509 47.053 47.7642 47.4886C48.7869 47.9242 49.7008 48.4735 50.5057 49.1364C51.3201 49.7992 51.964 50.5994 52.4375 51.5369C52.911 52.4744 53.1477 53.5729 53.1477 54.8324C53.1477 56.5369 52.7121 58.0379 51.8409 59.3352C50.9697 60.6231 49.7102 61.6316 48.0625 62.3608C46.4242 63.0805 44.4403 63.4403 42.1108 63.4403C39.8475 63.4403 37.8826 63.09 36.2159 62.3892C34.5587 61.6884 33.2614 60.6657 32.3239 59.321C31.3958 57.9763 30.8939 56.3381 30.8182 54.4062H36.0028C36.0786 55.4195 36.3911 56.2623 36.9403 56.9347C37.4896 57.607 38.2045 58.1089 39.0852 58.4403C39.9754 58.7718 40.9697 58.9375 42.0682 58.9375C43.214 58.9375 44.2178 58.767 45.0795 58.4261C45.9508 58.0758 46.6326 57.5928 47.125 56.9773C47.6174 56.3523 47.8684 55.6231 47.8778 54.7898C47.8684 54.0322 47.6458 53.4072 47.2102 52.9148C46.7746 52.4129 46.1638 51.9962 45.3778 51.6648C44.6013 51.3239 43.6922 51.0208 42.6506 50.7557L39.3409 49.9034C36.9451 49.2879 35.0511 48.3551 33.6591 47.1051C32.2765 45.8456 31.5852 44.1742 31.5852 42.0909C31.5852 40.3769 32.0492 38.8759 32.9773 37.5881C33.9148 36.3002 35.1884 35.3011 36.7983 34.5909C38.4081 33.8712 40.2311 33.5114 42.267 33.5114C44.3314 33.5114 46.1402 33.8712 47.6932 34.5909C49.2557 35.3011 50.482 36.2907 51.3722 37.5597C52.2623 38.8191 52.7216 40.268 52.75 41.9062H47.679Z"
						fill="#65FEDA"
					/>
				</svg>
			</a>
			<div className="flex">
				<NavItem pos="01." name="About" />
				<NavItem pos="02." name="Experience" />
				<NavItem pos="03." name="Work" />
				<NavItem pos="04." name="Contact" />

				<div className="w-24 h-10 border-2 border-primary rounded-md flex justify-center items-center mx-10 hover:bg-[rgba(101,254,218,0.15)] cursor-pointer">
					<h4 className="text-primary">Resume</h4>
				</div>
			</div>
		</div>
	);
}
