#!/usr/bin/env node

import readlineSync from 'readline-sync';

const functionHello = () => {
	console.log('Welcome to the Brain Games!');
	const actual = readlineSync.question('What is your name? ');
	console.log('Hello,', actual, '!');
}

export default functionHello;

functionHello();