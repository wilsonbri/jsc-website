import CatchAll from '../Pages/CatchAll/CatchAll';
import Contact from '../Pages/Contact/Contact';
import Directory from '../Pages/Directory/Directory';
import Events from '../Pages/Events/Events';
import Home from '../Pages/Home/Home';
import Links from '../Pages/Links/Links';
import MemoryVerses from '../Pages/MemoryVerses/MemoryVerses';
import Missions from '../Pages/Missions/Missions';
import Sermons from '../Pages/Sermons/Sermons';

export default [
	{
		name: 'Home',
		path: '',
		response() {
			return {
				body: Home
			};
		}
	},
	{
		name: 'Missions',
		path: 'missions',
		response() {
			return {
				body: Missions
			};
		}
	},
	{
		name: 'Events',
		path: 'events',
		response() {
			return {
				body: Events
			};
		}
	},
	{
		name: 'Sermons',
		path: 'sermons',
		response() {
			return {
				body: Sermons
			};
		}
	},
	{
		name: 'Memory Verses',
		path: 'memoryverses',
		response() {
			return {
				body: MemoryVerses
			};
		}
	},
	{
		name: 'Links',
		path: 'links',
		response() {
			return {
				body: Links
			};
		}
	},
	{
		name: 'Contact Us',
		path: 'contact',
		response() {
			return {
				body: Contact
			};
		}
	},
	{
		name: 'Directory',
		path: 'directory',
		response() {
			return {
				body: Directory
			};
		}
	},
	{
		name: 'Catch All',
		path: '(.*)',
		response() {
			return {
				body: CatchAll
			};
		}
	}
]