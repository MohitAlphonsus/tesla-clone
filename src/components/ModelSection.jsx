import Model from './Model';

export default function ModelSection({ data }) {
	return (
		<div>
			{data.map(dt => (
				<Model
					key={dt.id}
					url={dt.imgUrl}
					title={dt.title}
					id={dt.id}
					linkText={dt.linkText}
					btns={dt.btns}
				/>
			))}
		</div>
	);
}
