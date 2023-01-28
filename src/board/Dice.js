import React from 'react';
import RollDice from './RollDice'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export function Dice() {
return (
	<div>
	<RollDice />
	</div>
);
}

export default Dice;
