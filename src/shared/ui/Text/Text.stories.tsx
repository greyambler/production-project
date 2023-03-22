import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description Description ',
};
export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description Description ',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title lorem ipsun',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Description Description Description Description Description ',
};

export const PrimaryDurk = Template.bind({});
PrimaryDurk.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description Description ',
};
PrimaryDurk.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDurk = Template.bind({});
OnlyTitleDurk.args = {
    title: 'Title lorem ipsun',
};
OnlyTitleDurk.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDurk = Template.bind({});
OnlyTextDurk.args = {
    text: 'Description Description Description Description Description ',
};
OnlyTextDurk.decorators = [ThemeDecorator(Theme.DARK)];
