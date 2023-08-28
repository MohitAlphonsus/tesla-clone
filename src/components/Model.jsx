export default function Model({ url, title, id, linkText, btns }) {
	return (
		<div style={{ backgroundImage: `url(${url})` }} className="model-section">
			<div className="section-text-box">
				<h2 className="section-heading">{title}</h2>
				{id === 1 && <p className="section-price">From $36,640</p>}

				{id === 1 ? (
					<p className="section-sub-text">
						After Federal Tax Credit % Est. Gas Savings
					</p>
				) : (
					<a href="#" className="link">
						{linkText}
					</a>
				)}

				<div className={`section-buttons ${id !== 1 ? 'bt-mb' : ''}`}>
					{id === 7 ? (
						<button className="button-white">{btns[0]}</button>
					) : (
						<>
							<button className="button-white">{btns[0]}</button>
							<button className="button-dark">{btns[1]}</button>
						</>
					)}
				</div>
				{id === 1 && (
					<p className="section-footer-text">
						*Price before incentives and savings is $47,740, excluding taxes and
						fees. Subject to change.
						<br />
						<a href="#" className="link">
							Learn about est. gas savings.
						</a>
					</p>
				)}
			</div>
		</div>
	);
}
