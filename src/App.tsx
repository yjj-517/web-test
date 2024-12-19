import React from "react";
//router
import { BrowserRouter } from "react-router-dom"; //router
import Router from "@/router/index"; //router
// import AuthRouter from "@/router/utils/auth-router"; //router

const App: React.FC = () => {
	return (
		<BrowserRouter>
			{/* <AuthRouter> */}
			<Router />
			{/* </AuthRouter> */}
		</BrowserRouter>
	);
};

export default React.memo(App);
