export default function AnimateHoverText(props: React.PropsWithChildren) {
	return (
		<div className="transition ease-in-out delay-50 hover:-translate-y-1 duration-300 hover:text-primary text-[#A8B3D0] cursor-pointer">
			{props.children}
		</div>
	);
}
