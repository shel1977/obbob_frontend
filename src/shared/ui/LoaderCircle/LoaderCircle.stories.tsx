import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoaderCircle } from './LoaderCircle';

export default {
    title: 'shared/LoaderCircle',
    component: LoaderCircle,
    argTypes: {
    },
} as ComponentMeta<typeof LoaderCircle>;

const Template: ComponentStory<typeof LoaderCircle> = (args) => <LoaderCircle {...args} />;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
