import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Lorem ipsum dolor',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',
};
export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Lorem ipsum dolor',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title',
    text: 'Lorem ipsum dolor',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Lorem ipsum dolor',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Alert = Template.bind({});
Alert.args = {
    title: 'Title',
    text: 'Lorem ipsum dolor',
    theme: TextTheme.ALERT,
};

export const Warning = Template.bind({});
Warning.args = {
    title: 'Title',
    text: 'Lorem ipsum dolor',
    theme: TextTheme.WARNING,
};
