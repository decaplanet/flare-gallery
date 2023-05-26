import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Home />,
			errorElement: <NotFound />,
			children: [{}],
		},
	],
	{
		basename: `${process.env.PUBLIC_URL}`,
	}
);

export default router;
