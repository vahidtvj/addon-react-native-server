import { Channel } from '@storybook/core/channels';
import { Options } from '@storybook/core/types';

type ReactNativeServerOptions = {
    host?: string;
    port?: number;
};
declare function experimental_serverChannel(channel: Channel, { configType, presets, loglevel }: Options): Promise<Channel>;

export { type ReactNativeServerOptions, experimental_serverChannel };
