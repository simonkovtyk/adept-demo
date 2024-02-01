import ReactDOM from 'react-dom/client'
import { HomeView } from "./core/components/views/home/home.view.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(<>
	<HomeView />
	<p>Noch ein Element aber aus der render-Methode</p>
</>)
