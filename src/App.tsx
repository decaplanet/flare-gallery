import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

import router from "./router";
import SEOMetaTag from "./SEOMetaTag";

function App() {
	return (
		<div>
			<RecoilRoot>
				<SEOMetaTag />
				<RouterProvider router={router} />
			</RecoilRoot>
		</div>
	);
}

export default App;
