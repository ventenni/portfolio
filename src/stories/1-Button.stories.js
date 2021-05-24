import React from 'react';

// Components
import Button from './../views/components/Button';

// Layout
import TwoColumn from './../views/layouts/TwoColumn';
import ThreeColumn from './../views/layouts/ThreeColumn';

export default {
  title: 'Buttons',
  component: Button,
};

export const BasicButtons = () => (
	<React.Fragment>
		<ThreeColumn
			one={<Button className="btn-basic">Basic</Button>}
			two={<Button className="btn-basic--outline"rounded={true}>Outline</Button>}
			three={<Button className="btn-shadow">Shadow</Button>}
		/>

	</React.Fragment>
);

export const NeonButtons = () => (
	<TwoColumn
		one={<Button className="btn-neon btn-rounded">Rounded</Button>}
		two={<Button className="btn-neon">Neon</Button>}
	/>
);
