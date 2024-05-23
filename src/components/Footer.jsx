
import { getToday } from '../utils/date'
const Footer = () => (
	<footer>
		<p> Idag är det: {getToday()} </p>
		<p> Studieguide | 2024 </p>
	</footer>
)

export default Footer
