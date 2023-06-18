import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ProfilePage} from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

export const Primary: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;
Primary.args = {};