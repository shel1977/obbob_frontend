import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
        + ' elit. Aperiam architecto aspernatur autem eveniet excepturi,'
        + ' ipsam laboriosam laborum minima molestias necessitatibus omnis'
        + ' optio quod repellat saepe tenetur vel vero, vitae voluptas?',
};
