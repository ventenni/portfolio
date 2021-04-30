import React from 'react';

// Components
import Button from './../views/components/Button';

// Layout
import TwoColumn from './../views/layouts/TwoColumn';

export default {
  title: 'Buttons',
  component: Button,
};

export const BasicButtons = () => (
	<React.Fragment>
		<TwoColumn
			one={<Button className="btn-basic">Background</Button>}
			two={<Button className="btn-basic--outline"rounded={true}>Outline</Button>}
		/>

		<TwoColumn
			one={<Button className="btn-shadow">Shadow</Button>}
			two={<Button className="btn-gradient">tbc....</Button>}
		/>

	</React.Fragment>
);

export const NeonButtons = () => (
	<TwoColumn
		one={<Button className="btn-neon btn-rounded">Rounded</Button>}
		two={<Button className="btn-neon">Neon</Button>}
	/>
);
