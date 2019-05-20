#!/usr/bin/env node

import readlineSync from 'readline-sync';

const functionHello = () => {
	console.log('Welcome to the Brain Games!');
	const userName = readlineSync.question('What is your name? ');
	console.log('Hello,', userName, '!');
}
export default functionHello;