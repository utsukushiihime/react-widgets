import React, { useState } from "react";

const Accordion = ({ items }) => {
	const [expanded, setExpanded] = useState(null);

	const onTitleClick = (index) => {
		setExpanded(index);
	};

	const renderedItems = items.map((item, index) => {
		const show = index === expanded ? "show" : " ";
		return (
			<div key={index} className="accordion-item">
				<h2 className="accordion-header">
					<button
						className="accordion-button"
						onClick={() => onTitleClick(index)}
					>
						{item.title}
					</button>
				</h2>
				<div className={`accordion-collapse collapse ${show}`}>
					<div className="accordion-body">
						<h3 className="accordion-title">{item.title}</h3>
						<div className="accordion-content">{item.content}</div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<>
			<div className="accordion">{renderedItems}</div>
		</>
	);
};

export default Accordion;
