// <!-- exception -->
import React, { useState } from "react";

const View: React.FC = () => {
	const [str] = useState<string>("exception");
	return <div>{str}</div>;
};

export default View;
