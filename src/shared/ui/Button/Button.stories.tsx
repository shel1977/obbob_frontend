import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSIze, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'text',
    theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'text',
    theme: ButtonTheme.OUTLINE,
};
Outline.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: 'A',
    size: ButtonSIze.XL,
    theme: ButtonTheme.CLEAR,
    square: true,
};

export const SquareOutlineM = Template.bind({});
SquareOutlineM.args = {
    children: 'A',
    size: ButtonSIze.M,
    theme: ButtonTheme.OUTLINE,
    square: true,
};

export const SquareOutlineL = Template.bind({});
SquareOutlineL.args = {
    children: 'A',
    size: ButtonSIze.L,
    theme: ButtonTheme.OUTLINE,
    square: true,
};

export const SquareOutlineXL = Template.bind({});
SquareOutlineXL.args = {
    children: 'A',
    size: ButtonSIze.XL,
    theme: ButtonTheme.OUTLINE,
    square: true,
};
