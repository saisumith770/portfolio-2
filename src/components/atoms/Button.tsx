export default function Button(props: React.PropsWithChildren) {
	return (
		<div className="px-5 h-10 border-[1px] border-primary rounded-md flex justify-center items-center hover:bg-[rgba(101,254,218,0.15)] cursor-pointer">
			<h4 className="text-primary">{props.children}</h4>
		</div>
	);
}
